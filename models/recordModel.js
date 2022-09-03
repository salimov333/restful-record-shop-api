import records from "../data/records.js";
import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export const getAllRecords = () => {
    return records;
};

export const getRecordById = (id) => {
    return records.find(r => r.id === id);
};

export const addRecord = (record) => {
    const newRecord = {
        id: uuidv4(),
        title: record.title,
        artist: record.artist,
        year: record.year,
        genre: record.genre
    }
    records.push(newRecord);
    return newRecord;
};

export const editRecordById = (id, record) => {
    const recordToEdit = records.find(r => r.id == id);
    const editedRecord = {
        id: recordToEdit.id,
        title: record.title || recordToEdit.title,
        artist: record.artist || recordToEdit.artist,
        year: record.year || recordToEdit.year,
        genre: record.genre || recordToEdit.genre
    };
    const recordToEditIndex = records.indexOf(recordToEdit);
    records.splice(recordToEditIndex, 1, editedRecord);
    return editedRecord;
};

export const deleteRecordById = (id) =>{
    const recordToDelete = records.find(r => r.id == id);
    const recordToDeleteIndex = records.indexOf(recordToDelete);
    records.splice(recordToDeleteIndex, 1);
    return recordToDelete;
}