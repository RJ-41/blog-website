const params =
    new URLSearchParams(window.location.search);

const id = params.get("id");

const form =
    document.getElementById("editForm");

async function loadBlog() {

    const response = await fetch(
        `http://localhost:3000/api/blogs/${id}`
    );

    const blog = await response.json();

    document.getElementById("title").value =
        blog.title;

    document.getElementById("author").value =
        blog.author_name;

    document.getElementById("content").value =
        blog.content;
}

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const title =
        document.getElementById("title").value;

    const author =
        document.getElementById("author").value;

    const content =
        document.getElementById("content").value;

    await fetch(
        `http://localhost:3000/api/blogs/${id}`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title,
                content,
                author_name: author
            })
        }
    );

    alert("Blog Updated");

    window.location.href =
        `blog-details.html?id=${id}`;
});

loadBlog();