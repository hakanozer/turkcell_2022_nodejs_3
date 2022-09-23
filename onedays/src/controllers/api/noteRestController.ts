import express from 'express'
import { noteAdd, noteDelete } from '../../services/admin/dashboardService'
import { apiAllNote } from '../../services/api/noteService'
import { IRest } from '../../utils/IRest'
import { fncAdminID } from '../../utils/siteUtil'
export const noteRestController = express.Router()

// note list 
noteRestController.get('/note/list', (req, res) => {
    const adminID = fncAdminID(req)
    if ( adminID !== '' ) {  
        apiAllNote(adminID).then( resData => {
            const sendObj:IRest = {
                status: true,
                result: resData
            }
            res.json( sendObj )
        })
    }else {
        const sendObj:IRest = {
            status: true,
            result: 'Login Error'
        }
        res.json( sendObj )
    }
})


// note add
noteRestController.post('/note/add', ( req, res ) => {
    const adminID = fncAdminID(req)
    const sendObj:IRest = {
        status: false,
        result: undefined
    }
    if ( adminID !== '' ) {
        const title = req.body.title
        const detail = req.body.detail
        const date = req.body.date
        noteAdd(adminID, title, detail, date).then( resData => {
            sendObj.status = true
            sendObj.result = resData
            res.json(sendObj)
        })
    }else {
        sendObj.result = 'Login Error'
        res.json(sendObj)
    }
})


// note delete
noteRestController.delete('/note/delete', (req, res) => {
    const adminID = fncAdminID(req)
    const sendObj:IRest = {
        status: false,
        result: undefined
    }
    if ( adminID !== '' ) {
        const id = req.body.id
        noteDelete(id, adminID).then(resData => {
            if ( resData !== null ) {
                sendObj.status = true
                sendObj.result = 'Delete Success'
            }else {
                sendObj.result = 'Delete Fail' 
            }
            res.json(sendObj)
        })
    }else {
        sendObj.result = 'Login Error'
        res.json(sendObj)
    }
})