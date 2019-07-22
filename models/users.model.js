const mongoose = required('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true },
	email: {type: String, required: true},
	fullName: { type: String, required: true}
})

const User = mongoose.model('Users', userSchema)
module.exports = User
