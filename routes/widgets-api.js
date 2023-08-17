/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  const query = `SELECT *, CONCAT('$', ROUND(price / 100.0, 2)) As price FROM dishes`;
  console.log(query);
  return db.query(query)
    .then(data => {
      console.log("in the widgets api ", data);
      const dish = data.rows;
      return res.json({ dish });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
