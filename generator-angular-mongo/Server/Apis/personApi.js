var _ = require('lodash');

var ClientController = require('../controllers/people.Server.Controller');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var tokenHelper = require('./apiHelpers');

var create = function (req, res) {
    peopleController.create(req, res);
};

var read = function (req, res) {
    peopleController.list(req, res);
};

var readById = function (req, res) {
    peopleController.findById(req, res);
};

var update = function (req, res) {
    peopleController.update(req, res);
};

var del = function (req, res) {
    peopleController.del(req, res);
};


router.post('/', create);
router.get('/', read);
router.get('/:id', readById);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;