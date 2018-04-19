const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/temperature', (req, res) => {
  res.json({
    temperature: parseInt(Math.floor(Math.random() * 101)) // returns a number between 0 and 100
  })
});
module.exports = router;
