import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoPage from "../infopage/InfoPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}