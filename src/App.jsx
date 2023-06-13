import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookLibrary from "./components/bookLibrary/BookLibrary";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/contactUs/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BookLibrary />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        
      </Routes>
    </Router>
  );
}

export default App;
