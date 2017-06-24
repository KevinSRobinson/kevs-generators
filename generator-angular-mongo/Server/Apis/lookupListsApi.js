var _ = require('lodash');

var LookupListController = require('../controllers/lookupLists.Server.Controller');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var tokenHelper = require('./apiHelpers');

var create = function (req, res) {
    LookupListController.create(req, res);
};

var read = function (req, res) {
    LookupListController.list(req, res);
};

var readById = function (req, res) {
    LookupListController.findById(req, res);
};

var update = function (req, res) {
    LookupListController.update(req, res);
};

var del = function (req, res) {
    LookupListController.del(req, res);
};

var readAllByList = function (req, res) {
    LookupListController.readAllByList(req, res);
};

var readAllByParent = function (req, res) {
    LookupListController.readAllByParent(req, res);
};

router.get('/readAllByList/:id', readAllByList);
router.get('/readAllByParent/:id', readAllByParent);
router.post('/', create);
router.get('/', read);
router.get('/:id', readById);
router.put('/:id', update);
router.delete('/:id', del);



module.exports = router;