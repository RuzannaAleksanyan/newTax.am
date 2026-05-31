import "./ServicesSection.css";

export default function ServicesSection() {
    return (
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
    );
}