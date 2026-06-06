import "./LoginPage.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const login = async () => {
        const formData = new URLSearchParams();
        formData.append("username", email);
        formData.append("password", password);

        const res = await fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.detail);
            return;
        }

        localStorage.setItem("token", data.access_token);
        setSuccess("Logged in!");
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

                <p>
                    Մուտք գործեք ձեր NewTax.am հաշիվ
                </p>

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Գաղտնաբառ"
                />

                <button>
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