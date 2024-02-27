
const mechSchema = require("./mechanicSchema");
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

const addMechanic = (req, res) => {
  const newMech = new mechSchema({
    firstname: req.body.firstname,
    lastname: req.body.lastname,

    email: req.body.email,

    contact: req.body.contact,
    password: req.body.password,
    gender: req.body.gender,
    certificate: req.file,
    aadhar:req.body.aadhar
  });
  newMech
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted successfully",
        data: data,
      });
    })
    .catch((err) => {
      if (err.code == 1100) {
        return res.json({
          status: 409,
          msg: "Mail Id already in Use",
          Error: err
        })
      }
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};
//Mechanic Registration -- finished

//Login Mechanic
const loginCust = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  mechSchema
    .findOne({ email: email })
    .exec()
    .then((data) => {
      if(data.length>0){
        if(password==data.password){
          res.json({
            status:200,
            msg:"Login successfully",
            data:data
        })
      }else{
        res.json({
          status:401,
          msg:"password Mismatch",
          
      })
      }
    }
    else{
      res.json({
        status:401,
        msg:"No User Found",
        
    })
    }
      
    }).catch(err=>{
    res.json({
        status:500,
        msg:"Internal server error",
        Error:err
    })
    })
      };
    
    
//Login Mechanics --finished

//View all Mechanics

const viewMechanics = (req, res) => {
  mechSchema
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

// view Mechanics finished




//update  by id
const editMechanicById = (req, res) => {



  mechSchema.findByIdAndUpdate({ _id: req.params.id }, {
    firstname: req.body.firstname,
    lastname: req.body.lastname,

    email: req.body.email,

    contact: req.body.contact,
    password: req.body.password,
    gender: req.body.gender,
    image: req.file
  })
    .exec().then(data => {
      res.json({
        status: 200,
        msg: "Updated successfully"
      })
    }).catch(err => {

      res.json({
        status: 500,
        msg: "Data not Updated",
        Error: err
      })
    })
}
// view  by id
const viewCustById = (req, res) => {
  mechSchema.findById({ _id: req.params.id }).exec()
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

const deleteMechanicById = (req, res) => {

  mechSchema.findByIdAndDelete({ _id: req.params.id }).exec()
    .then(data => {
      console.log(data);
      res.json({
        status: 200,
        msg: "Data removed successfully",
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
//forgotvPawd
const forgotPwd = (req, res) => {



  mechSchema.findOneAndUpdate({ email: req.body.email }, {

    password: req.body.password
  })
    .exec().then(data => {
      if (data != null)
        res.json({
          status: 200,
          msg: "Updated successfully"
        })
      else
        res.json({
          status: 500,
          msg: "Mechanic Not Found"

        })
    }).catch(err => {
      console.log(err);
      res.json({
        status: 500,
        msg: "Data not Updated",
        Error: err
      })
    })
}


module.exports = {
  addMechanic,
  viewMechanics,
  upload,
  loginCust,
  viewCustById,
  viewMechanics,
  editMechanicById,
  forgotPwd,
  deleteMechanicById
}