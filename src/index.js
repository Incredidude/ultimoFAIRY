const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const path = require('path');

var flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'database_fairy'
})

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'database_fairy'
}, 'single'));
/*
app.use(session({
    secret: 's3cur3',
    store: sessionStore,
    resave: false,
    saveUninitialized: true
}));
*/
app.use(express.urlencoded({
    extended: false
}));

app.use(require('./routes/routes'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'), () => {
    console.log('server on port');
});