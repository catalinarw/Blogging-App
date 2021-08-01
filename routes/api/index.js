const router = require("express").Router();
const postRoutes = require("./posts");

// POST ROUTES
router.use("/posts", postRoutes);

module.exports = router;
