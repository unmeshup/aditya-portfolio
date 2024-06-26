import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ProjectDisplay from "./pages/ProjectDisplay";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
