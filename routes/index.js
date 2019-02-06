const express = require('express');
const Court = require('../models/Court');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/add-court', (req, res, next) => {
  res.render('add-court')
})

// GOAL: take the values typed by the user; save a new Court; redirect the user to /
router.post('/add-court', (req, res, next) => {
  Court.create({
    sport: req.body.sport,
    location: {
      type: 'Point', // this line is optional thanks to the model
      coordinates: [req.body.lng, req.body.lat]
    }
  })
    .then(() => {
      res.redirect('/')
    })
    .catch(err => next(err))
})

module.exports = router;
