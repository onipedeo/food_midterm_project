const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = 'SELECT * FROM users WHERE email = $1 AND password = $2;';
  const params = [email, password];

  db.query(query, params)
    .then(result => {
     const user = result.rows[0];
      return res.json({ user });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
