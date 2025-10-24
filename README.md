
# Express.js RESTful API - Products Management

A RESTful API built with Express.js for managing products with full CRUD operations, middleware, and error handling.

## Features

- **RESTful API endpoints** for products management
- **Custom middleware** for logging, authentication, and validation
- **Comprehensive error handling**
- **Advanced features**: filtering, pagination, and search
- **MongoDB integration** with Mongoose ODM

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (with filtering & pagination) |
| GET | `/api/products/:id` | Get a specific product by ID |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## Product Schema

```json
{
  "id": "string (unique)",
  "name": "string",
  "description": "string", 
  "price": "number",
  "category": "string",
  "inStock": "boolean"
}
