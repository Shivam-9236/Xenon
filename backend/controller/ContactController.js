const Contact = require("../model/ContactModel");

module.exports.contactDetails = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, firstname, secondname, company, message, mobileNo } =
      req.body;

    const enquiry = await Contact.create({
      email,
      firstname,
      secondname,
      message,
      company,
      mobileNo,
    });
    await enquiry.save();

    return res.status(201).json({
      message: "Enquiry made successfully",
      status: true,
      enquiry,
    });
  } catch (error) {
    next(error);
  }
};
