const express = require('express')
const app = express()
const router=express.Router()
const{production} = require('../models/product')
const{company} = require('../models/company')
const{seller} = require('../models/seller')
const { product } = require('../models/product')
const port = 3000


//PRODUCT CRUD OPERATION
router.get('/api/products',(req, res)=>{
    product.find({},(err,data)=>{
        
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })

});
//POST REQUEST 
router.post('/api/product/add',(req, res)=>{
    const prod = new product({
        id:req.body.id,
        name:req.body.name,
        price:req.body.price,
        category:req.body.category,
        company_id:req.body.company_id,
        seller_id:req.body.seller
    })
    prod.save((err,data)=>{
        res.status(200).json({code:200, message:"Product Added Sucessfully",addproduct:data});
    })
})
//Update Product
router.put('/api/product/edit/:id',(req, res)=>{
const prod = new product({
        id:req.body.id,
        name:req.body.name,
        price:req.body.price,
        category:req.body.category,
        company_id:req.body.company_id,
        seller_id:req.body.seller
    })
    prod.findByIdAndUpdate(req.params.id,{$set:prod},{new:true},(err,data)=>{
        if(!err) {
        res.status(200).json({code:200, message:"Product updated Sucessfully",updateproduct:data});
        }else{
            console.log(err)
        }
    })
})

//Delete Product
router.delete('/api/product/delete/:id',(req,res)=>{
    product.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err){
            res.status(200).json({code:200, message:"Product Deleted Sucessfully",deleteproduct:data});
        }else{
            console.log(err)
        }
    })
})
//----------------------------
//COMPANY CRUD OPERATION
router.get('/api/company',(req, res)=>{
    company.find({},(err,data)=>{
        
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })

});
//POST /company
router.post('/api/company/add',(req, res)=>{
    const cmp = new company({
        id:req.body.id,
        name:req.body.name,
        product_id:req.body.seller
    })
    cmp.save((err,data)=>{
        res.status(200).json({code:200, message:"Company Added Sucessfully",addcompany:data});
    })
})
//Update Company
router.put('/api/company/edit/:id',(req, res)=>{
    const cmp = new product({
            id:req.body.id,
            name:req.body.name,
            product_id:req.body.seller
        })
        cmp.findByIdAndUpdate(req.params.id,{$set:prod},{new:true},(err,data)=>{
            if(!err) {
            res.status(200).json({code:200, message:"Company updated Sucessfully",updatecompany:data});
            }else{
                console.log(err)
            }
        })
    })

//Delete Product
router.delete('/api/company/delete/:id',(req,res)=>{
    producompanyct.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err){
            res.status(200).json({code:200, message:"Company Deleted Sucessfully",deletecompany:data});
        }else{
            console.log(err)
        }
    })
})
//---------------------------------
//SELLER CRUD OPERATION
router.get('/api/seller',(req, res)=>{
    seller.find({},(err,data)=>{
        
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })

});
//POST /seller
router.post('/api/seller/add',(req, res)=>{
    const sel = new seller({
        id:req.body.id,
        name:req.body.name,
        product_id:req.body.seller
    })
    sel.save((err,data)=>{
        res.status(200).json({code:200, message:"Seller Added Sucessfully",addseller:data});
    })
})
//Update Seller
router.put('/api/seller/edit/:id',(req, res)=>{
    const sel = new product({
            id:req.body.id,
            name:req.body.name,
            product_id:req.body.seller
        })
        sel.findByIdAndUpdate(req.params.id,{$set:prod},{new:true},(err,data)=>{
            if(!err) {
            res.status(200).json({code:200, message:"Seller Details updated Sucessfully",updateseller:data});
            }else{
                console.log(err)
            }
        })
    })

//Delete Product
router.delete('/api/seller/delete/:id',(req,res)=>{
    product.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err){
            res.status(200).json({code:200, message:"Seller Details Deleted Sucessfully",deleteseller:data});
        }else{
            console.log(err)
        }
    })
})
module.exports=router;