import "./ExchangeSection.css";

export default function ExchangeSection() {
    return (
        <section className="exchange-section">

            <div className="exchange-content">

                <div className="exchange-text">

                    <span className="section-tag">
                        💱 Արժույթի փոխարժեքներ
                    </span>

                    <h2>
                        Հետևեք փոխարժեքներին
                        իրական ժամանակում
                    </h2>

                    <p>
                        Ստացեք արդիական տվյալներ տարբեր արժույթների
                        փոխարժեքների վերաբերյալ, համեմատեք
                        ցուցանիշները և կատարեք արագ հաշվարկներ
                        միջազգային գործարքների համար։
                    </p>

                    <ul>
                        <li>✓ USD, EUR, RUB և այլ արժույթներ</li>
                        <li>✓ Օրական թարմացվող տվյալներ</li>
                        <li>✓ Արագ արժութային հաշվարկներ</li>
                        <li>✓ Պատմական տվյալների դիտում</li>
                    </ul>

                </div>

                <div className="exchange-preview">

                    <div className="currency-box">
                        <h3>USD/AMD</h3>
                        <span>386.42</span>
                    </div>

                    <div className="currency-box">
                        <h3>EUR/AMD</h3>
                        <span>419.87</span>
                    </div>

                    <div className="currency-box">
                        <h3>RUB/AMD</h3>
                        <span>4.81</span>
                    </div>

                </div>

            </div>

        </section>
    );
}