import "./WelcomeSection.css";

export default function WelcomeSection() {
    const today = new Date().toLocaleDateString("hy-AM", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <section className="welcome-section">

            <div className="welcome-left">
                <span className="welcome-badge">
                    👋 Բարի վերադարձ
                </span>

                <h1>Վահանակ</h1>

                <p className="welcome-text">
                    Բարի գալուստ <strong>NewTax.am</strong>։
                    Այստեղ կարող եք կառավարել ձեր բիզնեսի
                    եկամուտները, ծախսերը, գործընկերներին և
                    հաշվապահական գործընթացները մեկ հարթակում։
                </p>
            </div>

            <div className="welcome-right">

                <div className="info-card">
                    <span className="label">
                        📅 Այսօր
                    </span>

                    <h3>{today}</h3>
                </div>

                <div className="info-card">
                    <span className="label">
                        💼 Ընթացիկ կարգավիճակ
                    </span>

                    <h3>Պատրաստ է աշխատանքի</h3>
                </div>

            </div>

        </section>
    );
}