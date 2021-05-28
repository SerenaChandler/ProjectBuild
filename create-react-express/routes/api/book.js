const router = require("express").Router();
const bookController = require("../../controllers/bookControllers");
//const axios = require("axios");


router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.save);


router
  .route("/:id")
  // .get(bookController.findAll)
  // .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
