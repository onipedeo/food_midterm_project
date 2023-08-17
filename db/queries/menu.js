const db = require('../connection');
/**
 * @param {none}
 * @returns {Promise<{}>} A promise to the menu
 *
 * @contains {id, name, description, price, vegan, image_url}
 */
const getMenu = () => {
  return db.query(`SELECT * FROM dishes;`)
    .then(data => {
      console.log(data.rows);
      return data.rows;     });
     };


 module.exports = { getMenu };
