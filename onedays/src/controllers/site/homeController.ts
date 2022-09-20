import express from 'express'
export const homeController = express.Router()


homeController.get('/', (req, res) => {
    const sendData = {
        title: 'App Title',
        year: 2022
    }
    res.render('site/home', { data: sendData })
})