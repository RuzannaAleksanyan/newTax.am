import "./ReportsSection.css";

export default function ReportsSection() {
    return (
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
    );
}