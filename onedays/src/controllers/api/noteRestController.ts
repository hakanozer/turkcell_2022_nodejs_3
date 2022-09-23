import express from 'express'
import { apiAllNote } from '../../services/api/noteService'
import { IRest } from '../../utils/IRest'
import { fncAdminID } from '../../utils/siteUtil'
export const noteRestController = express.Router()

noteRestController.get('/note/list', (req, res) => {    
    apiAllNote().then( resData => {
        const sendObj:IRest = {
            status: true,
            result: resData
        }
        res.json( sendObj )
    })
})
