const express = require('express');
require('dotenv').config();
const massive = require('massive');
const session = require('express-session');
const ctlr = require('./controller/controller');

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env

const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    app.listen(SERVER_PORT, console.log(`if you are quiet you can hear port ${SERVER_PORT}`))
}).catch( error => console.log('db broke',error))

app.post('/register', ctlr.register)
app.post('/login', ctlr.login)