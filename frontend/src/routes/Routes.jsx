import { BrowserRouter, Routes, Route } from "react-router-dom";

import InfoPage from "../pages/infopage/InfoPage";
import SignupPage from "../pages/signup/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ForgotPasswordPage from "../pages/forgotPassword/ForgotPasswordPage";
import Dashboard from "../pages/dashboard/Dashboard";
import BusinessRegistration from "../pages/BusinessRegistration/BusinessRegistration";  
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AddIncome from "../pages/transactions/AddIncome";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<InfoPage />} />

                <Route path="/signup" element={<SignupPage />} />

                <Route path="/login" element={<LoginPage />} />

                <Route path="/business-registration" element={<BusinessRegistration />} />
                
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                {/* 🔐 PROTECTED ROUTE */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                            {/* <AddIncome /> */}
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/add-income"
                    element={
                        <ProtectedRoute>
                            <AddIncome />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}