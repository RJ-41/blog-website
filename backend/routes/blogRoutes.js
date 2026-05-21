const express = require("express");

const router = express.Router();

const controller = require("../controllers/blogController");

const validateBlog = require("../middleware/validation");

router.get("/", controller.getBlogs);

router.get("/:id", controller.getBlog);

router.post("/", validateBlog, controller.createBlog);

router.put("/:id", validateBlog, controller.updateBlog);

router.delete("/:id", controller.deleteBlog);

module.exports = router;