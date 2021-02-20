const { Router } = require('Express')

const { handlePing } = require('./ping')
const internalRoute = Router()

internalRoute.get('/ping', handlePing)

module.exports = {
  internalRoute,
}
