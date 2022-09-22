import { db } from "../../utils/DB"
import { noteModel } from "../admin/dashboardService"


// All Note
export const apiAllNote = async () => {
    db
    const notes = await noteModel.find({})
    return notes
}