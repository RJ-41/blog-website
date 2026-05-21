const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nani123@",
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