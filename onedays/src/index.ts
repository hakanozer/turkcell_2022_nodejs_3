import express from "express";
import bodyParser from 'body-parser';
import path from "path";
import session from 'express-session'
import cookieParser from "cookie-parser";
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

// Cookie Config
app.use(cookieParser())


// EJS config
app.set( "views", path.join( __dirname, "views" ) );
app.set('view engine', 'ejs');

// Body Parser - config
app.use(bodyParser.urlencoded({ extended: false }));


// Global Filter
app.use((req, res, next) => {
    const url = req.url
    if ( url.includes('/admin/') && url !== '/admin/login') {
        // cookie control
        if ( req.cookies.admin ) {
            const adminPlainID = decrypt(req.cookies.admin)
            if ( adminPlainID ) {
                //console.log('Cookie Var', adminPlainID);
                adminFindID(adminPlainID).then( resAdmin => {
                    const itemAdmin = resAdmin as any
                    //console.log(itemAdmin);
                    req.session.admin = itemAdmin
                    req.session.save((err) => {
                        if ( err ) {}else {
                            console.log("Session", req.session.admin);
                        }
                    })
                })
            }
        }
        setTimeout(() => { }, 100);
        // session control
        if ( !req.session.admin ) {
            return res.redirect('/admin')
        }else {
            res.locals.admin = req.session.admin
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
import { noteRestController } from "./controllers/api/noteRestController";
import { userRestController } from "./controllers/api/userRestController";
import { decrypt } from "./utils/utilCrypto";
import { adminFindID } from "./services/admin/loginService";


// admin Routes
app.use('/admin', loginController)
app.use('/admin', dashboardController)
app.use('/admin', settingsController)

// api Routes
app.use('/api/v1', noteRestController)
app.use('/api/v1', userRestController)


// 404 Not Found Page - Config
app.use('*', (req, res, next) => {
    res.render('admin/notfound')
})

app.listen(port, () => {
    console.log("Listen Port:", 'http://localhost:'+ port);
})