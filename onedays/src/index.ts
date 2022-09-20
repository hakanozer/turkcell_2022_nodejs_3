import express from "express";
import path from "path";
const app = express()
const port = 4000

// EJS config
app.set( "views", path.join( __dirname, "views" ) );
app.set('view engine', 'ejs');

// import site component
import { homeController } from "./controllers/site/homeController";


// Routes
app.use('/',homeController)

app.listen(port, () => {
    console.log("Listen Port:", 'http://localhost:'+ port);
})