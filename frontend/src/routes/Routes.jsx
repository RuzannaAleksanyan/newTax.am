// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import InfoPage from "../pages/infopage/InfoPage";
// import SignupPage from "../pages/signup/SignupPage";
// import LoginPage from "../pages/LoginPage/LoginPage";
// import ForgotPasswordPage from "../pages/forgotPassword/ForgotPasswordPage";

// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// import ProfilePage from "../pages/profile/ProfilePage";

// export default function AppRoutes() {
//     return (
//         <BrowserRouter>

//             <Routes>

//                 <Route
//                     path="/"
//                     element={<InfoPage />}
//                 />

//                 <Route
//                     path="/signup"
//                     element={<SignupPage />}
//                 />

//                 <Route
//                     path="/login"
//                     element={<LoginPage />}
//                 />

//                 <Route
//                     path="/forgot-password"
//                     element={<ForgotPasswordPage />}
//                 />

//                 <Route
//                     path="/profile"
//                     element={
//                         <ProtectedRoute>
//                             <ProfilePage />
//                         </ProtectedRoute>
//                     }
//                 />

//             </Routes>

//         </BrowserRouter>
//     );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";

import InfoPage from "../pages/infopage/InfoPage";
import SignupPage from "../pages/signup/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ForgotPasswordPage from "../pages/forgotPassword/ForgotPasswordPage";
import ProfilePage from "../pages/profile/ProfilePage";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<InfoPage />} />

                <Route path="/signup" element={<SignupPage />} />

                <Route path="/login" element={<LoginPage />} />

                <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                {/* 🔐 PROTECTED ROUTE */}
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}