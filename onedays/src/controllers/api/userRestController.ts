import express from 'express'
import { IAdmin } from '../../models/IAdmin'
import { adminLogin } from '../../services/admin/loginService'
import { IRest } from '../../utils/IRest'
export const userRestController = express.Router()


// User Login
userRestController.post('/user/login', (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const sendData:IRest = {
        status: false,
        result: "E-Mail or Password Fail"
    }
    adminLogin(email, password).then( resData => {
        if ( resData ) {
            // login success
            sendData.status = true
            sendData.result = resData
            const admin = resData as IAdmin
            req.session.admin = admin
        }else {
            // login fail
        }
        res.json(sendData)
    })
    
})