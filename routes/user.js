import Router from 'koa-router'

const router = Router({ prefix: '/user' })

import * as User from '../controller/user/user'
router.get('/add', User.userAdd)
router.get('/search', User.userSearch)

export default router
