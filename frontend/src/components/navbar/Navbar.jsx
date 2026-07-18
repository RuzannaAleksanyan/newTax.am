import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../public/logo.png";

export default function Navbar() {
    const [language, setLanguage] = useState("Հայ");

    const toggleLanguage = () => {
        setLanguage(prev =>
            prev === "Հայ" ? "ENG" : "Հայ"
        );
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, []);

    return (
        <nav
            className={
                scrolled
                    ? "navbar scrolled"
                    : "navbar"
            }
        >

            <Link to="/" className="logo">
                {/* Tax.am */}
                <img src={logo} alt="Tax.am Logo" className="logo-image" />
            </Link>

            <div className="nav-buttons">
                <button
                    className="language-btn"
                    onClick={toggleLanguage}
                >
                    🌐 {language}
                </button>

                <Link
                    to="/login"
                    className="login-btn"
                >
                    Login
                </Link>

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