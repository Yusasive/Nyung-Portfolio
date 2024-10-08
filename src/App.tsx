import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <ContactMe />
      <ContactForm />
      <Footer />
    </Router>
  );
};

export default App;
