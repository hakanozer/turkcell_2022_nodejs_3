import mongoose from "mongoose";
import { db }  from "../../utils/DB";

// Entitiy Create Class
const Schema = mongoose.Schema

const noteSchema = new Schema({
    adminID: String,
    title: String,
    detail: String,
    date: String
})

const noteModel = mongoose.model('note', noteSchema)

// Note Add
export const noteAdd = async ( adminID: string, title: string, detail: string, date: string ) => {
    db
    const res = await noteModel.create({ adminID, title, detail, date })
    return res
}

// Note List
export const noteList = async ( adminID: string ) => {
    db
    const res = await noteModel.find({ adminID: adminID })
    return res
}

// Note Delete
export const noteDelete = async ( id: string ) => {
    db
    const res = await noteModel.findByIdAndDelete(id)
    return res
}