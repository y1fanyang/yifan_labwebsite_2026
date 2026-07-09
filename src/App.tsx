import { Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Research from "@/pages/Research";
import Publications from "@/pages/Publications";
import People from "@/pages/People";
import Teaching from "@/pages/Teaching";
import News from "@/pages/News";
import Contact from "@/pages/Contact";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/people" element={<People />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
