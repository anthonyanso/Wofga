import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema, insertBlogCommentSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, message: "Contact saved and email sent", id: contact.id });
    } catch (error) {
      console.error("Contact submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof z.ZodError ? "Invalid contact data" : "Failed to submit contact" 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const existing = await storage.getNewsletterByEmail(validatedData.email);
      
      if (existing) {
        return res.status(409).json({ 
          success: false, 
          message: "Email already subscribed to newsletter" 
        });
      }

      const newsletter = await storage.createNewsletter(validatedData);
      res.json({ success: true, message: "Successfully subscribed to newsletter", id: newsletter.id });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof z.ZodError ? "Invalid email address" : "Failed to subscribe to newsletter" 
      });
    }
  });

  // Get blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const category = req.query.category as string;
      
      const posts = await storage.getBlogPosts({ page, limit, category, published: true });
      res.json(posts);
    } catch (error) {
      console.error("Blog posts error:", error);
      res.status(500).json({ success: false, message: "Failed to fetch blog posts" });
    }
  });

  // Get single blog post
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ success: false, message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Blog post error:", error);
      res.status(500).json({ success: false, message: "Failed to fetch blog post" });
    }
  });

  // Get testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const featured = req.query.featured === 'true';
      const testimonials = await storage.getTestimonials(featured);
      res.json(testimonials);
    } catch (error) {
      console.error("Testimonials error:", error);
      res.status(500).json({ success: false, message: "Failed to fetch testimonials" });
    }
  });

  // Get portfolio items
  app.get("/api/portfolio", async (req, res) => {
    try {
      const category = req.query.category as string;
      const featured = req.query.featured === 'true';
      const portfolio = await storage.getPortfolioItems({ category, featured });
      res.json(portfolio);
    } catch (error) {
      console.error("Portfolio error:", error);
      res.status(500).json({ success: false, message: "Failed to fetch portfolio items" });
    }
  });

  // Submit blog comment
  app.post("/api/blog/:slug/comments", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ success: false, message: "Blog post not found" });
      }

      const validatedData = insertBlogCommentSchema.parse({
        ...req.body,
        postId: post.id
      });

      const comment = await storage.createBlogComment(validatedData);
      res.json({ success: true, message: "Comment submitted for approval", id: comment.id });
    } catch (error) {
      console.error("Comment submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof z.ZodError ? "Invalid comment data" : "Failed to submit comment" 
      });
    }
  });

  // Get blog comments
  app.get("/api/blog/:slug/comments", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ success: false, message: "Blog post not found" });
      }

      const comments = await storage.getBlogComments(post.id);
      res.json(comments);
    } catch (error) {
      console.error("Comments fetch error:", error);
      res.status(500).json({ success: false, message: "Failed to fetch comments" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
