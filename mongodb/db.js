import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const config = require('../config')

mongoose.connect(config.url)

const db = mongoose.connection

db.once('open', () => {
	console.log('数据库打开!')
})

db.once('connected', () => {
	console.log('数据库连接成功!')
})

db.error('error', err => {
	console.error('Error in mongoDB connection: ' + err)
	// 断开连接
	mongoose.disconnect()
})

db.on('disconnected', () => {
	// console.log('数据库断开')
	mongoose.connect(config.url)
	// mongoose.connect(config.url, { server: { auto_reconnect: true } })
})

export default db
