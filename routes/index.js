// 用户模块路由
import UserRoutes from './user'

export default app => {
	app.use(UserRoutes.routes(), UserRoutes.allowedMethods())
}
