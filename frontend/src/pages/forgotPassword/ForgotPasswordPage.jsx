import "./ForgotPasswordPage.css";
import Navbar from "../../components/navbar/Navbar";

export default function ForgotPasswordPage() {
    return (
        <div className="forgot-page">

            <Navbar />

            <div className="forgot-card">

                <h1>
                    Վերականգնել գաղտնաբառը
                </h1>

                <p>
                    Մուտքագրեք ձեր email հասցեն,
                    և մենք կուղարկենք
                    վերականգնման հղում։
                </p>

                <input
                    type="email"
                    placeholder="Email"
                />

                <button>
                    Ուղարկել հղումը
                </button>

            </div>

        </div>
    );
}