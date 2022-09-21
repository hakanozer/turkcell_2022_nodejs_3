import express from 'express'
import { adminLogin, newAdmin } from '../../services/admin/loginService'
export const loginController = express.Router()

let loginStatusMessage = ''
loginController.get('/', (req, res) => {
    //newAdmin("Erkan Bilsin", "erkan@mail.com", "12345")
    const erorrItem = { message: loginStatusMessage }
    loginStatusMessage  = ''
    res.render('admin/login', { error: erorrItem })
})

loginController.post('/login', (req, res) => {
    const email:string = req.body.email
    const password:string = req.body.password
    const remember:string = req.body.remember // on - undefined
    adminLogin(email, password).then( data => {
        if ( data ) {
            // login success
            res.redirect('/admin/dashboard')
        }else {
            // login fail
            loginStatusMessage = 'E-Mail or Password Fail'
            res.redirect('/admin')
        }
    })
    
})