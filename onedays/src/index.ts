import express from "express";
import bodyParser from 'body-parser';
import path from "path";
const app = express()
const port = 4000

// EJS config
app.set( "views", path.join( __dirname, "views" ) );
app.set('view engine', 'ejs');

// Body Parser - config
app.use(bodyParser.urlencoded({ extended: false }));

// site component
import { homeController } from "./controllers/site/homeController";

// Site Routes
app.use('/',homeController)


// admin component
import { loginController } from "./controllers/admin/loginController";
import { dashboardController } from "./controllers/admin/dashboardController";

// admin Routes
app.use('/admin', loginController)
app.use('/admin', dashboardController)

app.listen(port, () => {
    console.log("Listen Port:", 'http://localhost:'+ port);
})