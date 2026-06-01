// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import InfoPage from "../pages/infopage/InfoPage";

// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<InfoPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";

import InfoPage from "../pages/infopage/InfoPage";
import SignupPage from "../pages/signup/SignupPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<InfoPage />}
                />

                <Route
                    path="/signup"
                    element={<SignupPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}