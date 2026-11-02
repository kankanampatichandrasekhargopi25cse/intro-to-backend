# Intro to Backend Development — Node.js, Express & MongoDB

> Complete implementation of the freeCodeCamp Backend Tutorial:  
> **"Intro to Backend Web Development – Node.js & Express Tutorial for Beginners"**  
> 🔗 Tutorial Reference: [YouTube Video (Shivani / freeCodeCamp)](https://www.youtube.com/watch?v=KOutPbKc9UM&t=2s)

---

## 📌 Project Overview & Objectives

This project implements a complete, production-ready backend server built from scratch using the **Model-Route-Controller (MRC)** pattern:

- **a) Node.js & Express Application**: Configured as an ES Module (`"type": "module"`) with `nodemon` for auto-reloading during development.
- **b) Online MongoDB Atlas Database**: Connected securely using Mongoose and environment variables.
- **c) Mongoose Database Models**:
  - `User`: Username, email, password hashing with `bcrypt` pre-save hooks and `comparePassword` instance method.
  - `Post`: CRUD entity with `name`, `description`, and `age` fields.
- **d) Express Controllers & REST APIs**: Full CRUD operations + Authentication routes.
- **e) Postman Integration**: Ready-to-import `postman_collection.json` containing pre-configured requests for all endpoints.

---

## 🏗️ Folder Structure

```
intro-to-backend/
├── backend/
│   └── src/
│       ├── config/
│       │   ├── constants.js          # Global DB constants
│       │   └── database.js           # Mongoose connection logic
│       ├── controllers/
│       │   ├── post.controller.js    # CRUD logic (create, get, update, delete)
│       │   └── user.controller.js    # Auth logic (register, login, logout)
│       ├── models/
│       │   ├── post.model.js         # Mongoose Post schema & model
│       │   └── user.model.js         # Mongoose User schema & password hashing
│       ├── routes/
│       │   ├── post.route.js         # Express routing for /api/v1/posts
│       │   └── user.route.js         # Express routing for /api/v1/users
│       ├── app.js                    # Express app initialization & middleware
│       └── index.js                  # Entry point (connects DB & starts listener)
├── .env.example                      # Sample environment variables
├── .gitignore                        # Git exclusion rules
├── package.json                      # Project dependencies & scripts
├── postman_collection.json           # 1-Click Postman import collection
└── README.md                         # Project documentation
```

---

## 🚀 Step-by-Step Setup & Running on Laptop

### 1. Prerequisites
- **Node.js** (v18+ recommended)
- **Postman Desktop App** (or VS Code Postman / Thunder Client)

### 2. Installation
Open your terminal in the project directory:
```bash
cd intro-to-backend
npm install
```

### 3. Setting Up Online MongoDB Atlas Cluster (Step-by-Step)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and register a free account.
2. Click **Build a Database** and select the **M0 Free Shared Tier**.
3. Choose your nearest cloud region (e.g., AWS / Mumbai / ap-south-1).
4. **Create a Database User**:
   - Username: `admin` (or your choice)
   - Password: `<your_secure_password>` (save this password!)
5. **Network Access / IP Whitelist**:
   - In the left sidebar, navigate to **Network Access** -> **Add IP Address**.
   - Select **Allow Access from Anywhere (`0.0.0.0/0`)** so your laptop can connect.
6. **Get Connection String**:
   - Go to **Database Deployments** -> click **Connect**.
   - Select **Drivers** (Node.js).
   - Copy the URI, which looks like:
     ```
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
7. **Configure your `.env` file**:
   Create a `.env` file in the project root:
   ```env
   PORT=4000
   MONGODB_URI=mongodb+srv://admin:yourPassword@cluster0.xxxxx.mongodb.net/intro-to-backend?retryWrites=true&w=majority
   ```

### 4. Running the Server
To start with auto-reload:
```bash
npm run dev
```

For production mode:
```bash
npm start
```

When started successfully, you will see in terminal:
```
Server is running at port: 4000
Open in browser: http://localhost:4000
Connecting to database...
MongoDB connected !!! Host: cluster0-shard-00-00.xxxxx.mongodb.net
```

---

## 📡 API Endpoints Reference

### 1. User Authentication (`/api/v1/users`)

| Method | Endpoint | Description | Sample Request Body |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/v1/users/register` | Register new user (hashes password) | `{"username": "chandrasekhar", "email": "chandra@example.com", "password": "password123"}` |
| **POST** | `/api/v1/users/login` | Login user (verifies bcrypt hash) | `{"email": "chandra@example.com", "password": "password123"}` |
| **POST** | `/api/v1/users/logout` | Logout user | `{"email": "chandra@example.com"}` |

### 2. Post CRUD Operations (`/api/v1/posts`)

| Operation | Method | Endpoint | Sample Request Body |
| :--- | :--- | :--- | :--- |
| **Create (C)** | **POST** | `/api/v1/posts/create` | `{"name": "Chandrasekhar", "description": "Backend API Tutorial", "age": 20}` |
| **Read (R)** | **GET** | `/api/v1/posts/getPosts` | *(None - returns JSON array of all posts)* |
| **Update (U)** | **PATCH** | `/api/v1/posts/update/:id` | `{"description": "Updated post description", "age": 21}` |
| **Delete (D)** | **DELETE** | `/api/v1/posts/delete/:id` | *(None - deletes post matching `:id`)* |

---

## 📬 Testing with Postman Desktop App

1. Open **Postman Desktop App**.
2. Click **Import** (top left).
3. Drag & drop or select the [`postman_collection.json`](./postman_collection.json) file included in this repo.
4. All 7 API requests (Health Check, Register, Login, Logout, Create Post, Get All Posts, Update Post, Delete Post) will load automatically with sample payloads and headers ready for 1-click testing!

---

## 👨‍💻 Author & Repository

- **Author**: Kankanampati Chandrasekhar Gopi
- **GitHub Repository**: [https://github.com/kankanampatichandrasekhargopi25cse-ai/intro-to-backend](https://github.com/kankanampatichandrasekhargopi25cse-ai/intro-to-backend)
