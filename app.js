import path from 'path'
import session from 'koa-session'
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'

import db from './mongodb/db.js'
import config from './config'
import router from './routes/index'

const app = new Koa()

// app.use(session(config.session, app))

app.use(bodyparser({
	enableTypes: ['json', 'form', 'text'],
	onerror: function (err, ctx) {
		ctx.throw('body parse error', 422, err)
	},
}))

// routes
router(app)

module.exports = app
