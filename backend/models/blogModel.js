const db = require("../config/db");

const getAllBlogs = (callback) => {
    const query = "SELECT * FROM blogs ORDER BY created_at DESC";
    db.query(query, callback);
};

const getBlogById = (id, callback) => {
    const query = "SELECT * FROM blogs WHERE id=?";
    db.query(query, [id], callback);
};

const createBlog = (data, callback) => {
    const query = `
        INSERT INTO blogs(title, content, author_name)
        VALUES (?, ?, ?)
    `;

    db.query(query, [
        data.title,
        data.content,
        data.author_name
    ], callback);
};

const updateBlog = (id, data, callback) => {
    const query = `
        UPDATE blogs
        SET title=?, content=?, author_name=?
        WHERE id=?
    `;

    db.query(query, [
        data.title,
        data.content,
        data.author_name,
        id
    ], callback);
};

const deleteBlog = (id, callback) => {
    const query = "DELETE FROM blogs WHERE id=?";
    db.query(query, [id], callback);
};

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};