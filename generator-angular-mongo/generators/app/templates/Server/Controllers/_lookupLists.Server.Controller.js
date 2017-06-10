var LookupList = require('../Models/lookupListsModel.js');
var _ = require('lodash');

exports.create = function (req, res) {
    var lookupList = new LookupList();
    _.merge(lookupList, req.body);
    lookupList.save();
    res.json(lookupList);
};

exports.del = function (req, res) {
    LookupList.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.json({
                info: 'error during remove lookupList'
            });
        }
        res.json({
            info: 'lookupList removed successfully'
        });
    });
}



exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    LookupList.findById(req.params.id, function (err, entity) {
        if (err) {
            return res.json(500, err);
        }
        if (!entity) {
            return res.send(404);
        }
        _.extend(entity, req.body);
        entity.save(function (err) {
            if (err) {
               return res.json(500, err);
            }
            return res.json(200, entity);
        });
    });
};


exports.list = function (req, res) {
    LookupList.find({}).then(function (results, err) {
        res.json(results);
    });
};


exports.findById = function (req, res) {
    LookupList.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

exports.readAllByList = function (req, res) {
    LookupList.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

exports.readAllByParent = function (req, res) {
    LookupList.find({Parent: req.params.id}).then(function (results) {
        res.json(results);        
    });
};

