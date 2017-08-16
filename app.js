const express = require('express')
const app = express()
const urlDb = 'mongodb://localhost:27017/test'
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 3000

mongoose.Promise = Promise
mongoose.connect(urlDb, {useMongoClient: true})

const restaurant = require('./server/models/Restaurant')
const parseQuerys = require('./server/handlers/parseQuerys')
const restaurantHandler = require('./server/handlers/restaurantHandler')
const boroughHandler = require('./server/handlers/boroughHandler')
const cuisineHandler = require('./server/handlers/cuisineHandler')

app.use( express.static( path.join(__dirname,'public')) )
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(parseQuerys)

app.get('/restaurants', restaurantHandler)
app.get('/restaurants/borough/:borough', boroughHandler)
app.get('/restaurants/cuisine/:cuisine', cuisineHandler)

  // app.get('/restaurants/cuisine/not/:cuisine', (req, res) => {
  //   const projection = req.projection
  //   const limit = req.limit
  //   const skip = req.skip

  //   const { cuisine } = req.params

  //   db.collection('restaurants')
  //     .find({ cuisine: {$ne: cuisine} }, projection)
  //     .limit(+limit)
  //     .skip(skip)
  //     .toArray((err, aRestaurants) => {
  //       if (err) throw err
  //       res.json(aRestaurants)
  //     })
  // })

  // app.get('/restaurants/:id', (req, res) => {
  //   const projection = req.projection
  //   const limit = req.limit
  //   const skip = req.skip

  //   const { id } = req.params
  //   db.collection('restaurants')
  //     .find({ _id: ObjectId(id) }, projection)
  //     .limit(+limit)
  //     .skip(skip)
  //     .toArray((err, aRestaurants) => {
  //       if (err) throw err
  //       res.json(aRestaurants)
  //     })
  // })




  app.listen(PORT)
  console.log(`Listening to PORT ${PORT}`)
