import "./InfoPage.css";

import Navbar from "../navbar/Navbar";

export default function InfoPage() {
    return (
        <div className="home">
            <Navbar />

            {/* HERO */}
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

            {/* WHAT WE DO */}

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

                    {/* <div className="feature-card">
                        <div className="feature-icon">💱</div>

                        <h3>Արժույթի փոխարժեքներ</h3>

                        <p>
                            Դիտեք արդի փոխարժեքները և
                            կատարեք հաշվարկներ տարբեր արժույթներով։
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📊</div>

                        <h3>Հաշվետվություններ</h3>

                        <p>
                            Ստացեք պարզ և հասկանալի
                            հաշվետվություններ ձեր ֆինանսական վիճակի մասին։
                        </p>
                    </div> */}

                </div>

            </section>

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

            <section className="reports-section">

                <div className="reports-content">

                    <div className="reports-preview">

                        <div className="report-card">
                            <h3>Ֆինանսական ամփոփում</h3>

                            <p>Եկամուտներ</p>
                            <strong>2,450,000 ֏</strong>

                            <p>Ծախսեր</p>
                            <strong>1,320,000 ֏</strong>
                        </div>

                    </div>

                    <div className="reports-text">

                        <span className="section-tag">
                            📊 Հաշվետվություններ
                        </span>

                        <h2>
                            Պարզ և հասկանալի
                            ֆինանսական վերլուծություն
                        </h2>

                        <p>
                            Ստացեք մանրամասն հաշվետվություններ ձեր
                            բիզնեսի կամ անձնական ֆինանսների վերաբերյալ։
                            Վերլուծեք եկամուտները, ծախսերը, շահույթը և
                            կայացրեք ավելի հիմնավորված որոշումներ։
                        </p>

                        <ul>
                            <li>✓ Եկամուտների հաշվետվություններ</li>
                            <li>✓ Ծախսերի վերլուծություն</li>
                            <li>✓ Շահույթի հաշվարկ</li>
                            <li>✓ PDF և Excel արտահանում</li>
                        </ul>

                    </div>

                </div>

            </section>

            {/* FEATURES */}

            <section className="advantages">

                <div className="advantages-header">

                    <span className="advantages-badge">
                        Մեր առավելությունները
                    </span>

                    <h2>
                        Ինչու են մեզ ընտրում
                        <span> մեր օգտատերերը</span>
                    </h2>

                    <p>
                        Ժամանակակից տեխնոլոգիաներ, անվտանգություն և
                        ճկուն գործիքներ՝ ձեր ֆինանսների արդյունավետ
                        կառավարման համար։
                    </p>

                </div>

                <div className="advantages-grid">

                    <div className="advantage-card">

                        <div className="advantage-number">
                            01
                        </div>

                        <h3>Իրական ժամանակի տվյալներ</h3>

                        <p>
                            Տեղեկատվությունը թարմացվում է անմիջապես և
                            հասանելի է ցանկացած պահի։
                        </p>

                    </div>

                    <div className="advantage-card">

                        <div className="advantage-number">
                            02
                        </div>

                        <h3>Անվտանգ մուտք</h3>

                        <p>
                            Օգտատերերի տվյալները պաշտպանված են
                            ժամանակակից անվտանգության մեխանիզմներով։
                        </p>

                    </div>

                    <div className="advantage-card">

                        <div className="advantage-number">
                            03
                        </div>

                        <h3>Բազմարժութային աջակցություն</h3>

                        <p>
                            Համակարգը թույլ է տալիս աշխատել
                            տարբեր արժույթներով։
                        </p>

                    </div>

                    <div className="advantage-card">

                        <div className="advantage-number">
                            04
                        </div>

                        <h3>Վերլուծական գործիքներ</h3>

                        <p>
                            Հետևեք ձեր ֆինանսական ցուցանիշներին և
                            կայացրեք ավելի հիմնավորված որոշումներ։
                        </p>

                    </div>

                </div>

            </section>

            {/* SERVICES */}
            <section className="section">
                <h2>Մեր ծառայությունները</h2>

                <div className="cards">
                    <div className="card">
                        <div className="icon">🏢</div>
                        <h3>Բիզնեսի գրանցում</h3>
                        <p>ՍՊԸ, ԱՁ և այլ կազմակերպությունների գրանցման աջակցություն։</p>
                    </div>

                    <div className="card">
                        <div className="icon">📊</div>
                        <h3>Ֆինանսական հաշվապահություն</h3>
                        <p>Հաշվետվությունների պատրաստում և վերլուծություն։</p>
                    </div>

                    <div className="card">
                        <div className="icon">💰</div>
                        <h3>Հարկային ծառայություններ</h3>
                        <p>Հարկային հաշվարկներ և խորհրդատվություն։</p>
                    </div>

                    <div className="card">
                        <div className="icon">📚</div>
                        <h3>Հաշվապահական հաշվառում</h3>
                        <p>Օրական հաշվապահական գործառույթների իրականացում։</p>
                    </div>

                    <div className="card">
                        <div className="icon">🔍</div>
                        <h3>Աուդիտ</h3>
                        <p>Ներքին և արտաքին աուդիտի ծառայություններ։</p>
                    </div>

                    <div className="card">
                        <div className="icon">👨‍💼</div>
                        <h3>Աշխատավարձի կառավարում</h3>
                        <p>Աշխատավարձերի հաշվարկ և աշխատակիցների տվյալների կառավարում։</p>
                    </div>

                    <div className="card">
                        <div className="icon">🧾</div>
                        <h3>ԱՁ հաշվապահություն</h3>
                        <p>Անհատ ձեռնարկատերերի համար հաշվապահական ամբողջական սպասարկում։</p>
                    </div>

                    <div className="card">
                        <div className="icon">🏛️</div>
                        <h3>ՍՊԸ հաշվապահություն</h3>
                        <p>ՍՊԸ-ների հաշվապահական և հարկային սպասարկում։</p>
                    </div>

                    <div className="card">
                        <div className="icon">📈</div>
                        <h3>ՓԲԸ հաշվապահություն</h3>
                        <p>ՓԲԸ-ների ֆինանսական և հաշվապահական կառավարում։</p>
                    </div>
                </div>
            </section>

            {/* SECTORS */}
            <section className="section light">
                <h2>Ոլորտներ</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">🏦</div>
                        <h3>Բանկային ծառայություններ և ֆինանսներ</h3>
                        <p> Այս ոլորտը ներառում է բանկեր, վարկային կազմակերպություններ և ներդրումային ընկերություններ։ </p>
                    </div>

                    <div className="card">
                        <div className="icon">📡</div>
                        <h3>Ցանցային ծառայություններ</h3>
                        <p> Ներառում է ինտերնետ, բջջային կապ և կապի այլ ծառայություններ։ </p>
                    </div>

                    <div className="card">
                        <div className="icon">💻</div>
                        <h3>ՏՏ ոլորտ</h3>
                        <p> Ծրագրավորում, արհեստական բանականություն և թվային լուծումներ։ </p>
                    </div>

                    <div className="card">
                        <div className="icon">🏥</div>
                        <h3>Առողջապահություն</h3>
                        <p> Հիվանդանոցներ, դեղագործություն և բժշկական ծառայություններ։ </p>
                    </div>

                    <div className="card">
                        <div className="icon">🏠</div>
                        <h3>Անշարժ գույք</h3>
                        <p> Բնակարանների, գրասենյակների և հողատարածքների առքուվաճառք։ </p>
                    </div>

                    <div className="card">
                        <div className="icon">🛒</div>
                        <h3>Առևտուր</h3>
                        <p> Ապրանքների գնում և վաճառք՝ մանրածախ և մեծածախ մակարդակներում։ </p>
                    </div>

                    <div className="card">
                        <div className="icon">🛡️</div>
                        <h3>Ապահովագրություն</h3>
                        <p> Ֆինանսական ռիսկերի նվազեցման ապահովագրական ծառայություններ։ </p>
                    </div>

                    <div className="card">
                        <div className="icon">⚡</div>
                        <h3>Էներգետիկա</h3>
                        <p> Էլեկտրաէներգիայի և այլ էներգետիկ ռեսուրսների արտադրություն։ </p>
                    </div>
                    <div className="card">
                        <div className="icon">🏗️</div>
                        <h3>Շինարարություն</h3>
                        <p> Շենքերի և ենթակառուցվածքների կառուցման ծառայություններ։ </p>
                    </div>
                </div>
            </section>

            {/* CALCULATORS */}
            <section className="section">
                <h2>Հաշվիչներ</h2>

                <div className="cards">

                    <div className="card">
                        <div className="icon">💵</div>
                        <h3>Աշխատավարձի հաշվիչ</h3>
                        <p>
                            Հաշվարկեք աշխատավարձը, հարկերը և պարտադիր վճարները արագ և հեշտ։
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">🏢</div>
                        <h3>Ընկերությունների հարկեր</h3>
                        <p>
                            Հաշվեք կազմակերպության հարկային պարտավորությունները և վճարումները։
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">📈</div>
                        <h3>Տոկոսների վճարման հաշվիչ</h3>
                        <p>
                            Հաշվեք վարկերի և տոկոսների ամսական կամ ընդհանուր վճարումները։
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">💰</div>
                        <h3>Դիվիդենտների հաշվիչ</h3>
                        <p>
                            Հաշվեք բաժնետերերի դիվիդենտները և դրանց հարկային մասը։
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">🏠</div>
                        <h3>Վարձակալության հաշվիչ</h3>
                        <p>
                            Հաշվեք վարձակալական վճարները և հարկային պարտավորությունները։
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">🎵</div>
                        <h3>Ռոյալթիների հաշվիչ</h3>
                        <p>
                            Հաշվարկեք ռոյալթիների վճարումները և համապատասխան հարկերը։
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon">📊</div>
                        <h3>Գույքի վաճառքից եկամուտներ</h3>
                        <p>
                            Հաշվեք գույքի վաճառքից ստացված եկամուտները և հարկերը։
                        </p>
                    </div>

                </div>
            </section>

            {/* CONTACT */}
            <section className="contact">
                <h2>Կապ մեզ հետ</h2>

                <div className="contact-grid">
                    <div className="contact-card">
                        <h3>📧 Email</h3>
                        <p>info@company.com</p>
                    </div>

                    <div className="contact-card">
                        <h3>📞 Հեռախոս</h3>
                        <p>+374 00 00 00 00</p>
                    </div>

                    <div className="contact-card">
                        <h3>📍 Հասցե</h3>
                        <p>Երևան, Հայաստան</p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <h3>NewTax.am</h3>
                <p>Ֆինանսների և բիզնեսի կառավարման ժամանակակից հարթակ</p>

                <p className="copyright">
                    © 2026 Բոլոր իրավունքները պաշտպանված են
                </p>
            </footer>

        </div>
    );
}