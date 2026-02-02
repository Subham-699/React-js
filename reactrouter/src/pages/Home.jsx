const Home = () => {
  return (
    <div className="sectionStyle" >
      {/* Hero Header */}
      <header className="heroStyle" >
        <h1 style={{ fontSize: "2.8rem", margin: "0 0 10px 0" }}>React Router Mastery</h1>
        <p style={{ fontSize: "1.2rem", opacity: "0.9" }}>
          The Essential Guide to Declarative Routing for React Applications
        </p>
      </header>

      {/* Main Content */}
      <section>
        <h2>Welcome to the Router Showcase</h2>
        <p>
          This application is a live demonstration of how <strong>React Router v6</strong> manages
          the synchronization between the browser URL and the User Interface. Instead of
          requesting new HTML files from a server, we intercept URL changes to render
          components locally.
        </p>

        <div className="featureGrid" >
          <div className="cardStyle" >
            <h3 style={{ color: "#ae3bb4" }}>⚡ Client-Side Routing</h3>
            <p style={{color:"white"}}>Experience lightning-fast transitions. No page reloads, just smooth component swapping.</p>
          </div>

          <div className="cardStyle" >
            <h3 style={{ color: "#ae3bb4" }}>🛠️ Declarative API</h3>
            <p style={{color:"white"}}>Define your application paths using simple JSX components like Routes and Route.</p>
          </div>

          <div className="cardStyle" >
            <h3 style={{ color: "#ae3bb4" }}>🔗 Link Navigation</h3>
            <p style={{color:"white"}}>Use the Link 
              component to navigate without breaking the application state.</p>
          </div>
        </div>
      </section>

      {/* Learning Path Notice */}
      <div className="pathNotice">
        <h4>How to use this app:</h4>
        <p>
          Click through the <strong>About</strong>, <strong>Blog</strong>, and <strong>Contact</strong> links
          in the navigation bar above. Notice how the URL in your address bar updates
          instantly while the header and footer remain static—that is the power of React Router!
        </p>
      </div>
    </div>
  );
};

export default Home;