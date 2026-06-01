import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
    const [language, setLanguage] = useState("Հայ");

    const toggleLanguage = () => {
        setLanguage(prev =>
            prev === "Հայ" ? "ENG" : "Հայ"
        );
    };

    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                Tax.am
            </Link>

            <div className="nav-buttons">
                <button
                    className="language-btn"
                    onClick={toggleLanguage}
                >
                    🌐 {language}
                </button>

                <button className="login-btn">
                    Login
                </button>

                <Link
                    to="/signup"
                    className="signup-btn"
                >
                    Sign Up
                </Link>

            </div>

        </nav>
    );
}