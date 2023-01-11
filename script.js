const blogPosts = [
  {
    title: "My first blog post",
    date: "January 1, 2023",
    author: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum purus a enim tincidunt, a porttitor leo convallis. Sed auctor ligula quis consectetur condimentum. Donec efficitur euismod dolor, id fringilla mi. Nam viverra dui in dui tincidunt, vel porttitor nisl euismod. Fusce id sollicitudin quam. Mauris auctor ex a elit aliquam, eu euismod odio eleifend. Nunc suscipit felis vel est tincidunt, vel ultricies lacus ullamcorper. Aliquam id lectus vel diam suscipit euismod et id diam. Sed malesuada sollicitudin dictum. Morbi ac purus eget nisi faucibus efficitur id a nisi.",
    comments: [
      {
        author: "Jane Doe",
        date: "January 2, 2023",
        content: "Great post! I really enjoyed reading it."
      },
      {
        author: "Bob Smith",
        date: "January 3, 2023",
        content: "I totally agree with your thoughts on this topic. Well written!"
      }
    ]
  },
  {
    title: "The importance of exercise",
    date: "January 5, 2023",
    author: "Jane Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum purus a enim tincidunt, a porttitor leo convallis. Sed auctor ligula quis consectetur condimentum. Donec efficitur euismod dolor, id fringilla mi. Nam viverra dui in dui tincidunt, vel porttitor nisl euismod. Fusce id sollicitudin quam. Mauris auctor ex a elit aliquam, eu euismod odio eleifend. Nunc suscipit felis vel est tincidunt, vel ultricies lacus ullamcorper. Aliquam id lectus vel diam suscipit euismod et id diam. Sed malesuada sollicitudin dictum. Morbi ac purus eget nisi faucibus efficitur id a nisi.",
    comments: [
     
      {
        author: "John Doe",
        date: "January 6, 2023",
        content: "I completely agree with you. Exercise is so important for both physical and mental health."
      },
      {
        author: "Bob Smith",
        date: "January 7, 2023",
        content: "I've been trying to make a habit of exercising regularly, and it has made such a difference in my energy levels and overall well-being."
      }
    ]
  },
  {
    title: "Eating a healthy diet is important for maintaining overall health and well-being. It can help to prevent a range of health issues, such as obesity, heart disease, and high blood pressure. But with so much information out there about what is and isn't healthy, it can be difficult to know where to start",
    date: "January 5, 2023",
    author: "Faduma Ibrahim",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum purus a enim tincidunt, a porttitor leo convallis. Sed auctor ligula quis consectetur condimentum. Donec efficitur euismod dolor, id fringilla mi. Nam viverra dui in dui tincidunt, vel porttitor nisl euismod. Fusce id sollicitudin quam. Mauris auctor ex a elit aliquam, eu euismod odio eleifend. Nunc suscipit felis vel est tincidunt, vel ultricies lacus ullamcorper. Aliquam id lectus vel diam suscipit euismod et id diam. Sed malesuada sollicitudin dictum. Morbi ac purus eget nisi faucibus efficitur id a nisi.",
    comments: [
     
      {
        author: "John Doe",
        date: "January 6, 2023",
        content: "I completely agree with you. Exercise is so important for both physical and mental health."
      },
      {
        author: "Bob Smith",
        date: "January 7, 2023",
        content: "I've been trying to make a habit of exercising regularly, and it has made such a difference in my energy levels and overall well-being."
      }
    ]
  }
  
  
];

// Function to render a single blog post
function renderPost(post) {
  // Create a container element for the post
  const postEl = document.createElement("div");
  postEl.classList.add("blog-post");

  // Add the post's title
  const titleEl = document.createElement("h2");
  titleEl.textContent = post.title;
  postEl.appendChild(titleEl);

  // Add the post's date
  const dateEl = document.createElement("div");
  dateEl.classList.add("date");
  dateEl.textContent = post.date;
  postEl.appendChild(dateEl);

  // Add the post's author
  const authorEl = document.createElement("div");
  authorEl.classList.add("author");
  authorEl.textContent = `by ${post.author}`;
  postEl.appendChild(authorEl);

  // Add the post's content
  const contentEl = document.createElement("p");
  contentEl.textContent = post.content;
  postEl.appendChild(contentEl);

  // Create a container element for the comments
  const commentsEl = document.createElement("div");
  commentsEl.classList.add("comments");
  postEl.appendChild(commentsEl);

  // Add a heading for the comments
  const commentsHeadingEl = document.createElement("h3");
  commentsHeadingEl.textContent = "Comments";
  commentsEl.appendChild(commentsHeadingEl);

  // Create a list element to hold the comments
  const commentsListEl = document.createElement("div");
  commentsListEl.classList.add("comments-list");
  commentsEl.appendChild(commentsListEl);

  // Add the comments to the list
  for (const comment of post.comments) {
    const commentEl = renderComment(comment);
    commentsListEl.appendChild(commentEl);
  }

  // Return the post element
  return postEl;
}

// Function to render a single comment
function renderComment(comment) {
  // Create a container element for the comment
  const commentEl = document.createElement("div");
  commentEl.classList.add("comment");

  // Add the comment's author
  const authorEl = document.createElement("div");
  authorEl.classList.add("author");
  authorEl.textContent = `by ${comment.author}`;
  commentEl.appendChild(authorEl);

  // Add the comment's date
  const dateEl = document.createElement("div");
  dateEl.classList.add("date");
  dateEl.textContent = comment.date;
  commentEl.appendChild(dateEl);

  // Add the comment's content
  const contentEl = document.createElement("p");
  contentEl.textContent = comment.content;
  commentEl.appendChild(contentEl);

  // Return the comment element
  return commentEl;
}

// Function to render all blog posts
function renderPosts() {
  // Get the blog post container element
  const blogPostContainer = document.getElementById("blog-posts");

  // Clear the container
  blogPostContainer.innerHTML = "";

  // Render all blog posts
  for (const post of blogPosts) {
    const postEl = renderPost(post);
    blogPostContainer.appendChild(postEl);
  }
}

// Render all blog posts when the page loads
renderPosts();

