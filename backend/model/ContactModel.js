const mongoose = require("mongoose");
const emailValidator = require("email-validator");

const contactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    min: 3,
    max: 20,
    default: null,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    validate: function () {
      return emailValidator.validate(this.email);
    },
  },
  secondname: {
    type: String,
    default: null,
  },
  company: {
    type: String,
    default: null,
  },
  mobileNo: {
    type: Number,
    min: 10,
    default: null,
  },
  message: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("contacts", contactSchema);
