require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const port = 5000 || process.env.PORT;

app.use('/',require('./server/routes/main'));

app.listen(port, () => {
    console.log(`App listen on ${port}`);
});