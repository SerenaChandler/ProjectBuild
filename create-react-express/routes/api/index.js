const router = require("express").Router();
const postRoutes = require("./book");


// Book routes
router.use("/books", bookRoutes);

module.exports = router;