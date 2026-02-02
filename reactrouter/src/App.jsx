import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Contact from "./pages/ContactUs";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="navContainerStyle">
        <Link className="linkStyle" to="/">
          Home
        </Link>
        <Link className="linkStyle" to="/about">
          About Us
        </Link>
        <Link className="linkStyle" to="/blog">
          Blog
        </Link>
        <Link className="linkStyle" to="/contact">
          Contact Us
        </Link>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;