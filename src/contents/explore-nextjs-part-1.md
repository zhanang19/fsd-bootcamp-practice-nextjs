---
title: "Explore Next.js with Pages Router – Part 1: The Fundamentals"
date: "2025-04-10"
---

Next.js is a React framework that helps developers build scalable, fast web applications. In this two-part series, we'll explore Next.js using the **Pages Router** — the classic way to define routes and build applications with file-based routing.

## 🛠️ Getting Started

```bash
npx create-next-app@latest my-nextjs-app
cd my-nextjs-app
npm run dev
```
This command creates a new Next.js application in a folder named `my-nextjs-app` and starts the development server. Now open http://localhost:3000 and you should see the default Next.js landing page.

## 🧯 Routing Basics

### Static Pages

Static pages is the simplest form of routing in Next.js.  Static pages usually used for content that doesn't change often, like a blog post or an about page.

### Nested Routes

Nested routes allow you to create a hierarchy of pages. To create nested routes, you can create subdirectories within the `/pages` directory. For example, to create a "Team" page under "About", create a folder named `about` and a file named `team.js` inside it.

## ⚙️ Linking Between Pages

To link between pages, you can use the `Link` component from `next/link`. This component enables client-side navigation between routes. By using this built in components, it will navigate to the respective pages without a full page reload.

## 🔜 Coming Up Next

In the next part of this series, we will explore more advanced features of Next.js, including:
- Dynamic Routing
- API Routes

Stay tuned!
