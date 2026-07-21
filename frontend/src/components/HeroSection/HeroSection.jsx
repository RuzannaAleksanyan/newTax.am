import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {

    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-left">

                <h1>
                    Ֆինանսների և բիզնեսի
                    <span> կառավարման հարթակ</span>
                </h1>

                <div className="badge">
                    🚀 Նոր սերնդի ֆինանսական հարթակ
                </div>

                <p>
                    Մեր հարթակը նախատեսված է օգնելու
                    օգտատերերին հեշտությամբ վերահսկել
                    եկամուտները, ծախսերը և ֆինանսական
                    գործարքները մեկ վայրում։
                </p>

                <div className="buttons">

                    <button
                        className="btn-primary"
                        onClick={() => navigate("/login")}
                    >
                        Սկսել աշխատանքը
                    </button>


                    <button
                        className="btn-secondary"
                        onClick={() => navigate("/signup")}
                    >
                        Գրանցվել հիմա
                    </button>

                </div>

            </div>
        </section>
    );
}