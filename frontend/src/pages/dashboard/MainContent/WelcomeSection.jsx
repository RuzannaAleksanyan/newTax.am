export default function WelcomeSection() {

    const today = new Date().toLocaleDateString("hy-AM");

    return (
        <div className="welcome-section">

            <h1>Վահանակ</h1>

            <p>
                Բարի գալուստ NewTax.am 👋
            </p>

            <p>
                Այսօր՝ {today}
            </p>

        </div>
    );
}