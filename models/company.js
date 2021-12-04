const mongoose = require('mongoose')

//Product Schema
const company=mongoose.model('company',{
    company_id:{
        type: 'string',
        required:true
    },
    company_name:{
        type: 'string',
        required:true
    },
    
    product_id:{
        type: 'array',
        required:true
    }
})
module.exports = {company}