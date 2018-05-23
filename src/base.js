let baseUrl = 'http://localhost:80'

if (process.env.NODE_ENV === 'production') {
  baseUrl = ''
}

module.exports = {
  baseUrl
}
