const express = require("express");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
    res.send("Blog API Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});