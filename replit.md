# Wofga Digital - Full-Stack Technology Solutions Platform

## Overview

This is a comprehensive full-stack web application for Wofga Digital, a technology solutions company. The application serves as both a marketing website and a business platform, showcasing services, managing client interactions, and providing content through a blog system. Built with modern web technologies, it features a React frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds
- **Animation**: AOS (Animate on Scroll) library for scroll-based animations

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API endpoints with proper error handling

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Hot Reload**: Vite development server with HMR
- **Error Handling**: Runtime error overlay for development

## Key Components

### Database Schema (shared/schema.ts)
- **Users**: Authentication and user management
- **Contacts**: Contact form submissions and inquiries
- **Newsletters**: Email subscription management
- **Blog Posts**: Content management with categories, tags, and publishing status
- **Testimonials**: Client testimonials and reviews
- **Portfolio Items**: Project showcase and case studies
- **Blog Comments**: User engagement on blog posts

### API Endpoints (server/routes.ts)
- `POST /api/contact` - Contact form submission
- `POST /api/newsletter` - Newsletter subscription
- `GET /api/blog` - Blog posts with pagination and filtering
- `GET /api/blog/:slug` - Individual blog post
- `POST /api/blog/:slug/comments` - Blog comment submission
- `GET /api/testimonials` - Client testimonials
- `GET /api/portfolio` - Portfolio items

### Frontend Pages
- **Marketing Pages**: Home, About, Services, Portfolio, Team, Testimonials, Pricing
- **Content Pages**: Blog, individual blog posts, FAQ
- **Utility Pages**: Contact, Privacy Policy, Terms of Service, Cookie Policy
- **Error Handling**: Custom 404 page

### UI Components
- **Layout Components**: Navigation, Footer, SEO wrapper
- **Form Components**: Contact forms, newsletter subscription, comment forms
- **Content Components**: Cards, testimonials, portfolio items, blog posts
- **Utility Components**: Loading states, error boundaries, toast notifications

## Data Flow

1. **Client Requests**: Frontend components make API requests using TanStack React Query
2. **Server Processing**: Express.js routes handle requests with validation and business logic
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions with type safety
4. **Response Handling**: Structured JSON responses with proper error states
5. **State Management**: React Query caches and synchronizes server state
6. **UI Updates**: Components reactively update based on data changes

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Minimal React router
- **clsx & tailwind-merge**: Conditional styling utilities

### UI and Styling
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **aos**: Scroll animation library
- **lucide-react**: Icon library

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **vite**: Frontend build tool and development server

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Express.js server with dependencies
3. **Asset Optimization**: Vite optimizes images, CSS, and JavaScript
4. **Output**: Static files in `dist/public`, server bundle in `dist/index.js`

### Production Environment
- **Deployment Target**: Replit Autoscale
- **Port Configuration**: Server runs on port 5000, external port 80
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Process Management**: Single process serving both API and static files

### Database Management
- **Schema Migrations**: Drizzle Kit handles database schema changes
- **Connection Pooling**: Neon serverless handles automatic scaling
- **Data Persistence**: PostgreSQL ensures data integrity and relationships

## Changelog

- June 21, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.