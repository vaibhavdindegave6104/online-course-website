import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 
import Home from "./pages/Home";
import About from "./pages/About";
import LMS from "./pages/LMS";
import VideoLessons from "./pages/VideoLessons";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";

 
function App() {
  return (
    <BrowserRouter>
      <Navbar />
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lms" element={<LMS />} />
        <Route path="/videos" element={<VideoLessons />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
 
      <Footer />
    </BrowserRouter>
  );
}
 
export default App;
