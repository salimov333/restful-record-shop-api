import express  from "express";
import { contrllAllRecords } from "../controllers/recordConroller.js";
import { logger } from "../middleware/logger.js";

const router = express.Router();

router.route("/")
.all(logger)
.get(contrllAllRecords);


export default router;