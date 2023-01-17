import express, { Application } from "express";
import blogRoute from "./routes/blogRoute";
import recentPost from "./routes/recentPostRoute";
import recentComment from "./routes/commentsRoute";
const app: Application = express();
app.use(express.json());

//routes
app.use("/api/v1/blog", blogRoute);

app.use("/api/v1/posts", recentPost);

app.use("/api/v1/comment", recentComment);
export = app;
