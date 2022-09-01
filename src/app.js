import express from "express";
import router from "../routes/recordRouter.js";


const app = express();

app.use("/", router);




export default app;