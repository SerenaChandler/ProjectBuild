const router = require("express").Router();
const postRoutes = require("./posts");


// Book routes
router.use("/books", bookRoutes);

module.exports = router;