const db = require("../connection");

const getDishesByOrder = (orderId) => {
  return db
    .query(
      `
      SELECT dishes.name as dish_name, count(dishes.id) AS dish_count, dishes.price AS price
      FROM orders_dishes
      JOIN dishes ON orders_dishes.dish_id = dishes.id
      WHERE order_id = $1
      GROUP BY dishes.name
      ;`,
      [orderId]
    )
    .then((data) => {
      return data.rows;
    });
};

module.exports = { getDishesByOrder };
