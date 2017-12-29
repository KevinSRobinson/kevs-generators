var <%= data.name %> = require('../Models/<%= data.plural%>Model.js');
var _ = require('lodash');

exports.create = function (req, res) {
    var <%= data.camelCase%> = new <%= data.name %>();
    _.merge(<%= data.camelCase%>, req.body);
    <%= data.camelCase%>.save();
    res.json(<%= data.camelCase%>);
};

exports.del = function (req, res) {
    <%= data.name %>.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.json({
                info: 'error during remove <%= data.camelCase%>'
            });
        }
        res.json({
            info: '<%= data.camelCase%> removed successfully'
        });
    });
}



exports.update = function (req, res) {
    <%= data.name %>.findById(req.params.id, function (err, <%= data.name %>) {
     
        if (err) {
           return res.json(500, err);
        }
        if (!<%= data.name %>) {
            return res.send(404);
        }

        _.extend(<%= data.name %>, req.body);
        
        <%= data.name %>.save(function (err) {
            if (err) {
               return res.json(500, err);
            }
            return res.json(200, <%= data.name %>);
        });
    });
};

exports.findById = function (req, res) {
    var query = <%= data.name %>.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

exports.list = function (req, res) {
    var query = <%= data.name %>.find({}).sort('FirstName').then(function (results, err) {
        res.json(results);
    });
};

exports.findById = function (req, res) {
    var query = <%= data.name %>.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};