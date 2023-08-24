const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const { Client } = require("pg");
require("dotenv").config();
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const textPhone = process.env.TEXTPHONE;
const client = require("twilio")(accountSid, authToken);

router.post("/", (req, res) => {
  const { orderId, timeInput } = req.body;
  console.log(orderId, timeInput);
  const params = [timeInput, parseInt(orderId)];

  const query = `UPDATE orders
  SET estimated_completion = $1
  WHERE orders.id = $2;
  `;

  db.query(query, params)
    .then((result) => {
      return res.json({ message: "Estimated time update successful" });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.post("/send-twilio-estimated-time-text", (req, res) => {
  try {
    // Extract estimated time from request body
    const { time } = req.body;

    //send twilio text estimate time
    client.messages
      .create({
        body: `Your order will be ready for pickup at ${time}`,
        from: "+12563201469",
        to: textPhone,
      })
      .then((message) => {
        console.log(message.sid);
      });

    res.status(200).send("Estimated time sent successfully.");
  } catch (error) {
    console.error("Error sending Twilio text:", error);
    res.status(500).send("Error sending Twilio text.");
  }
});

module.exports = router;
