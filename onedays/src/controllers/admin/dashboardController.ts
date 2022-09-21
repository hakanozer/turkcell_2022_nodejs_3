import express from 'express'
import { noteAdd } from '../../services/admin/dashboardService'
export const dashboardController = express.Router()

let adminID = ''
dashboardController.get('/dashboard', (req,res) => {
    if ( !req.session.admin ) {
        res.redirect('/admin/')
    }
    adminID = req.session.admin?.id!
    noteAdd(adminID, 'Sinema', 'Haftasonu Sinema', '23.09.2022')
    res.render('admin/dashboard')
})

