// creating a Schema and using bcrypt to hash password.
// require database (MONGODB)
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;
// creating a user schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
});
// using bcrypt to hash password
UserSchema.pre('save', function (next) {
    console.log("this", this)
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
})


module.exports = mongoose.model('User', UserSchema);