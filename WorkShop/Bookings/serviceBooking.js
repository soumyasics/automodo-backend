const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    custid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers",
        required: true,
    },
    shopid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "workshops",
        required: true,
    },
    serviceid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "services",
        required: true,
    },
    servicedate: {
        type: Date,
        required: true
    },
    bookingdate: {
        type: Date,
        required: true
    },
    paymentstatus: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('servicebookings', bookingSchema)