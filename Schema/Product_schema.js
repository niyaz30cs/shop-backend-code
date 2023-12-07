const mongoose = require("mongoose");

const product_Schema = mongoose.Schema({
    no: {
        type: Number,
        
    },
    title: {
        type: String,
        required: true,
    },
    title2 : {
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

const Products = mongoose.model("Product", product_Schema);
module.exports = Products;