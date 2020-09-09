const express = require("express");
const app = express();

const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    if (req.session.count == null){
        req.session.count = 0;
    }
    res.render('index', {info: req.session.count});
});

app.get('/add', (req, res) => {
    res.render('index', { info: req.session.count });
});

app.get('/clear', (req, res) => {
    req.session.count = 0;
    res.render('index', { info: req.session.count });
});


app.listen(8000, () => console.log("listening on port 8000"))