// BASE API CONFIGURATION /////////////////////////////////////////////////////////////////////
const fetch = require('node-fetch')
var express = require('express')
var app = express()
/* var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Contact = require('./models/contact')
mongoose.connect('mongodb://<user>:<password>@ds135537.mlab.com:35537/contacts-testing');

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json()) */

var port = process.env.PORT || 8080

// RETRIEVE CONTACTS AND SAVE IN MEMORY ///////////////////////////////////////////////////////

var contactsList = []

fetch("https://randomuser.me/api?results=5000")
    .then((results) => (results.json()))
    .then((data) => {
      let contacts = data.results.map((contact, index) => ({
        id: index,
        name: {first: contact.name.first, last: contact.name.last},
        email: contact.email,
        username: contact.login.username,
        phone: contact.phone,
        cell: contact.cell,
        picture: contact.picture.medium
      }))
      contactsList = contacts })

// API ROUTES /////////////////////////////////////////////////////////////////////////////////
var router = express.Router()

// Middleware
router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  next()
})

router.route('/contacts').get((req, res) => {
  console.log("All contacts were requested")
  res.json(contactsList)
  })

router.route('/contacts/:quantity').get((req, res) => {
  quantity = parseInt(req.params.quantity)
  console.log(`${quantity} contacts were requested`)
  typeof quantity == 'number' && res.json(contactsList.slice(0, quantity))
  })

// REGISTER ROUTES ////////////////////////////////////////////////////////////////////////////
app.use('/api', router)

// START SERVER ///////////////////////////////////////////////////////////////////////////////
app.listen(port);
console.log(`Listening on port ${port}`)