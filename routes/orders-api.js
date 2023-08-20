// const express = require('express');
// const router = express.Router();
// const db = require('../db/connection');

// router.post('/', (req, res) => {
//   const userId;
//   const orderTotal;
//   const query = (`
//   INSERT INTO orders(user_id, order_total)
//   VALUES ($1, $2);`, [userId, orderTotal]
//   );
//   //console.log(query);
//   return db.query(query)
//     .then(data => {
//       //console.log("in the widgets api ", data);
//       res.status(200)
//       const dish = data.rows[0];
//       return res.json({ dish });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });
