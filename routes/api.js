const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Working Smoothly');
});

module.exports = router;
