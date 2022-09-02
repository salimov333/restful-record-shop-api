import { AddRecord, EditRecordById, getAllRecords, getRecordById } from "../models/recordModel.js";

export const controllAllRecords = (req, res) => {
    const allRecords = getAllRecords();
    res.status(200).send(allRecords);
};

export const controllRecordById = (req, res) => {
    const { id } = req.params;
    const recordById = getRecordById(id);
    if (!recordById) {
        res.status(404).send("Record not found!");
    } else {
        res.status(200).send(recordById);
    }
};

export const controllAddRecord = (req, res) => {
    const { title, artist, year, genre } = req.body;
    if (!title || !artist || !year || !genre) {
        res.status(400).send("No content to send");
    } else {
        res.status(201).send(AddRecord(req.body));
    }
};

export const controllEditRecordById = (req, res) => {
    const { id } = req.params;
    if (!req.body) {
        res.status(400).send("No content to Edit and send");
    } else {
        res.status(201).send(EditRecordById(id, req.body));
    }
};

