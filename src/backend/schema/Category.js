const mongoose = require('mongoose');

let catiSchema = new mongoose.Schema({
    c_id: {
        type: Number,
        required: true,
        unique: true
    },
    category_name: {
        type: String,
        required: true,
        unique: true
    },
},
{
    collection: 'category'
})

module.exports = mongoose.model('category', catiSchema)