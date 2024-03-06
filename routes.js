const express = require('express')
const router = express.Router()
console.log("api worked");
const customers = require('./Customer/customerController')
const mechanic = require('./Mechanic/mechanicController')
const workshops = require('./WorkShop/workshopController')
const services = require('./WorkShop/Services/serviceController')
const booking = require('./WorkShop/Bookings/serviceBookingController')
const sparepartController = require('./WorkShop/SpareParts/sparepartController')

// Customer routes
router.post('/registerCustomer', customers.upload, customers.registerCustomer)
router.post('/viewCustomers', customers.viewCustomers)
router.post('/viewCustById/:id', customers.viewCustById)
router.post('/editCustomerById/:id', customers.upload, customers.editCustomerById)
router.post('/loginCust', customers.loginCust)
router.post('/forgotPwdCustomer', customers.forgotPwd)
router.post('/deleteCustomerById/:id', customers.deleteCustomerById)


// Workshop routes
router.post('/registerWorkshop', workshops.upload, workshops.registerWorkshop)
router.post('/viewWorkshopReqs', workshops.viewWorkshopReqs)
router.post('/viewWorkshopById/:id', workshops.viewWorkshopById)
router.post('/editWorkshopById/:id', workshops.editWorkshopById)
router.post('/approveWorkshopById/:id', workshops.approveWorkshopById)
router.post('/viewApprovedWorkshops', workshops.viewApprovedWorkshops)
router.post('/loginworkshops', workshops.loginworkshops)
router.post('/forgotPwdWorkshop', workshops.forgotPwd)
router.post('/deleteWorkshopById/:id', workshops.deleteWorkshopById)

// mechanic routes

router.post('/addMechanic/:id',mechanic.upload,mechanic.addMechanic)
router.post('/viewMechanics',mechanic.viewMechanics)
router.post('/viewMechById/:id',mechanic.viewMechById)
router.post('/editMechanicById/:id',mechanic.editMechanicById)
router.post('/loginMech',mechanic.loginMech)
router.post('/forgotPwdCustomer',mechanic.forgotPwd)
router.post('/deleteMechanicById/:id',mechanic.deleteMechanicById)
router.post('/viewMechanicsByShopid/:id',mechanic.viewMechanicsByShopid)



// services routes
router.post('/registerService', services.registerService)
router.post('/searchServicesByName/:serviceName', services.searchServicesByName)
router.post('/viewServicesByWid/:id', services.viewServicesByWid)
router.post('/editServiceById/:id', services.editServiceById)
router.post('/viewServiceById/:id', services.viewServiceById)
router.post('/deleteServiceById/:id', services.deleteServiceById)
router.post('/viewallservices', services.viewallservices)


//booking routes
router.post('/bookaService/:serviceid', booking.bookaService)
router.post('/viewBookingByWid/:id', booking.viewBookingByWid)
router.post('/viewBookingByCustid/:id', booking.viewBookingByCustid)
router.post('/approveBookingByWid/:id', booking.approveBookingByWid)
router.post('/assignMechForService/:id', booking.assignMechForService)
router.post('/viewBookingByMechid/:id', booking.viewBookingByMechid)
// router.post('/updatePaymentbyBookingId', booking.updatePaymentbyBookingId) -- not needed

//spareparts
router.post('/addSpareParts',sparepartController.upload, sparepartController.addSpareParts)
router.post('/viewSparePartById/:id', sparepartController.viewSparePartById)
router.post('/searchSparePartByName/:partName',sparepartController.searchSparePartByName)
router.post('/editSparePartById/:id',sparepartController.upload, sparepartController.editSparePartById)
router.post('/deleteSparePartById/:partName',sparepartController.deleteSparePartById)
router.post('/viewSparePartByWid',sparepartController.viewSparePartByWid)
router.post('/viewallSpareParts',sparepartController.viewallSpareParts)


module.exports = router