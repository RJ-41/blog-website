const blogModel = require("../models/blogModel");

const getBlogs = (req, res) => {
    blogModel.getAllBlogs((err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to fetch blogs"
            });
        }

        res.json(result);
    });
};

const getBlog = (req, res) => {
    const id = req.params.id;

    blogModel.getBlogById(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to fetch blog"
            });
        }

        res.json(result[0]);
    });
};

const createBlog = (req, res) => {
    const data = req.body;

    blogModel.createBlog(data, (err) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to create blog"
            });
        }

        res.status(201).json({
            message: "Blog Created Successfully"
        });
    });
};

const updateBlog = (req, res) => {
    const id = req.params.id;

    blogModel.updateBlog(id, req.body, (err) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to update blog"
            });
        }

        res.json({
            message: "Blog Updated Successfully"
        });
    });
};

const deleteBlog = (req, res) => {
    const id = req.params.id;

    blogModel.deleteBlog(id, (err) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to delete blog"
            });
        }

        res.json({
            message: "Blog Deleted Successfully"
        });
    });
};

module.exports = {
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
};