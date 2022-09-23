import express from 'express'
import { IAdmin } from '../../models/IAdmin'
import { adminLogin } from '../../services/admin/loginService'
import { IRest } from '../../utils/IRest'
import { decrypt } from '../../utils/utilCrypto'
export const userRestController = express.Router()


// User Login
userRestController.post('/user/login', (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const sendData:IRest = {
        status: false,
        result: "E-Mail or Password Fail"
    }
    adminLogin(email).then( resData => {
        if ( resData ) {
            const admin = resData as IAdmin
            const plainDbPass = decrypt(admin.password)
            if ( password === plainDbPass ) {
                // login success
                sendData.status = true
                sendData.result = resData
                req.session.admin = admin
            }
        }
        res.json(sendData)
    })
    
})