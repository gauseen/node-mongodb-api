import UserModel from '../../models/user/user'

// 添加用户
export function userAdd (ctx) {
	const { query } = ctx.request
	let source = {
		name: query.name,
		age: query.age,
		gender: query.gender
	}
	const UserDB = new UserModel(source)
	UserDB.save().then(() => {
		// console.log('保存成功！')
	})
	ctx.response.body = UserDB
}

// 查询用户
export function userSearch (ctx) {
	const { query } = ctx.request
	let source = {
		name: query.name,
	}
	return UserModel.find(source).then(data => {
		ctx.response.body = data
	})
}

