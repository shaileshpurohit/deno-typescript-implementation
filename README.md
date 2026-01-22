# Todo API - Deno & Node.js Implementation

A RESTful Todo API application implemented in both **Deno** (TypeScript) and
**Node.js** (JavaScript), demonstrating the same functionality across different
runtime environments.

## 🎯 Project Overview

This project provides a complete Todo management API with full CRUD (Create,
Read, Update, Delete) operations. The application is implemented in two
versions:

1. **Deno Implementation** (`/deno`) - Built with TypeScript using the Oak web
   framework
2. **Node.js Implementation** (`/node`) - Built with JavaScript using Express
   framework

Both implementations provide identical functionality, allowing you to compare
and understand the differences between Deno and Node.js ecosystems.

## 📁 Project Structure

```
Deno-Implemention/
├── deno/                          # Deno (TypeScript) implementation
│   ├── app.ts                     # Main application entry point
│   ├── routes/
│   │   └── todos.ts              # Todo routes and handlers
│   └── helpers/
│       └── db_client.ts          # Database client (placeholder for future use)
├── node/                          # Node.js (JavaScript) implementation
│   ├── app.js                     # Main application entry point
│   ├── routes/
│   │   └── todos.js              # Todo routes and handlers
│   ├── package.json              # Node.js dependencies
│   └── node_modules/             # Installed packages
├── app.ts                         # Simple Deno hello world example
├── app.js                         # Simple Node.js hello world example
└── README.md                      # This file
```

## ✨ Features

### Core Functionality

- ✅ **Create Todos** - Add new todo items with text content
- 📖 **Read Todos** - Retrieve all todo items
- 🔄 **Update Todos** - Modify existing todo items by ID
- 🗑️ **Delete Todos** - Remove todo items by ID
- 🔒 **Middleware Support** - Request logging middleware in both implementations
- 🎯 **RESTful API Design** - Follows REST principles for clean API structure

### Technical Features

- **Type Safety** - Deno implementation uses TypeScript for type safety
- **Modular Architecture** - Separated routes and helpers for better code
  organization
- **Error Handling** - Proper HTTP status codes and error messages
- **JSON API** - All endpoints use JSON for request/response

## 🚀 API Endpoints

### Base URLs

- **Deno**: `http://localhost:8000`
- **Node.js**: `http://localhost:3000`

### Endpoints

#### 1. Get All Todos

**GET** `/todos`

Retrieves all todo items.

**Response:**

```json
{
    "todos": [
        {
            "id": "2024-01-01T12:00:00.000Z",
            "text": "Complete project documentation"
        }
    ]
}
```

#### 2. Create Todo

**POST** `/todos`

Creates a new todo item.

**Request Body:**

```json
{
    "text": "Buy groceries"
}
```

**Response:**

```json
{
    "message": "Created todo!",
    "todo": {
        "id": "2024-01-01T12:00:00.000Z",
        "text": "Buy groceries"
    }
}
```

#### 3. Update Todo

**PUT** `/todos/:todoId`

Updates an existing todo item by ID.

**URL Parameters:**

- `todoId` - The ID of the todo to update

**Request Body:**

```json
{
    "text": "Buy groceries and cook dinner"
}
```

**Response:**

```json
{
    "message": "Updated Todo!",
    "todo": {
        "id": "2024-01-01T12:00:00.000Z",
        "text": "Buy groceries and cook dinner"
    }
}
```

**Error Response (404):**

```json
{
    "message": "Todo not found"
}
```

#### 4. Delete Todo

**DELETE** `/todos/:todoId`

Deletes a todo item by ID.

**URL Parameters:**

- `todoId` - The ID of the todo to delete

**Response:**

```json
{
    "message": "Deleted Todo!"
}
```

## 🛠️ Getting Started

### Prerequisites

