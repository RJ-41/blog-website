const container =
    document.getElementById("blogDetails");

const params =
    new URLSearchParams(window.location.search);

const id = params.get("id");

async function fetchBlog() {

    try {

        const response = await fetch(
            `http://localhost:3000/api/blogs/${id}`
        );

        const blog = await response.json();

        container.innerHTML = `
        
            <h1>${blog.title}</h1>

            <div class="blog-meta">

                <h4>
                    By ${blog.author_name || "Unknown"}
                </h4>

                <small>
                    Published On:
                    ${new Date(blog.created_at)
                        .toLocaleDateString()}
                </small>

            </div>

            <div class="blog-content">

                <p>
                    ${blog.content.replace(/\n/g, "<br>")}
                </p>

            </div>

            <div class="action-buttons">

                <a
                    href="edit-blog.html?id=${blog.id}"
                    class="create-btn"
                >
                    Edit Blog
                </a>

                <button onclick="deleteBlog()">
                    Delete Blog
                </button>

            </div>
        `;

    } catch (error) {

        container.innerHTML = `
            <h2>Failed to Load Blog</h2>
        `;
    }
}

async function deleteBlog() {

    const confirmDelete =
        confirm("Are you sure you want to delete this blog?");

    if (!confirmDelete) return;

    try {

        await fetch(
            `http://localhost:3000/api/blogs/${id}`,
            {
                method: "DELETE"
            }
        );

        alert("Blog Deleted Successfully");

        window.location.href = "index.html";

    } catch (error) {

        alert("Failed To Delete Blog");
    }
}

fetchBlog();