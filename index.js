const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient

const uri = "mongodb+srv://root:MwQZopkvIEpvwzkp@rim-agenda.gusv5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useUnifiedTopology: true
			 }).then(client => {
			     console.log('Connected to Database!')
			 }).catch(error => console.error(error))

// Events Schema
const Event = mongoose.model('Event', {
    name: String,
    event: String
});

app.use(bodyParser.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', { msg: "Royal International Miss 2021" });
});
app.post('/event', (req, res) => {
    console.log(req.body)
    Event.create(req.body).then((event) => {
	console.log(event);
	res.redirect(`/`);
    }).catch((err) => {
	console.log(err.message);
    })
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})
