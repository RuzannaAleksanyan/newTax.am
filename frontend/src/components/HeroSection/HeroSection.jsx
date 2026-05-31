import "./HeroSection.css";

export default function HeroSection() {
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
                    <button className="btn-primary">
                        Սկսել աշխատանքը
                    </button>

                    <button className="btn-secondary">
                        Գրանցվել հիմա
                    </button>
                </div>
            </div>
        </section>
    );
}