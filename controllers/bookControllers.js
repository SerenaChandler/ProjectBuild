const db = require("../models");

module.exports = {
    remove: function(req, res) {
        db.Book.findById({ __id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        db.Book.find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      save: function(req, res) {
        console.log("route save", req.body)
        db.Book.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}