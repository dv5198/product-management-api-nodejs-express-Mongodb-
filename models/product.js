const mongoose = require('mongoose')

//Product Schema
const product=mongoose.model('Product',{
    id:{
        type: 'string',
        required:true
    },
    name:{
        type: 'string',
        required:true
    },
    price:{
        type: 'string',
        required:true
    },
    category:{
        type: 'string',
        required:true
    },
    company_id:{
        type: 'array',
        required:true
    },
    seller_id:{
        type: 'array',
        required:true
    }
})
module.exports = {product}