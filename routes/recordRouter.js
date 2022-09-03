import express from "express";
import {
    addRecordController,
    allRecordsController,
    deleteRecordByIdController,
    editRecordByIdController,
    recordByIdController
} from "../controllers/recordConroller.js";
import auth from "../middleware/authentication.js";

const router = express.Router();

router.route("/")
    .get(allRecordsController)
    .post(addRecordController)


router.route("/:id")
    .get(recordByIdController)
    .put(auth, editRecordByIdController)
    .delete(auth, deleteRecordByIdController)
export default router;