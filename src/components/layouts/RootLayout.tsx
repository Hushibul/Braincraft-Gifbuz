import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import ComunityGuidelines from "../../pages/ComunityGuidelines";
import CopyrightPolicy from "../../pages/CopyrightPolicy";
import CreateGif from "../../pages/CreateGif";
import FrequentlyAsked from "../../pages/FrequentlyAsked";
import Home from "../../pages/Home";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import TermOfServices from "../../pages/TermOfServices";
import UploadGif from "../../pages/UploadGif";
import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms-of-service" element={<TermOfServices />} />
          <Route path="/comunity-guidelines" element={<ComunityGuidelines />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/copyright-policy" element={<CopyrightPolicy />} />
          <Route path="/faq" element={<FrequentlyAsked />} />
          <Route path="/create" element={<CreateGif />} />
          <Route path="/upload" element={<UploadGif />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default RootLayout;
