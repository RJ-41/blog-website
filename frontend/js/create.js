const form = document.getElementById("blogForm");

const counter = document.getElementById("counter");

const content = document.getElementById("content");

const message = document.getElementById("message");

content.addEventListener("input", () => {

    counter.innerText =
        content.value.length + " Characters";
});

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const title =
        document.getElementById("title").value;

    const author =
        document.getElementById("author").value;

    const blogContent =
        content.value;

    if (title.length < 5) {

        message.innerText =
            "Title must be at least 5 characters";

        return;
    }

    if (blogContent.length < 50) {

        message.innerText =
            "Content must be at least 50 characters";

        return;
    }

    try {

        const response = await fetch(
            "http://localhost:3000/api/blogs",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title,
                    content: blogContent,
                    author_name: author
                })
            }
        );

        const data = await response.json();

        message.innerText = data.message;

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } catch (error) {

        message.innerText =
            "Failed to create blog";
    }
});