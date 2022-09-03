import {
    addRecord,
    deleteRecordById,
    editRecordById,
    getAllRecords,
    getRecordById
}
    from "../models/recordModel.js";

export const allRecordsController = (req, res) => {
    const allRecords = getAllRecords();
    res.status(200).send(allRecords);
};

export const recordByIdController = (req, res) => {
    const { id } = req.params;
    const recordById = getRecordById(id);
    if (!recordById) {
        res.status(404).send("Record not found!");
    } else {
        res.status(200).send(recordById);
    }
};

export const addRecordController = (req, res) => {
    const { title, artist, year, genre } = req.body;
    const recordtoAdd = addRecord(req.body);
    if (!title || !artist || !year || !genre) {
        res.status(400).send("No record to send");
    } else {
        res.status(201).send(`${recordtoAdd.title} successfully added`);
    }
};

export const editRecordByIdController = (req, res) => {
    const { id } = req.params;
    const recordToEdit = editRecordById(id, req.body);
    if (!req.body) {
        res.status(400).send("No record to Edit and send");
    } else {
        res.status(201).send(`${recordToEdit.title} successfully updated`);
    }
};

export const deleteRecordByIdController = (req, res) => {
    const { id } = req.params;
    const recordToDelete = deleteRecordById(id);
    if (!recordToDelete) {
        res.status(404).send("Record to delete not found");
    } else {
        res.status(200).send(`${recordToDelete.title} successfully deleted`);
    }
};

