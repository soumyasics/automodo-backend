const serviceSchema = require("../Services/serviceSchema");
const serviceBookings = require("./serviceBooking");

const bookaService =async (req, res) => {
    let shopid=null,date=new Date()
await serviceSchema.findById({_id: req.params.serviceid}).exec().then(datas=>{
    shopid=datas.shopid
})
.catch((err) => {
        
    console.log(err);
  });

    const newBooking = new serviceBookings({
        custid:req.body.custid,
        serviceid: req.params.serviceid,
        servicedate: req.body.servicedate,
        shopid:shopid,
        bookingdate:date
    });
    await newBooking
      .save()
      .then((data) => {
        res.json({
          status: 200,
          msg: "Booked successfully",
          data: data,
        });
      })
      .catch((err) => {
        
        res.json({
          status: 500,
          msg: "Data not Inserted",
          Error: err,
        });
      });
  };

  module.exports={
    bookaService
  }