// babel es6 ==> es5
require('babel-core/register')

var app = require('../app')
var config = require('../config')

app.listen(config.port, () => {
	console.log('Server run at: http://localhost:' + config.port)
})
