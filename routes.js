const express=require('express')
const router=express.Router()
console.log("api worked");
const customers=require('./Customer/customerController')
const mechanic=require('./Mechanic/mechanicController')
const workshops=require('./WorkShop/workshopController')

// Customer routes
router.post('/registerCustomer',customers.upload,customers.registerCustomer)
router.post('/viewCustomers',customers.viewCustomers)
router.post('/viewCustById/:id',customers.viewCustById)
router.post('/editCustomerById/:id',customers.upload,customers.editCustomerById)
router.post('/loginCust',customers.loginCust)
router.post('/forgotPwdCustomer',customers.forgotPwd)
router.post('/deleteCustomerById/:id',customers.deleteCustomerById)


// Workshop routes
router.post('/registerWorkshop',workshops.upload,workshops.registerWorkshop)
router.post('/viewWorkshopReqs',workshops.viewWorkshopReqs)
router.post('/viewWorkshopById/:id',workshops.viewWorkshopById)
router.post('/editWorkshopById/:id',workshops.editWorkshopById)
router.post('/approveWorkshopById/:id',workshops.approveWorkshopById)
router.post('/viewApprovedWorkshops',workshops.viewApprovedWorkshops)
router.post('/loginworkshops',workshops.loginworkshops)
router.post('/forgotPwdWorkshop',workshops.forgotPwd)
router.post('/deleteWorkshopById/:id',workshops.deleteWorkshopById)

// mechanic routes
router.post('/addMechanic',mechanic.upload,mechanic.addMechanic)
router.post('/viewMechanics',mechanic.viewMechanics)
router.post('/viewMechById/:id',mechanic.viewMechById)
router.post('/editMechanicById/:id',mechanic.editMechanicById)
router.post('/loginMech',mechanic.loginMech)
router.post('/forgotPwdCustomer',mechanic.forgotPwd)
router.post('/deleteMechanicById/:id',mechanic.deleteMechanicById)
router.post('/viewMechanicsByShopid/:id',mechanic.viewMechanicsByShopid)

module.exports=router