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

var counter = 0 // Gives each user a unique id
var contactsList = []

fetch("https://randomuser.me/api?results=1")
    .then((results) => (results.json()))
    .then((data) => {
      let contacts = data.results.map((contact, index) => ({
        id: counter++,
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

// GET all contacts
router.route('/contacts').get((req, res) => {
  console.log("All contacts were requested")
  res.json(contactsList)
  })

// GET contact with ID x
router.route('/contact/:id').get((req, res) => {
  id = parseInt(req.params.id)
  console.log(`Contact with id ${id} was requested`)
  typeof id == 'number' && res.json(contactsList.filter((contact) => (contact.id == req.params.id)))
})

// GET x contacts
router.route('/contacts/:quantity').get((req, res) => {
  quantity = parseInt(req.params.quantity)
  console.log(`${quantity} contacts were requested`)
  typeof quantity == 'number' && res.json(contactsList.slice(0, quantity))
  })

// POST contact
router.route('/contact').post((req, res) => {
  console.log(req.params)
  newContact = {
    id: counter++,
    name: {first: req.params.firstName, last: req.params.lastName},
    email: req.params.email,
    username: req.params.username,
    phone: req.params.phone,
    cell: req.params.cell,
    picture: req.params.picture
  }
  contactsList.push(newContact)
  console.log(`New contact was added for a total of ${contactsList.length} contacts`)
  res.json(newContact)
})

// PUT (edit) contact
router.route('/contact/:id').put((req, res) => {

})

// DELETE contact
router.route('/contacts/:id').delete((req, res) => {
  lengthBefore = contactsList.length
  contactsList = contactsList.filter((contact) => (contact.id != req.params.id))
  lengthAfter = contactsList.length
  lengthBefore != lengthAfter ?
    console.log(`Contact with id ${req.params.id} was removed from list`) :
    console.log(`No contact with id ${req.params.id} could be found`)
  res.json(contactsList)
  })

// REGISTER ROUTES ////////////////////////////////////////////////////////////////////////////
app.use('/api', router)

// START SERVER ///////////////////////////////////////////////////////////////////////////////
app.listen(port);
console.log(`Listening on port ${port}`)