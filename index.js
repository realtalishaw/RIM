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

//GET ROUTES
app.get('/', (req, res) => {
    res.render('splash')
});

app.get('/register', (req, res) =>{
  res.render('register')
})

app.get('/password-reset', (req, res) => {
  res.render('password-reset')
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/feed', (req, res) => {
  res.render('feed')
})

app.get('/profile/:id', (req, res) =>{
  res.render('profile')
})

app.get('/announcements', (req, res) => {
  res.render('announcements')
})

app.get('/chat', (req, res) => {
  res.render('chat')
})

app.get('/chat/:id', (req, res) => {
  res.render('chat-message')
})

app.get('/agenda', (req, res) => {
  res.render('agenda')
})

app.get('/faqs', (req, res) => {
  res.render('faqs')
})

app.get('/resources', (req, res) => {
  res.render('resources')
})

app.get('/agenda/:id', (req, res) => {
  res.render('agenda-personal')
})
// POST ROUTES
app.post('/event', (req, res) => {
    console.log(req.body)
    Event.create(req.body).then((event) => {
	console.log(event);
	res.redirect(`/`);
    }).catch((err) => {
	console.log(err.message);
    })
})

app.post('/login', (req, res) => {
  console.log(req.body)
  res.redirect('home')
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})
