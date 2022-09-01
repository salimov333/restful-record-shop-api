import { getAllRecords } from "../models/recordModel.js";

export const contrllAllRecords = (req, res) => {
    const allRecords = getAllRecords();
    res.status(200).send(allRecords);
};

