import "./SignupPage.css";
import Navbar from "../../components/navbar/Navbar";

export default function SignupPage() {
    return (
        <div className="signup-page">
            <Navbar />

            <div className="signup-card">

                <h1>Ստեղծել հաշիվ</h1>

                <p>
                    Միացեք NewTax.am հարթակին
                </p>

                <input
                    type="text"
                    placeholder="Անուն"
                />

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Գաղտնաբառ"
                />

                <input
                    type="password"
                    placeholder="Կրկնել գաղտնաբառը"
                />

                <button>
                    Գրանցվել
                </button>

            </div>

        </div>
    );
}