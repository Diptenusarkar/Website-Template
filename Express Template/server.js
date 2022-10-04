const express = require('express');
const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');
const path = require('path');
const app = express();

const PORT = 8000;

const view_engine = "pug"; // You can change this as per your preference

app.use(express.static('static'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', view_engine);
app.use(express.urlencoded({extended: false}));

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
    console.log("\x1b[33m%s\x1b[0m", `Application Started on http://localhost:${PORT}`);
});