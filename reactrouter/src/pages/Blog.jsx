const Blog = () => {
  return (
    <div className="blogContainerStyle">
      <article className="articleStyle">
        <span className="tagStyle">Development</span>
        <h2 style={{ margin: "10px 0" }}>Mastering React Router v6</h2>
        <p style={{ color: "#444" }}>
          Learn how to handle navigation like a pro. We explore nested routes,
          protected layouts, and the power of the useNavigate hook in modern web apps.
        </p>
        <small style={{ color: "#999" }}>February 1, 2026 • 5 min read</small>
      </article>

      <article className="articleStyle">
        <span className="tagStyle">Artificial Intelligence</span>
        <h2 style={{ margin: "10px 0" }}>The Rise of Agentic AI</h2>
        <p style={{ color: "#444" }}>
          AI is moving beyond simple chat. Explore how autonomous agents are
          refining the way we write code and manage complex software architectures.
        </p>
        <small style={{ color: "#999" }}>January 28, 2026 • 8 min read</small>
      </article>
    </div>
  );
};

export default Blog;