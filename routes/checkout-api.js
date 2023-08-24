const express = require('express');
const router = express.Router();
const db = require('../db/connection');
require('dotenv').config();
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const textPhone = process.env.TEXTPHONE;

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
    let result = await db.query(orderQuery, [userId, orderTotal * 100]);

    let parsedOrderDetails = JSON.parse(orderDetails);
    for (const order of parsedOrderDetails) {
      const ordersDishesQuery = `
      INSERT INTO orders_dishes (order_id, dish_id, quantity)
      VALUES ($1, $2, $3)
      `;
      await db.query(ordersDishesQuery, [result.rows[0]['id'], order.dish_id, order.quantity]);
    }


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


    // Send Twilio text to the restaurant
    const confirmedOrder = [];
    for (const order of orderDetails) {
      confirmedOrder.push(`Name: ${order.itemName} \n Quantity: ${order.quantity}`);
    }


    client.messages.create(
      {
        body: `Incoming order details:\n
        ${confirmedOrder.join('\n')}
        Total: ${orderTotal}`,
        from: '+12563201469',
        to: textPhone
      }
    ).then((message) => {
      console.log(message.sid);
    });

    res.status(200).send("Twilio text sent successfully.");
  }
  catch (error) {
    console.error("Error sending Twilio text:", error);
    res.status(500).send("Error sending Twilio text.");
  }
});

router.get("/get-estimated-time", async (req, res) => {
  const estimatedTimeQuery = `
  SELECT estimated_completion
  FROM orders
  ORDER BY orders_date DESC
  LIMIT 1;
  `
  try {
    const result = await db.query(estimatedTimeQuery)
    const estimatedTime = result.rows[0];
    res.json(estimatedTime);
  }
  catch (error) {
    console.error("Error getting estimated time:", error);
    res.status(500).send("Error getting estimated time.");
  }

});



module.exports = router;
