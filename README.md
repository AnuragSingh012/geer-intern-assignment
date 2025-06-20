# Product Listing App

This is a simple e-commerce product listing application built with **Next.js App Router**. It supports:

- Product listing grid
- Dynamic product detail pages
- Full-text search with live suggestions
- API routes for product data

## <a name="tech-stack">⚙️ Tech Stack</a>
- Next.js
- Tailwind CSS

## 📝 Notes & Assumptions
- Product data is stored in a local products.json file
- No backend database (Mongo, Postgres, etc.) is connected
- Product images are served using https://placehold.co
- No user authentication functionality is implemented (placeholder UI only)

## 📬 API Route Notes
The app includes API route handlers for:
- GET /api/products – fetch all products
- POST /api/products – add a new product
- DELETE /api/products/:id – delete a product by ID

Important:
There is currently no UI, button, or route in the frontend to add or delete products.
These API endpoints are intended for testing via tools like:

- Postman
- Thunder Client (VS Code extension)

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine

**Cloning the Repository**

```bash
git clone https://github.com/AnuragSingh012/geer-intern-assignment.git
cd geer-intern-assignment
```

**Install dependencies and start the development server**

```bash
npm install && npm run dev
```
