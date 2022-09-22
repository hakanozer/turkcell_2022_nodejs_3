import express from "express";
import bodyParser from 'body-parser';
import path from "path";
import session from 'express-session'
import * as dotenv from 'dotenv'
import { IAdmin } from "./models/IAdmin";

// dotenv config
dotenv.config()

// express config
const app = express()
const port = 4000

// session config
declare module "express-session" {
    interface SessionData {
        admin: IAdmin
    }
}
const key = process.env.APP_SESSION_KEY ? process.env.APP_SESSION_KEY : "keyApp"
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: key,
  resave: false,
  saveUninitialized: true
}))

// EJS config
app.set( "views", path.join( __dirname, "views" ) );
app.set('view engine', 'ejs');

// Body Parser - config
app.use(bodyParser.urlencoded({ extended: false }));


// Global Filter
app.use((req, res, next) => {
    const url = req.url
    console.log("filter Call", url);
    if ( url.includes('/admin/') && url !== '/admin/login') {
        // session control
        if ( !req.session.admin ) {
            res.redirect('/admin')
        }else {
            res.set('name', req.session.admin.name)
        }
    }
    next()
})

// site component
import { homeController } from "./controllers/site/homeController";

// Site Routes
app.use('/',homeController)


// admin component
import { loginController } from "./controllers/admin/loginController";
import { dashboardController } from "./controllers/admin/dashboardController";
import { settingsController } from "./controllers/admin/settingsController";


// admin Routes
app.use('/admin', loginController)
app.use('/admin', dashboardController)
app.use('/admin', settingsController)



app.listen(port, () => {
    console.log("Listen Port:", 'http://localhost:'+ port);
})