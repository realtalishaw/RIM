const express = require('express')
const app = express()
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', { msg: "Royal International Miss 2021" });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})
