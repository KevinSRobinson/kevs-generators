var _ = require('lodash');

var <%= data.plural%>Controller = require('../controllers/<%= data.plural%>.Server.Controller');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var tokenHelper = require('./apiHelpers');

var create = function (req, res) {
    <%= data.plural%>Controller.create(req, res);
};

var read = function (req, res) {
    <%= data.plural%>Controller.list(req, res);
};

var readById = function (req, res) {
    <%= data.plural%>Controller.findById(req, res);
};

var update = function (req, res) {
    <%= data.plural%>Controller.update(req, res);
};

var del = function (req, res) {
    <%= data.plural%>Controller.del(req, res);
};


router.post('/', create);
router.get('/', read);
router.get('/:id', readById);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;