import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Questions from "./pages/Questions";
import MentionLegal from "./pages/MentionLegal";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="questions-frequentes" element={<Questions />} />
        <Route path="mention-legales" element={<MentionLegal />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
