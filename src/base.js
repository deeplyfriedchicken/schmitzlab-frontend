let baseUrl = 'http://localhost:80'

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://data.campkesemclaremont.us'
}

module.exports = {
  baseUrl
}
