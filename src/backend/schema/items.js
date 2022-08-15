const mongoose = require('mongoose');

let itemSchema = new mongoose.Schema({
    category: {
        type: Number,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be in the negatives']
    },
    owner: {
        type: String,
        required: true
    }
},
{
    collection: 'item'
})

module.exports = mongoose.model('item', itemSchema)