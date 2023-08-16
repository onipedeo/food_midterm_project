const db = require('../connection');

const getPaymentMethodsByUserId = (userId) => {
  return db.query(`
  SELECT *
  FROM payment_details
  WHERE user_id = $1;`
  , [userId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPaymentMethodsByUserId };
