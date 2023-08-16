const db = require("../connection");

const getSubtotalByOrderId = (orderId) => {
  return db
    .query(
      `
      SELECT SUM(dishes.price) as order_subtotal
      FROM orders_dishes
      JOIN dishes ON orders_dishes.dish_id = dishes.id
      WHERE order_id = $1
      GROUP BY order_id, dishes.price
      ;`,
      [orderId]
    )
    .then((data) => {
      return data.rows;
    });
};

module.exports = { getSubtotalByOrderId };
