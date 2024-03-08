const sparepartsSchema = require('../sparepartsSchema');
const spareOrders = require('./spareOrders')


const bookSparePart =async (req, res) => {
    let shopid=null
    await sparepartsSchema.findById({_id:req.body.sparepartid}).exec().then(data=>{
        shopid=data.shopid
    }).catch(err=>{
        console.log(err);
    })
    const newone = new spareOrders({
        userid:req.body.userid,
        sparepartid:req.body.sparepartid,
        quantity:req.body.Quantity,
        price: req.body.price,
        shopid:shopid,
        date:new Date()
    });
   await newone
        .save()
        .then((data) => {
            res.json({
                status: 200,
                msg: "Ordered successfully",
                data: data,
            });
        })
        .catch((err) => {
console.log(err);
            res.json({
                status: 500,
                msg: "Data not Inserted",
                Error: err,
            });
        });
};

const viewSparePartBookingByWid = (req, res) => {
    spareOrders.find({shopid:req.params.id}).populate('userid').exec()
      .then(data => {
        console.log(data);
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data
        })
  
      }).catch(err => {
        console.log(err);
        res.json({
          status: 500,
          msg: "No Data obtained",
          Error: err
        })
      })
  
  }

  const viewBookingByUserid = (req, res) => {
    spareOrders.find({userid:req.params.id})
    .populate('shopid')
    .populate('sparepartid')
    .exec()
      .then(data => {
        console.log(data);
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data
        })
  
      }).catch(err => {
        console.log(err);
        res.json({
          status: 500,
          msg: "No Data obtained",
          Error: err
        })
      })
  
  }

  module.exports={bookSparePart,
viewBookingByUserid,
viewSparePartBookingByWid}