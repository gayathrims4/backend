const express = require('express');
const bankModel = require('../model/BankList');
const app = express();
const bankRoute = express.Router();

// Get all student
bankRoute.route('/').get((req, res) => {
  bankModel.find().limit(800)
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      return next(err)
    })
})

bankRoute.route('/doLike').post((req, res) => {
  bankModel.findOneAndUpdate({ ifsc: req.body.ifsc }, { isLiked: req.body.isLiked }, { new: true })
    .then((result) => {
      bankModel.find().limit(800)
        .then((result) => {
          res.json(result)
        }).catch((err) => {
          return next(err)
        })
    }).catch((err) => {
      return next(err)
    })
})
module.exports = bankRoute;

