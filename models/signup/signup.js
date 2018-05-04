import mongoose, { Schema } from 'mongoose'

const SignupSchema = new Schema({
	name: {
		type: String,
		// required: true,
		minlength: 3,   
		maxlength: 6,
	},
	age: {
		type: Number,
		min: 1,
		max: 200,
		// required: true,
	},
	gender: {
		type: String,
		// required: true,
		enum: {
			values: ['male', 'female'],
		},
	},
})

const SignupModel = mongoose.model('SignupModel', SignupSchema)

export default SignupModel