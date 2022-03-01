const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'must provide credentials'],
        maxlength:[20, 'username cannot be longer than 20']
    },
    password: {
        type:String,
        trim: true,
        required:[true, 'must provide credentials']
    }
})

module.exports = mongoose.model('User', UserSchema)