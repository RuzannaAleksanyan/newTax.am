import { BrowserRouter, Routes, Route } from "react-router-dom";

import InfoPage from "../pages/infopage/InfoPage";
import SignupPage from "../pages/signup/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ForgotPasswordPage from "../pages/forgotPassword/ForgotPasswordPage";

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

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}