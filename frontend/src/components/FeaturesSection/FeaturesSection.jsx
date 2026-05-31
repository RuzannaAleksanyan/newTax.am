import "./FeaturesSection.css";

export default function FeaturesSection() {
    return (
        <section className="features-section">

            <div className="features-header">

                <span>SMART TOOLS</span>

                <h2>
                    Ֆինանսական կառավարում
                    <br />
                    նոր մակարդակում
                </h2>

            </div>

            <div className="bento-grid">

                <div className="bento-card large">
                    <div className="emoji">💳</div>

                    <h3>Ծախսերի վերահսկում</h3>

                    <p>
                        Տեսեք բոլոր ծախսերը մեկ վայրում և
                        ստացեք խելացի վերլուծություններ։
                    </p>

                    {/* <div className="mini-chart"></div> */}
                </div>

                <div className="bento-card">
                    <div className="emoji">📈</div>

                    <h3>Եկամուտներ</h3>

                    <p>
                        Հետևեք աճին իրական ժամանակում։
                    </p>
                </div>

                <div className="bento-card">
                    <div className="emoji">📊</div>

                    <h3>Analytics</h3>

                    <p>
                        Խորքային ֆինանսական վերլուծություն։
                    </p>
                </div>

                <div className="bento-card wide">
                    <div className="emoji">⚡</div>

                    <h3>AI Օգնական</h3>

                    <p>
                        Առաջարկում է խնայողությունների
                        և ֆինանսական օպտիմալացման տարբերակներ։
                    </p>
                </div>

            </div>

        </section>
    );
}