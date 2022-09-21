import express from 'express'
export const settingsController = express.Router()

settingsController.get('/settings', (req,res) => {
    if ( !req.session.admin ) {
        res.redirect('/admin/')
    }
    res.render('admin/settings')
})