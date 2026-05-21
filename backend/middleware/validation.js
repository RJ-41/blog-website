const validateBlog = (req, res, next) => {

    const { title, content } = req.body;

    if (!title || title.length < 5) {
        return res.status(400).json({
            message: "Title must be at least 5 characters"
        });
    }

    if (!content || content.length < 50) {
        return res.status(400).json({
            message: "Content must be at least 50 characters"
        });
    }

    next();
};

module.exports = validateBlog;