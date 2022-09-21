import express from 'express'
export const dashboardController = express.Router()

dashboardController.get('/dashboard', (req,res) => {
    if ( !req.session.admin ) {
        res.redirect('/admin/')
    }
    res.render('admin/dashboard')
})