const blogContainer = document.getElementById("blogContainer");

const searchInput = document.getElementById("searchInput");

let allBlogs = [];

async function fetchBlogs() {

    try {

        blogContainer.innerHTML = "<p>Loading blogs...</p>";

        const response = await fetch(
            "http://localhost:3000/api/blogs"
        );

        const blogs = await response.json();

        allBlogs = blogs;

        displayBlogs(blogs);

    } catch (error) {

        blogContainer.innerHTML =
            "<p>Failed to load blogs</p>";

    }
}

function displayBlogs(blogs) {

    if (blogs.length === 0) {

        blogContainer.innerHTML =
            "<h2>No Blogs Found</h2>";

        return;
    }

    blogContainer.innerHTML = "";

    blogs.forEach(blog => {

        const card = document.createElement("div");

        card.classList.add("blog-card");

        card.innerHTML = `
            <h2>${blog.title}</h2>

            <p>
                ${blog.content.substring(0, 100)}...
            </p>

            <small>
                ${new Date(blog.created_at)
                    .toLocaleDateString()}
            </small>

            <br><br>

            <a href="blog-details.html?id=${blog.id}"
                class="read-btn">
                Read More
            </a>
        `;

        blogContainer.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {

    const value =
        searchInput.value.toLowerCase();

    const filteredBlogs = allBlogs.filter(blog =>
        blog.title.toLowerCase().includes(value)
    );

    displayBlogs(filteredBlogs);
});

fetchBlogs();