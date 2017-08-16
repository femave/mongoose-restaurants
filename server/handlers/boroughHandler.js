const restaurant = require('../models/Restaurant')

let boroughHandler = function (req, res) {
  const {projection, limit, skip, currentPage} = req
  const { borough } = req.params
  let numP
  let numPages = restaurant.find({ borough }).count((err, count) => {numP = count})

  console.log(numP)

  restaurant
  .find({ borough })
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

module.exports = boroughHandler