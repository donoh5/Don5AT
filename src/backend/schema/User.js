const { Binary } = require('mongodb');
const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        min: 1,
        max: 3
    }
},
{
    collection: 'user'
})

module.exports = mongoose.model('user', userSchema)