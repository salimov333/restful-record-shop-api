import express from "express";
import { controllAddRecord, controllAllRecords, controllEditRecordById, controllRecordById } from "../controllers/recordConroller.js";
import auth from "../middleware/authentication.js";

const router = express.Router();

router.route("/")
    .get(controllAllRecords)
    .post(controllAddRecord)


router.route("/:id")
    .get(controllRecordById)
    .put(auth, controllEditRecordById)

export default router;