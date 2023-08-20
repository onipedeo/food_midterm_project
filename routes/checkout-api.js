const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const accountSid = 'ACcad053b7f895009f1ad06845972883ad';
const authToken = '3c92d27c4d8dc064613f765d9c9ed240';

const client = require('twilio')(accountSid, authToken);


router.post("/submit-order", async (req, res) => {
  try {
    const { userId, orderTotal, orderDetails } = req.body;

    // Insert order into "orders" table
    const orderQuery = `
      INSERT INTO orders (user_id, orders_date, orders_total, order_complete)
      VALUES ($1, NOW(), $2, false)
      RETURNING id;
    `;
    await db.query(orderQuery, [userId, orderTotal * 100]);

    res.status(200).send("Order submitted successfully.");
  } catch (error) {
    console.error("Error submitting order:", error);
    res.status(500).send("Error submitting order.");

  }
});

router.post("/send-twilio-text", (req, res) => {
  try {
    // Extract order details from request body
    const { orderTotal, orderDetails } = req.body;
    console.log(req.body);

    // Send Twilio text to the restaurant
    const confirmedOrder = [];
    for (const order of orderDetails) {
      confirmedOrder.push(`${order.itemName} (${order.quantity})`);
    }


    client.messages.create(
      {
        body: `Incoming order details: ${confirmedOrder.join(', ')}. Total: ${orderTotal}`,
        from: '+12563201469',
        to: '+12048807425'
      }
    ).then((message) => {
      console.log(message.sid);
    });

    res.status(200).send("Twilio text sent successfully.");
  } catch (error) {
    console.error("Error sending Twilio text:", error);
    res.status(500).send("Error sending Twilio text.");
  }
});



module.exports = router;