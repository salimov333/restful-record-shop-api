import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello To My Record Shop"));




export default app;