const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {

  const query = (`
  SELECT  users.name AS username, order_id AS orderID, dishes.name AS dishname, quantity, orders.orders_total AS total, estimated_completion
  FROM users
  JOIN orders ON users.id = user_id
  JOIN orders_dishes ON orders.id = order_id
  JOIN dishes ON dishes.id = dish_id
  ;`);

  return db.query(query)
    .then(data => {
      //console.log("in the widgets api ", data);
      res.status(200);
      const order = data.rows;
      return res.json({ order });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
