import express from "express";
import path from "path";
const app = express()
const port = 4000

// EJS config
app.set( "views", path.join( __dirname, "views" ) );
app.set('view engine', 'ejs');


// Router
app.get('/', (req, res) => {
    const sendData = {
        title: 'App Title',
        year: 2022
    }
    res.render('index', { data: sendData })
})

app.listen(port, () => {
    console.log("Listen Port:", 'http://localhost:'+ port);
})