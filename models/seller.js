const mongoose = require('mongoose')

//Product Schema
const seller=mongoose.model('seller',{
    id:{
        type: 'string',
        required:true
    },
    name:{
        type: 'string',
        required:true
    },
    
    product:{
        type: 'array',
        required:true
    }
})
module.exports = {seller}