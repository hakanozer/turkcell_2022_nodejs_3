import { db } from "../../utils/DB"
import { noteModel } from "../admin/dashboardService"


// All Note
export const apiAllNote = async ( adminID: string ) => {
    db
    const notes = await noteModel.find({adminID: adminID})
    return notes
}