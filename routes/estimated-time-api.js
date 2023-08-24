const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.post('/', (req, res) => {

  const {orderId, timeInput} = req.body;
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
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
