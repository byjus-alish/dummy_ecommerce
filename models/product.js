const mongoose = require('mongoose')
const ReviewSchema  = new mongoose.Schema({
    reviewer_name: {
        type: String,
        required: true
    },
    review: {
        type: String, 
        required: true
    }
})
const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    isAvailable: {
        type: Boolean
    },
    description: {
        type: String
    },
    reviews: {
        type: [ReviewSchema],
        default: []
    }
})

module.exports = mongoose.model('Product',ProductSchema);