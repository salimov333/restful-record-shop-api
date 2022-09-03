import express from "express";
import { logger } from "../middleware/logger.js";
import router from "../routes/recordRouter.js";


const app = express();

app.use(logger);
app.use(express.json());
app.use("/", router);


export default app;