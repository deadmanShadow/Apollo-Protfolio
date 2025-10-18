# Portfolio

A modern, full-stack **personal portfolio platform** built with **Next.js**, featuring secure authentication, a dynamic dashboard, blog management, and a polished user experience.

This project demonstrates best practices in **frontend performance**, **backend security**, and **developer experience** — designed for scalability, maintainability, and discoverability.

---

## Features

### Public Pages

#### Blogs

- View all published blogs on a dynamic “All Blogs” page.
- Individual blog pages are statically generated using **ISR (Incremental Static Regeneration)** for optimal performance.
- Fresh content appears automatically without a full site rebuild.

#### About Me

- Professionally designed “About Me” section with static personal details, experience, and skills.
- Uses **SSG (Static Site Generation)** for instant loading and SEO optimization.

#### Project Showcase

- Displays curated personal projects with thumbnails, live links, and feature highlights.
- Powered by **ISR**, ensuring the data stays up-to-date dynamically.

---

### Private (Owner-Only) Features

#### Authentication & Authorization

- Secure **JWT-based authentication** with protected routes.
- Passwords hashed with **bcrypt**.
- Admin (portfolio owner) is pre-seeded into the database for controlled access.

#### Dashboard

- Private **dashboard** for the owner to manage blogs and project content.
- Full **CRUD functionality** (Create, Read, Update, Delete) for blogs and projects.
- Integrated **toast notifications** for success/error feedback.

---

## Tech Stack

| Layer             | Technology                                      |
| ----------------- | ----------------------------------------------- |
| **Frontend**      | Next.js (App Router) + TypeScript               |
| **Styling**       | Tailwind CSS (Responsive Utilities) + ShadCN UI |
| **Backend**       | Node.js + Express                               |
| **Database**      | PostgreSQL + Prisma ORM                         |
| **Auth**          | JWT + bcrypt                                    |
| **Notifications** | react-hot-toast                                 |
| **Editor**        | React Quill for rich-text content creation      |

---

## Core Concepts Implemented

- **Authentication & Authorization:** Secure routes and protected APIs using JWT.
- **Static Generation + ISR:** Combines SSG and ISR for speed and up-to-date content.
- **Error Handling:**
  - Clear form validation messages (Zod + React Hook Form).
  - API/network error handling with user-friendly feedback.
- **Responsive & Accessible UI:**
  - Fully responsive layout with Tailwind.
  - Accessibility-compliant HTML and ARIA attributes.
- **Modern UX Enhancements:**
  - Smooth transitions, skeleton loaders, and toast notifications.
  - Lazy loading for heavy assets and optimized images.

---

## Demo Credentials

You can use the following demo credentials to access the **Admin Dashboard**:

**_Email_**: raihanshamil33@gmail.com

**_Password_**:12345678
