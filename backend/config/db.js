const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "blog-db.c7i6w0uoubwd.ap-south-2.rds.amazonaws.com",
    user: "admin",
    password: "blog#1234",
    database: "blog_app"
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
    } else {
        console.log("MySQL Connected");
    }
});

module.exports = connection;
