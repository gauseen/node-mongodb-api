const devConfig = require('./dev.js')
const prodConfig = require('./prod.js')

const is_prod = process.env.NODE_ENV === 'production'

const config = is_prod ?  prodConfig : devConfig

module.exports = config
