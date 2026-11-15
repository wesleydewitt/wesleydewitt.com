// App.jsx
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import EssayPage from "./pages/EssayPage.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/essays/:slug" element={<EssayPage />} />
        </Routes>
    );
}
