const db = require("../connection");
/**
 *
 * @param {idNum} orderId
 * @returns {Promise} a promise to the dishes in the order
 * @contains {dishName, dishCount, dishPrice}
 */
const getDishesByOrder = (orderId) => {
  return db
    .query(
      `
      SELECT dishes.name as dishName, count(dishes.id) AS dishCount, dishes.price AS dishPrice
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
