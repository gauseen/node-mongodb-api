import SignupModel from '../../models/signup/signup'

export async function Signup (ctx) {
	const { name, age, gender } = ctx.request.body
	let source = {
		name,
		age,
		gender,
	}
	const SignupDB = new SignupModel(source)

	SignupDB.save((err, result) => {
		console.log('保存成功', result)
	})

	// SignupModel.find((error, result) => {
	// 	console.log("result: ", result)
	// })

	// ctx.response.body = SignupDB
}