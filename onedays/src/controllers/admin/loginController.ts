import express from 'express'
export const loginController = express.Router()

loginController.get('/', (req, res) => {
    res.render('admin/login')
})

loginController.post('/login', (req, res) => {
    const email:string = req.body.email
    const password:string = req.body.password 
    console.log( email, password )
    res.redirect('/admin')
})