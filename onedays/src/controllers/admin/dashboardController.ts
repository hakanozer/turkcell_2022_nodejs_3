import express from 'express'
import { noteAdd, noteDelete, noteList } from '../../services/admin/dashboardService'
export const dashboardController = express.Router()

dashboardController.get('/dashboard', (req,res, next) => {
    const itm = req.session.admin as any
    if (itm._id !== undefined) {
        const adminID = itm._id
        noteList(adminID).then( resData => {
            res.render('admin/dashboard', { notes: resData })
        })
    }else {
        next()
    }
})

dashboardController.post('/noteAdd', (req, res) => {
    
    const itm = req.session.admin as any
    const adminID = itm._id 
    const title = req.body.title
    const detail = req.body.detail
    const date = req.body.date

    const dbNote = noteAdd(adminID, title, detail, date)
    dbNote.then( resData => {
        res.redirect('/admin/dashboard')
    })
})

dashboardController.get('/noteDelete', (req, res) => {
    const id = req.query.id as string
    const itm = req.session.admin as any
    const adminID = itm._id 
    noteDelete(id, adminID).then(resData => {
        res.redirect('/admin/dashboard')
    })
})

