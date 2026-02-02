# Next.js Blog

A modern, full-stack blog application built with **Next.js 16**, **Convex** as the backend, and **Better Auth** for authentication.

## ✨ Features

- 📝 **Blog Posts** - Create, read, and search blog posts
- 💬 **Comments** - Comment on posts with real-time updates
- 🔍 **Full-text Search** - Search posts by title and body content
- 🔐 **Authentication** - Secure authentication powered by Better Auth
- 👥 **Real-time Presence** - See who's viewing a post
- 🌓 **Dark Mode** - Toggle between light and dark themes
- ⚡ **Real-time Updates** - Powered by Convex's reactive backend

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 16](https://nextjs.org) with App Router |
| **Backend** | [Convex](https://convex.dev) |
| **Authentication** | [Better Auth](https://better-auth.com) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) |
| **UI Components** | [Radix UI](https://radix-ui.com) + [shadcn/ui](https://ui.shadcn.com) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| **Linting** | [Biome](https://biomejs.dev) |
| **Package Manager** | [Bun](https://bun.sh) |

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (shared-layout)/    # Routes with shared layout
│   │   ├── blog/           # Blog post pages
│   │   └── create/         # Create post page
│   ├── api/                # API routes
│   ├── auth/               # Authentication pages
│   └── schemas/            # Zod validation schemas
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── web/                # Custom web components
├── convex/                 # Convex backend
│   ├── posts.ts            # Post mutations & queries
│   ├── comments.ts         # Comment mutations & queries
│   ├── presence.ts         # Real-time presence
│   ├── auth.ts             # Authentication config
│   └── schema.ts           # Database schema
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- A [Convex](https://convex.dev) account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shrutikcs/nextjs-blog.git
   cd nextjs-blog
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up Convex**
   ```bash
   bunx convex dev
   ```
   Follow the prompts to create or link a Convex project.

4. **Configure environment variables**
   
   Create a `.env.local` file with the required variables (see Convex setup for details).

5. **Run the development server**
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** You'll need to run both `bun dev` (Next.js) and `bunx convex dev` (Convex) simultaneously during development.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start the development server |
| `bun build` | Build for production |
| `bun start` | Start the production server |
| `bun lint` | Run Biome linter |
| `bun format` | Format code with Biome |
| `bun check` | Run all Biome checks with auto-fix |

## 🗃️ Database Schema

### Posts
- `title` - Post title (searchable)
- `body` - Post content (searchable)
- `authorId` - Author's user ID
- `imageStorageId` - Optional image attachment

### Comments
- `postId` - Reference to the post
- `authorId` - Commenter's user ID
- `authorName` - Commenter's display name
- `body` - Comment content


## ⚠️ Known Issues & Troubleshooting

### Better Auth + Bun Compatibility

When using Bun, the `@convex-dev/better-auth` library may cause the "Create Post" action to hang indefinitely.

**Root Causes:**
1. The `next/headers` function returns read-only headers, causing internal errors
2. Forwarding all headers (including `Content-Length`) causes requests to hang

**Solution:**
A patch has been applied to `node_modules/@convex-dev/better-auth/dist/nextjs/index.js` that selectively copies only `cookie` and `user-agent` headers instead of all headers.

The patch is saved in `patches/@convex-dev+better-auth+0.10.10.patch`.

**Re-applying after `bun install`:**
```bash
# Ensure yarn.lock exists, then run:
bunx patch-package
```

> [!WARNING]
> If you reinstall dependencies, you may need to re-apply the patch. Check if a newer version of `@convex-dev/better-auth` fixes this issue.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev)
- [Better Auth Documentation](https://better-auth.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

