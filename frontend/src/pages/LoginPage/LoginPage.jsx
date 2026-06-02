import "./LoginPage.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export default function LoginPage() {
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