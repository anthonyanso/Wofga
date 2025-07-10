import { 
  users, 
  contacts, 
  newsletters, 
  blogPosts, 
  testimonials, 
  portfolioItems, 
  blogComments,
  type User, 
  type InsertUser,
  type Contact,
  type InsertContact,
  type Newsletter,
  type InsertNewsletter,
  type BlogPost,
  type InsertBlogPost,
  type Testimonial,
  type InsertTestimonial,
  type PortfolioItem,
  type InsertPortfolioItem,
  type BlogComment,
  type InsertBlogComment
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, ilike, count } from "drizzle-orm";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  // Newsletter methods
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  getNewsletters(): Promise<Newsletter[]>;

  // Blog methods
  getBlogPosts(options?: { page?: number; limit?: number; category?: string; published?: boolean }): Promise<{ posts: BlogPost[]; total: number; totalPages: number }>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost>;

  // Blog comments methods
  getBlogComments(postId: number): Promise<BlogComment[]>;
  createBlogComment(comment: InsertBlogComment): Promise<BlogComment>;

  // Testimonial methods
  getTestimonials(featured?: boolean): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Portfolio methods
  getPortfolioItems(options?: { category?: string; featured?: boolean }): Promise<PortfolioItem[]>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Contact methods
  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db
      .insert(contacts)
      .values(contact)
      .returning();

    // Send email notification to Wofga Digital
    try {
      if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        console.error("GMAIL_USER or GMAIL_APP_PASSWORD is not set in environment variables.");
      }
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f4f6fb; padding: 40px;">
          <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.07); overflow: hidden;">
            <div style="background: #1a237e; color: #fff; padding: 32px 24px 16px 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 2.2rem; letter-spacing: 1px;">Wofga Digital</h1>
              <p style="margin: 8px 0 0 0; font-size: 1.1rem;">New Contact Submission</p>
            </div>
            <div style="padding: 32px 24px;">
              <h2 style="margin-top: 0; color: #1a237e;">Contact Details</h2>
              <table style="width: 100%; font-size: 1rem; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${(contact.firstName || "") + (contact.lastName ? " " + contact.lastName : "") || "-"}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${contact.email || "-"}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${contact.phone || "-"}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Message:</td><td>${contact.message || "-"}</td></tr>
              </table>
              <div style="margin-top: 32px; text-align: center;">
                <a href="https://wofgadigital.com" style="display: inline-block; background: #1a237e; color: #fff; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; letter-spacing: 1px;">Visit Wofga Digital</a>
              </div>
            </div>
            <div style="background: #f4f6fb; color: #888; text-align: center; padding: 16px; font-size: 0.95rem;">
              &copy; ${new Date().getFullYear()} Wofga Digital. All rights reserved.
            </div>
          </div>
        </div>
      `;

      const info = await transporter.sendMail({
        from: `Wofga Digital <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: "New Contact Submission - Wofga Digital",
        html,
      });
      console.log("Contact email sent:", info);
    } catch (err) {
      console.error("Failed to send contact email:", err);
      throw err;
    }

    return newContact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  // Newsletter methods
  async createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter> {
    const [newNewsletter] = await db
      .insert(newsletters)
      .values(newsletter)
      .returning();
    return newNewsletter;
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    const [newsletter] = await db.select().from(newsletters).where(eq(newsletters.email, email));
    return newsletter || undefined;
  }

  async getNewsletters(): Promise<Newsletter[]> {
    return await db.select().from(newsletters).orderBy(desc(newsletters.subscribedAt));
  }

  // Blog methods
  async getBlogPosts(options: { page?: number; limit?: number; category?: string; published?: boolean } = {}): Promise<{ posts: BlogPost[]; total: number; totalPages: number }> {
    const { page = 1, limit = 10, category, published = true } = options;
    const offset = (page - 1) * limit;

    let query = db.select().from(blogPosts);
    let countQuery = db.select({ count: count() }).from(blogPosts);

    const conditions = [];
    if (published !== undefined) {
      conditions.push(eq(blogPosts.published, published));
    }
    if (category) {
      conditions.push(ilike(blogPosts.category, `%${category}%`));
    }

    if (conditions.length > 0) {
      const whereCondition = conditions.length === 1 ? conditions[0] : and(...conditions);
      query = query.where(whereCondition) as any;
      countQuery = countQuery.where(whereCondition) as any;
    }

    const [posts, totalResult] = await Promise.all([
      query.orderBy(desc(blogPosts.createdAt)).limit(limit).offset(offset),
      countQuery
    ]);

    const total = totalResult[0].count;
    const totalPages = Math.ceil(total / limit);

    return { posts, total, totalPages };
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || undefined;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db
      .insert(blogPosts)
      .values(post)
      .returning();
    return newPost;
  }

  async updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost> {
    const [updatedPost] = await db
      .update(blogPosts)
      .set({ ...post, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return updatedPost;
  }

  // Blog comments methods
  async getBlogComments(postId: number): Promise<BlogComment[]> {
    return await db
      .select()
      .from(blogComments)
      .where(and(eq(blogComments.postId, postId), eq(blogComments.approved, true)))
      .orderBy(desc(blogComments.createdAt));
  }

  async createBlogComment(comment: InsertBlogComment): Promise<BlogComment> {
    const [newComment] = await db
      .insert(blogComments)
      .values(comment)
      .returning();
    return newComment;
  }

  // Testimonial methods
  async getTestimonials(featured?: boolean): Promise<Testimonial[]> {
    let query = db.select().from(testimonials);
    
    if (featured !== undefined) {
      query = query.where(eq(testimonials.featured, featured)) as any;
    }

    return await query.orderBy(desc(testimonials.createdAt));
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [newTestimonial] = await db
      .insert(testimonials)
      .values(testimonial)
      .returning();
    return newTestimonial;
  }

  // Portfolio methods
  async getPortfolioItems(options: { category?: string; featured?: boolean } = {}): Promise<PortfolioItem[]> {
    const { category, featured } = options;
    let query = db.select().from(portfolioItems);

    const conditions = [];
    if (featured !== undefined) {
      conditions.push(eq(portfolioItems.featured, featured));
    }
    if (category) {
      conditions.push(ilike(portfolioItems.category, `%${category}%`));
    }

    if (conditions.length > 0) {
      const whereCondition = conditions.length === 1 ? conditions[0] : and(...conditions);
      query = query.where(whereCondition) as any;
    }

    return await query.orderBy(desc(portfolioItems.completedAt));
  }

  async createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem> {
    const [newItem] = await db
      .insert(portfolioItems)
      .values(item)
      .returning();
    return newItem;
  }
}

export const storage = new DatabaseStorage();
