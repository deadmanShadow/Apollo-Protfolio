# Backend - Portfolio API

This directory contains the backend for the personal portfolio website. It is a Node.js/Express application using Prisma as the ORM for a PostgreSQL database. It provides a RESTful API for managing users, blogs, projects, and experiences.

---

## Features

- **RESTful API**: A complete API for all portfolio content.
- **Authentication**: JWT-based authentication with password hashing using `bcrypt`.
- **Authorization**: Middleware to protect routes, ensuring only the owner can manage content.
- **Database Seeding**: Automatically seeds an admin user for initial login.
- **File Uploads**: Handles image uploads to Cloudinary for blogs and projects.
- **Validation**: Uses `zod` for robust request validation.

---

## Technology Stack

- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JSON Web Tokens (JWT), bcrypt.js
- **File Handling**: Multer, Cloudinary
- **Validation**: Zod

---

## API Endpoints

- `POST /api/auth/login` - User Login
- `POST /api/auth/register` - User Registration (for admin seeding)
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get a single blog
- `POST /api/blogs` - Create a new blog (Auth Required)
- `PUT /api/blogs/:id` - Update a blog (Auth Required)
- `DELETE /api/blogs/:id` - Delete a blog (Auth Required)
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project (Auth Required)
- `PUT /api/projects/:id` - Update a project (Auth Required)
- `DELETE /api/projects/:id` - Delete a project (Auth Required)
- `GET /api/experience` - Get all work experiences
- `POST /api/experience` - Add a work experience (Auth Required)
- `GET /api/user` - Get user profile information

---

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/icerahi/assignment-7.git
    cd assignment-7/backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add the following variables. See the `.env.example` for a template.

    ```env
    PORT=5000
    NODE_ENV=development

    # Your PostgreSQL connection string
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

    # Credentials for the initial admin user (will be seeded on startup)
    SUPER_USER_NAME="Your Name"
    SUPER_USER_EMAIL="admin@example.com"
    SUPER_USER_PASSWORD="yoursecurepassword"

    # JWT Configuration
    HASH_SALT_ROUND=10
    JWT_SECRET="your-jwt-secret"
    JWT_ACCESS_TOKEN_EXPIRES=7d
    JWT_REFRESH_TOKEN_EXPIRES=30d

    # Cloudinary Credentials for image uploads
    CLOUDINARY_CLOUD_NAME="your-cloud-name"
    CLOUDINARY_API_KEY="your-api-key"
    CLOUDINARY_API_SECRET="your-api-secret"
    ```

4.  **Apply database migrations:**

    ```bash
    npx prisma migrate dev
    ```

5.  **Start the development server:**
    ```bash
    npm run dev
    ```

The server will be running at `http://localhost:5000`.

### Build for Production

```bash
npm run build
npm start
```
