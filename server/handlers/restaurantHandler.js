const restaurant = require('../models/Restaurant')

let restaurantHandler = function (req, res) {
 const projection = req.projection
 const limit = req.limit
 const skip = req.skip
 const currentPage = req.currentPage
 let numP
 let numPages = restaurant.find().count((err, count) => {numP = count})


 restaurant
 .find()
 .select(projection)
 .limit(+limit)
 .skip(skip)
 .then(restaurants => res.json({
   results : restaurants,
   currentPage : currentPage,
   num_result : limit,
   num_pages : numP
 }))

}

module.exports = restaurantHandler