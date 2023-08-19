const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// router.post('/', (req, res) => {
//   const query = `
//   INSERT INTO orders()`
//   //console.log(query);
//   return db.query(query)
//     .then(data => {
//       //console.log("in the widgets api ", data);
//       const dish = data.rows;
//       return res.json({ dish });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });
