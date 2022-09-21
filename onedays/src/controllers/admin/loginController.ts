import express from 'express'
import { newAdmin } from '../../services/admin/loginService'
export const loginController = express.Router()

loginController.get('/', (req, res) => {
    //newAdmin("Erkan Bilsin", "erkan@mail.com", "12345")
    res.render('admin/login')
})

loginController.post('/login', (req, res) => {
    const email:string = req.body.email
    const password:string = req.body.password 
    console.log( email, password )
    res.redirect('/admin')
})