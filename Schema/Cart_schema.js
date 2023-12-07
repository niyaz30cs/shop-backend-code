const mongoose = require("mongoose");

const Cart_Schema = mongoose.Schema({
    
    no: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    title2: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required : true,
    },
    price: {
        type: String,
        // required : true,
    },
    crossPrice: {
        type: String,
        // required : true,
    },
    rating: {
        type: Number,
        required : true,
    },
    decriptions: {
        type: String,
        required : true,
    },
    cat: {
        type: String,
        required : true,
    },
    comp: {
        type: String,
        
    }
})

const Cart = mongoose.model("Cart", Cart_Schema)
module.exports = Cart