const router = require("express").Router();
const { contactDetails } = require("../controller/ContactController");

router.post("/contactus", contactDetails);

module.exports = router;
