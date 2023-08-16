const db = require('../connection');

const getMenu = () => {
  return db.query(`SELECT * FROM dishes;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMenu };
