import express from 'express'
export const homeController = express.Router()


homeController.get('/', (req, res) => {
    const cities = [ "İstanbul", "İzmir", "Ankara", "Samsun", "Antalya" ]
    const sendData = {
        title: 'App Title',
        year: 2022,
        cities
    }
    res.render('site/home', { data: sendData })
})