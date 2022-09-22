import express from 'express'
import { allUser } from '../../services/admin/settingsService'
export const settingsController = express.Router()

settingsController.get('/settings', (req,res) => {
    allUser().then( resData => {
        res.render('admin/settings', { users: resData.data } )
    })
    
})