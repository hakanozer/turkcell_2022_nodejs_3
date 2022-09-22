import express from 'express'
import { noteAdd } from '../../services/admin/dashboardService'
export const dashboardController = express.Router()

dashboardController.get('/dashboard', (req,res) => {
    //noteAdd(adminID, 'Sinema', 'Haftasonu Sinema', '23.09.2022')
    res.render('admin/dashboard')
})

