import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
	name: String,
	age: Number,
})

const UserModel = mongoose.model('UserModel', UserSchema)

export default UserModel
