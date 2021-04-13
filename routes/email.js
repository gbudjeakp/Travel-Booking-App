require("dotenv").config();
const express = require("express");
const router = express.Router();
const sendGridApiKey = process.env.SENDGRID_API_KEY;
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(sendGridApiKey);

const sendEmail = async (req, res) => {
  try {
    await sgMail.send(req.body);
    res.status(200).json({ message: "Email Sent" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "You might not be authorized to make this action" });
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

router.post("/sendemail", sendEmail);

module.exports = router;
