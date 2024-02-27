const express=require('express')
const router=express.Router()

const customers=require('./Customer/customerController')

// Customer routes
router.post('/registerCustomer',customers.upload,customers.registerCustomer)
router.post('/viewCustomers',customers.viewCustomers)
router.post('/viewCustById/:id',customers.viewCustById)
router.post('/editCustomerById/:id',customers.editCustomerById)
router.post('/loginCust',customers.loginCust)
router.post('/forgotPwdCustomer',customers.forgotPwd)
router.post('/deleteCustomerById/:id',customers.deleteCustomerById)

module.exports=router