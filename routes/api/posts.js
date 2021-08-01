const router = require("express").Router();
const postsController = require("../../controllers/postsController");

router

  //MATCHES WITH "/api/posts"
  .route("/")

  .get(postsController.findAll)

  .post(postsController.create);


router

  // MATCHES WITH "/api/posts/:id"
  .route("/:id")

  .get(postsController.findById)

  .put(postsController.update)
  
  .delete(postsController.remove);

module.exports = router;
