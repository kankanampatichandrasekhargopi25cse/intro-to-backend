import express from "express";

const app = express();

// middleware to parse json bodies
app.use(express.json());

// routes import
import userRouter from "./routes/user.route.js"; 
import postRouter from "./routes/post.route.js";

// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// health check / root route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Intro to Backend API! Server is running smoothly.",
        endpoints: {
            auth: {
                register: "POST /api/v1/users/register",
                login: "POST /api/v1/users/login",
                logout: "POST /api/v1/users/logout"
            },
            posts: {
                create: "POST /api/v1/posts/create",
                getAll: "GET /api/v1/posts/getPosts",
                update: "PATCH /api/v1/posts/update/:id",
                delete: "DELETE /api/v1/posts/delete/:id"
            }
        }
    });
});

export default app;
