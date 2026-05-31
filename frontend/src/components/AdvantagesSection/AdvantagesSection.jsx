import "./AdvantagesSection.css";

export default function AdvantagesSection() {
    return (
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
                    <div className="advantage-number">01</div>

                    <h3>Իրական ժամանակի տվյալներ</h3>

                    <p>
                        Տեղեկատվությունը թարմացվում է անմիջապես և
                        հասանելի է ցանկացած պահի։
                    </p>
                </div>

                <div className="advantage-card">
                    <div className="advantage-number">02</div>

                    <h3>Անվտանգ մուտք</h3>

                    <p>
                        Օգտատերերի տվյալները պաշտպանված են
                        ժամանակակից անվտանգության մեխանիզմներով։
                    </p>
                </div>

                <div className="advantage-card">
                    <div className="advantage-number">03</div>

                    <h3>Բազմարժութային աջակցություն</h3>

                    <p>
                        Համակարգը թույլ է տալիս աշխատել
                        տարբեր արժույթներով։
                    </p>
                </div>

                <div className="advantage-card">
                    <div className="advantage-number">04</div>

                    <h3>Վերլուծական գործիքներ</h3>

                    <p>
                        Հետևեք ձեր ֆինանսական ցուցանիշներին և
                        կայացրեք ավելի հիմնավորված որոշումներ։
                    </p>
                </div>

            </div>

        </section>
    );
}