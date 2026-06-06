import { useState } from "react";
import "./SignupPage.css";
import Navbar from "../../components/navbar/Navbar";

export default function SignupPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError("Գաղտնաբառերը չեն համընկնում");
            return;
        }
        setError("");
        setSuccess("");

        try {
            const response = await fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    confirm_password: confirmPassword
                })
            });

            const data = await response.json();

            if (!response.ok) {
                const errorMsg =
                    typeof data.detail === "string"
                        ? data.detail
                        : Array.isArray(data.detail)
                            ? data.detail.map(e => e.msg).join(", ")
                            : "Սխալ գրանցման ընթացքում";

                setError(errorMsg);
                return;
            }

            setSuccess(data.message);

        }
        catch (error) {
            setError("Սերվերի սխալ։ Փորձիր կրկին։");
        }
    };

    return (
        <div className="signup-page">
            <Navbar />

            <div className="signup-card">

                <h1>Ստեղծել հաշիվ</h1>

                {error && (
                    <div className="error-box">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="success-box">
                        {success}
                    </div>
                )}

                <p>Միացեք NewTax.am հարթակին</p>

                <input
                    type="text"
                    placeholder="Անուն"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

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

                <input
                    type="password"
                    placeholder="Կրկնել գաղտնաբառը"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button onClick={handleSignup}>
                    Գրանցվել
                </button>

            </div>
        </div>
    );
}