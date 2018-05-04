import Router from 'koa-router'

const router = Router({ prefix: '/api' })

import * as User from '../controller/user/user'
import * as Signup from '../controller/signup/signup'
router.get('/add', User.userAdd)
router.get('/search', User.userSearch)
router.post('/signup', Signup.Signup)

export default router
