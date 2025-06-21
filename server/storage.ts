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
