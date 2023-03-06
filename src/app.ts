import express, { Application } from "express";
import blogRoute from "./routes/blogRoute";
import recentPost from "./routes/recentPostRoute";
import recentComment from "./routes/commentsRoute";
import newsletter from "./routes/subscribeNewsRoute";
import categoryName from "./routes/categoryRoute";
import searchRoute from "./routes/searchApiRoute";

const app: Application = express();
app.use(express.json());

//routes middleware
app.use("/api/v1", blogRoute);

app.use("/api/v1", recentPost);

app.use("/api/v1", recentComment);

app.use("/api/v1", newsletter);

app.use("/api/v1", categoryName);

app.use("/api/v1", searchRoute);

export = app;
