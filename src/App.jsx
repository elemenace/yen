import Home from "./assets/Components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import About from "./assets/Components/About";
import Footer from "./assets/Components/Footer";
import Pictures from "./assets/Components/Pictures";
import Login from "./assets/Components/Login";
import Signup from "./assets/Components/Signup";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
