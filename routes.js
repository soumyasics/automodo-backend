const express=require('express')
const router=express.Router()

const customers=require('./Customer/customerController')

// Customer routes
router.post('/registerCustomer',customers.upload,customers.registerCustomer)
router.post('/viewCustomers',customers.viewCustomers)

module.exports=reouter