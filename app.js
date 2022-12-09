const express = require('express')
// const db = require("./db")
const path = require('path');
const homePageRouter = require('./routes/home_page')
const app = express()
const route = require('./routes');
const { engine } = require('express-handlebars');

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources','views'));

// 
route(app)
app.get('/', function (req, res) {
    res.send('Hello World')
})



app.listen(3000)