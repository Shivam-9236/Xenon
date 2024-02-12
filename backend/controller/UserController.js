const User = require("../model/UserModel");
const bcrypt = require("bcrypt");

//resgisteration
module.exports.register = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password, confirmPassword, username, mobileNo } = req.body;

    // Validate if confirmPassword is present in the request body
    if (!confirmPassword) {
      return res.json({
        message: "Confirm Password is required",
        status: false,
      });
    }

    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({
        message: "Email Already used",
        status: false,
      });
    }
    if (password != confirmPassword) {
      return res.json({
        message: "Confirm Password doesn't match",
        status: false,
      });
    }
    const user = await User.create({
      email,
      password,
      confirmPassword,
      username,
      mobileNo,
    });
    await user.save();

    return res.status(201).json({
      message: "User registered successfully",
      status: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const userEmail = await User.findOne({ email });
    if (!userEmail) {
      return res.json({
        message: "User Not found",
        status: false,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, userEmail.password);

    if (!isPasswordValid) {
      return res.json({
        message: "Incorrect Password",
        status: false,
      });
    }

    delete userEmail.password;

    return res.json({
      message: "User logged in successfully",
      status: true,
      user: userEmail,
    });
  } catch (error) {
    next(error);
  }
};

//update details

module.exports.updateDetails = async (req, res, next) => {
  try {
    const { username, mobileNo, email, password } = req.body;
    if (!email) {
      return res.json({
        message: "User is not found",
        status: false,
      });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      {
        username: username,
        mobileNo: mobileNo,
        password: password,
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      message: "User info updated successfully",
      updatedUser,
      status: true,
    });
  } catch (error) {
    next(error);
  }
};
