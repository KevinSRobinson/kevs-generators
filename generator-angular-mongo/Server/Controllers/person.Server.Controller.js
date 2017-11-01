var Person = require('../Models/peopleModel.js');
var _ = require('lodash');

exports.create = function (req, res) {
    var person = new Person();
    _.merge(person, req.body);
    person.save();
    res.json(person);
};

exports.del = function (req, res) {
    Person.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.json({
                info: 'error during remove person'
            });
        }
        res.json({
            info: 'person removed successfully'
        });
    });
}



exports.update = function (req, res) {
    Person.findById(req.params.id, function (err, Person) {
     
        if (err) {
           return res.json(500, err);
        }
        if (!Person) {
            return res.send(404);
        }

        _.extend(Person, req.body);
        
        Person.save(function (err) {
            if (err) {
               return res.json(500, err);
            }
            return res.json(200, Person);
        });
    });
};

exports.findById = function (req, res) {
    var query = Person.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

exports.list = function (req, res) {
    var query = Person.find({}).sort('FirstName').then(function (results, err) {
        res.json(results);
    });
};

exports.findById = function (req, res) {
    var query = Person.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};