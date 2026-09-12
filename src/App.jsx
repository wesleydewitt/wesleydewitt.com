// App.jsx
import { useLocation, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const location = useLocation();
  const isEssayPage = location.pathname.startsWith("/essays/");

  return (
    <div className={`page ${isEssayPage ? "page--essay" : ""}`}>
      <Header isIndexPage={location.pathname === "/"} />

      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/* <Route path="/essays/:slug" element={<EssayPage />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}
