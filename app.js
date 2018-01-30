import path from 'path'
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import db from './mongodb/db.js';

import config from './config'
import router from './routes/index'

const app = new Koa()

app.use(bodyparser({
	enableTypes: ['json', 'form', 'text'],
}))

// routes
router(app)

module.exports = app
