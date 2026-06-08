import { useState } from "react";
import "./LoginPage.css";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const login = async () => {
        setError("");
        setSuccess("");

        try {
            const res = await fetch("http://127.0.0.1:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.detail || "Login failed");
                return;
            }

            localStorage.setItem("token", data.access_token);
            setSuccess("Մուտքը հաջողվեց");

            navigate("/profile");

        } catch (err) {
            setError("Սերվերի սխալ");
        }
    };

    const getProfile = async () => {
        const token = localStorage.getItem("token");

        const res = await fetch("http://127.0.0.1:8000/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await res.json();
        console.log(data);
    };

    return (
        <div className="login-page">

            <Navbar />

            <div className="login-card">

                <h1>Մուտք գործել</h1>

                <p>Մուտք գործեք ձեր NewTax.am հաշիվ</p>

                {error && <div className="error-box">{error}</div>}
                {success && <div className="success-box">{success}</div>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Գաղտնաբառ"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={login}>
                    Մուտք գործել
                </button>

                <div className="login-links">

                    <Link to="/forgot-password">
                        Մոռացե՞լ եք գաղտնաբառը
                    </Link>

                    <p>
                        Չունե՞ք հաշիվ։
                        <Link to="/signup">
                            Գրանցվել
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
}