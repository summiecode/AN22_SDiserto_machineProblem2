const mongoose = require("mongoose")
const productSchema = new mongoose.Schema(
    {
      Name: {
        type: String,
        required: true,
      },
      Description: {
        type: String,
        required: true,
      },
      Price: {
        type: Number,
        required: true,
      },
      isActive: {
        type: Boolean,
        required: true,
      },
      createdOn: {
        type: Date,
        default: Date.now()
      },
    }
  );

const product = mongoose.model('products',productSchema)

module.exports = product