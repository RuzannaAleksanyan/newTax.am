import "./FeaturesSection.css";

export default function FeaturesSection() {
    return (
        <section className="features-section">

            <div className="features-header">
                <h2>
                    Հզոր գործիքներ ձեր ֆինանսների
                    <span> արդյունավետ կառավարման համար</span>
                </h2>

                <p>
                    Մեր հարթակը տրամադրում է բոլոր անհրաժեշտ
                    գործիքները՝ ֆինանսական գործընթացների հետ կապը պարզեցնելու
                    և վերահսկելու համար։
                </p>
            </div>

            <div className="features-grid">

                <div className="feature-card">
                    <div className="feature-icon">💳</div>

                    <h3>Ծախսերի վերահսկում</h3>

                    <p>
                        Հետևեք ձեր ամենօրյա, ամսական և տարեկան ծախսերին,
                        վերլուծեք ֆինանսական հոսքերը և բացահայտեք այն
                        ոլորտները, որտեղ հնարավոր է ավելի արդյունավետ
                        կառավարել բյուջեն։
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">📈</div>

                    <h3>Եկամուտների կառավարում</h3>

                    <p>
                        Կենտրոնացրեք եկամուտների բոլոր աղբյուրները մեկ
                        հարթակում, հետևեք դրանց աճին և գնահատեք ձեր
                        ֆինանսական արդյունավետությունը։
                    </p>
                </div>

            </div>

        </section>
    );
}