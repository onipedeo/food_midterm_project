const db = require("../connection");

const getOrdersByUserId = (userId) => {
  return db
    .query(
      `
      SELECT orders.id AS order_id
      FROM orders
      Where orders.user_id = $1
      `,
      [userId]
    )
    .then((data) => {
      return data.rows;
    });
};

module.exports = { getDishesByOrder };
