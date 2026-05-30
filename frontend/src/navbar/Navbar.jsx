import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                NewTax.am
            </div>

            <div className="nav-buttons">

                <button className="login-btn">
                    Login
                </button>

                <button className="signup-btn">
                    Sign Up
                </button>

            </div>

        </nav>
    );
}