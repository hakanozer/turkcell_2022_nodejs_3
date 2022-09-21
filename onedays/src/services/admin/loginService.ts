import mongoose from "mongoose";
import { db }  from "../../utils/DB";

// Entitiy Create Class
const Schema = mongoose.Schema

const superadminSchema = new Schema ({
    name: String,
    email: String,
    password: String
})

const superAdminModel = mongoose.model('superadmin', superadminSchema)

export const newAdmin = ( name: string, email: string, password: string ) => {
    db
    superAdminModel.create( {name: name, email: email, password: password }, (err, res) => {
        console.log(err);
        console.log(res);
    })
}

export const adminLogin = async ( email: string, password: string ) => {
    db
    const superAdmin = await superAdminModel.findOne({email: email, password: password})
    return superAdmin
}

