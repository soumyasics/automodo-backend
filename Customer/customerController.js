
const customers = require("./customerSchema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");
//User Registration

const registerCustomer = (req, res) => {
  const newCust = new customers({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
   
    email: req.body.email,
   
    contact: req.body.contact,
    password: req.body.password,
    gender: req.body.gender,
    image: req.file,
  });
  newCust
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted successfully",
        data: data,
      });
    })
    .catch((err) => {
      if(err.code==1100){
       return res.json({
          status:409,
          msg:"Mail Id already in Use",
          Error:err
      })
      }
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};
//Customer Registration -- finished

//Login Customer
const loginCust = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  customers
    .findOne({ email: email })
    .exec()
    .then((data) => {
      if (password == data.password) {
        res.json({
          status: 200,
          msg: "Login successfully",
          data: data,
        });
      } else {
        res.json({
          status: 500,
          msg: "password Mismatch",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "User not found",
        Error: err,
      });
    });
};

//Login customers --finished

//View all customers

const viewCustomers = (req, res) => {
    customers
    .find()
    .exec()
    .then((data) => {
      if (data.length > 0) {
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained ",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};

// view customers finished


module.exports={registerCustomer,
    viewCustomers,
    upload}