- **For Deno**: [Deno](https://deno.land/) installed (version 1.0+)
- **For Node.js**: [Node.js](https://nodejs.org/) installed (version 14+)
- **For Node.js**: npm (comes with Node.js)

### Deno Implementation

1. **Navigate to the Deno directory:**
   ```bash
   cd deno
   ```

2. **Run the application:**
   ```bash
   deno run --allow-net --allow-read app.ts
   ```

   The server will start on `http://localhost:8000`

   **Note:** Deno requires explicit permissions:
   - `--allow-net`: Allows network access for the server
   - `--allow-read`: Allows file system read access

3. **Alternative: Run with watch mode (auto-reload on changes):**
   ```bash
   deno run --allow-net --allow-read --watch app.ts
   ```

### Node.js Implementation

1. **Navigate to the Node.js directory:**
   ```bash
   cd node
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   node app.js
   ```

   The server will start on `http://localhost:3000`

4. **Alternative: Run with nodemon (auto-reload on changes):**
   ```bash
   npx nodemon app.js
   ```

## 📝 Usage Examples

### Using cURL

#### Get All Todos

```bash
curl http://localhost:8000/todos
```

#### Create a Todo

```bash
curl -X POST http://localhost:8000/todos \
  -H "Content-Type: application/json" \
  -d '{"text": "Learn Deno"}'
```

#### Update a Todo

```bash
curl -X PUT http://localhost:8000/todos/2024-01-01T12:00:00.000Z \
  -H "Content-Type: application/json" \
  -d '{"text": "Master Deno"}'
```

#### Delete a Todo

```bash
curl -X DELETE http://localhost:8000/todos/2024-01-01T12:00:00.000Z
```

### Using JavaScript Fetch API

```javascript
// Get all todos
const response = await fetch("http://localhost:8000/todos");
const data = await response.json();
console.log(data.todos);

// Create a todo
const newTodo = await fetch("http://localhost:8000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: "New Todo Item" }),
});
const created = await newTodo.json();
console.log(created);
```

## 🏗️ Technology Stack

### Deno Implementation

- **Runtime**: [Deno](https://deno.land/) - A secure runtime for JavaScript and
  TypeScript
- **Framework**: [Oak](https://deno.land/x/oak) - A middleware framework for
  Deno's HTTP server
- **Language**: TypeScript
- **Features**:
  - Built-in TypeScript support (no compilation step needed)
  - Secure by default (explicit permissions)
  - Standard library included
  - URL-based imports (no package.json needed)

### Node.js Implementation

- **Runtime**: [Node.js](https://nodejs.org/) - JavaScript runtime built on
  Chrome's V8
- **Framework**: [Express](https://expressjs.com/) - Fast, unopinionated web
  framework
- **Language**: JavaScript
- **Dependencies**:
  - `express` - Web framework
  - `body-parser` - Middleware for parsing JSON request bodies
- **Features**:
  - Mature ecosystem
  - Extensive npm package library
  - Traditional package management

## 🏛️ Project Architecture

### Deno Implementation (`/deno`)

```
app.ts (Main Entry Point)
  ├── Middleware (Request logging)
  └── Routes
      └── todos.ts
          ├── GET /todos
          ├── POST /todos
          ├── PUT /todos/:todoId
          └── DELETE /todos/:todoId
```

**Key Components:**

- `app.ts`: Initializes Oak application, sets up middleware, and registers
  routes
- `routes/todos.ts`: Contains all todo-related route handlers and business logic
- `helpers/db_client.ts`: Placeholder for future database integration

### Node.js Implementation (`/node`)

```
app.js (Main Entry Point)
  ├── Middleware (body-parser, request logging)
  └── Routes
      └── todos.js
          ├── GET /todos
          ├── POST /todos
          ├── PUT /todos/:todoId
          └── DELETE /todos/:todoId
```

**Key Components:**

- `app.js`: Initializes Express application, sets up middleware, and registers
  routes
- `routes/todos.js`: Contains all todo-related route handlers and business logic

## 📊 Data Model

### Todo Interface/Structure

```typescript
interface Todo {
    id: string; // ISO timestamp string (e.g., "2024-01-01T12:00:00.000Z")
    text: string; // Todo item description
}
```

## 🔄 Differences Between Implementations

| Feature            | Deno                         | Node.js                   |
| ------------------ | ---------------------------- | ------------------------- |
| Language           | TypeScript                   | JavaScript                |
| Framework          | Oak                          | Express                   |
| Package Management | URL imports                  | npm/package.json          |
| Type Safety        | Built-in                     | Requires TypeScript setup |
| Permissions        | Explicit (secure by default) | All permissions granted   |
| Port               | 8000                         | 3000                      |
| Import Style       | ES6 modules                  | CommonJS/ES6 modules      |

## 📄 License

This project is open source and available for educational purposes.
