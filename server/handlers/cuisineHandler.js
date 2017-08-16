const restaurant = require('../models/Restaurant')

let cuisineHandler = function (req, res) {
  const projection = req.projection
  const limit = req.limit
  const skip = req.skip
  const currentPage = req.currentPage
  let numP
  let numPages = restaurant.find().count((err, count) => {numP = count})

  const { cuisine } = req.params

  restaurant
  .find({ cuisine }, projection)
  .limit(+limit)
  .skip(skip)
  .then(restaurants => res.json({
    results : restaurants,
    currentPage : currentPage,
    num_result : limit,
    num_pages : numP
  }))
}

module.exports = cuisineHandler