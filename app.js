require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDb = require('./server/config/db');

const app = express();

app.use(express.static('public'));

//connect to db
connectDb();

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const port = 5000 || process.env.PORT;

app.use('/',require('./server/routes/main'));

app.listen(port, () => {
    console.log(`App listen on ${port}`);
});