let parseQuerys = function (req, res, next) {
  const {limit = 10, fields, fieldshide, page} = req.query
  const projection = {}
  let skip = (page * limit) - limit || 0

  if (fields) {
    fields.split(',').forEach(fields => {
      projection[fields] = 1
    })
  }

  if (fieldshide) {
    fieldshide.split(',').forEach(fields => {
      projection[fieldshide] = 0
    })
  }

  req.projection = projection
  req.limit = limit
  req.skip = skip
  req.currentPage = page

  next()
}

module.exports = parseQuerys