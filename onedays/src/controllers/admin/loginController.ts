import express from 'express'
import { IAdmin } from '../../models/IAdmin'
import { adminLogin, newAdmin } from '../../services/admin/loginService'
import { decrypt, encrypt } from '../../utils/utilCrypto'
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
    adminLogin(email).then( data => {        
        if ( data ) {
            const admin = data as IAdmin
            const plainDbPass = decrypt(admin.password)
            if ( password === plainDbPass ) {
                req.session.admin = admin
                req.session.save((err) => {
                    if ( err ) {
    
                    }else {
                        //console.log(req.session);
                    }
                })
                // login success
                res.redirect('/admin/dashboard')
            }else {
                // login fail
                loginStatusMessage = 'E-Mail or Password Fail'
                res.redirect('/admin')
            }

        }else {
            // login fail
            loginStatusMessage = 'E-Mail or Password Fail'
            res.redirect('/admin')
        }
    })
    
})


loginController.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/admin')
    })
})