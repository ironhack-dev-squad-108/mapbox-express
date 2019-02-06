const express = require('express');
const Court = require('../models/Court');
const router = express.Router();

router.get('/courts', (req, res, next) => {
  Court.find()
    .then(courts => {
      res.json(courts)
    })
    .catch(err => {
      console.log(err);
      res.json({
        err: 'Sorry, something bad happened'
      })
    })
})

module.exports = router;
