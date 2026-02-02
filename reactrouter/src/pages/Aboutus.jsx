const Aboutus = () => {
  return (
    <div className="containerStyle" >
      <h1 style={{ color: "#ae3bb4", textAlign: "center" }}>About React Router</h1>

      <p style={{ fontSize: "1.2rem", textAlign: "center", color: "#a9a3a3" }}>
        The standard library for routing in React applications.
      </p>

      <div className="highlightBox">
        <h3>What is React Router?</h3>
        <p>
          React Router is a lightweight, fully-featured routing library for the React
          JavaScript library. It allows us to build <strong>Single Page Applications (SPA)</strong>
          with navigation that feels like a traditional multi-page website, but without
          the refreshing delays.
        </p>
      </div>

      <h2 style={{color: "#ffffff"}}>Core Concepts Used in This App</h2>
      <ul className="listStyle">
        <li className="itemStyle">
          <strong>📍 BrowserRouter:</strong> The parent component that stores the current location
          and keeps your UI in sync with the URL.
        </li>
        <li className="itemStyle">
          <strong>🛤️ Routes & Route:</strong> These define the mapping between a specific URL path
          (like /contact) and the component that should be displayed.
        </li>
        <li className="itemStyle">
          <strong>🔗 Link:</strong> Unlike a standard anchor tag, the Link component changes
          the URL without reloading the entire page, preserving the React state.
        </li>
        <li className="itemStyle" >
          <strong>🔄 Dynamic UI:</strong> By using routing, we can conditionally render
          Home, About, Blog, or Contact views while keeping the Navbar and Footer static.
        </li>
      </ul>

      <p style={{ marginTop: "30px", fontStyle: "italic", color: "#888", textAlign: "center" }}>
        "In a Single Page Application, the page never dies; it just changes clothes."
      </p>
    </div>
  );
};

export default Aboutus;