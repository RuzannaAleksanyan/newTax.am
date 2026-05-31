import "./ReportsSection.css";

export default function ReportsSection() {
    return (
        <section className="reports-section">

            <div className="reports-content">

                <div className="reports-preview">

                    <div className="report-card">

                        <div className="report-header">
                            <h3>Ֆինանսական ամփոփում</h3>
                            <span className="status">
                                Այս ամիս
                            </span>
                        </div>

                        <div className="report-item">
                            <span>Եկամուտներ</span>
                            <strong className="income">
                                2,450,000 ֏
                            </strong>
                        </div>

                        <div className="progress">
                            <div className="progress-fill income-fill"></div>
                        </div>

                        <div className="report-item">
                            <span>Ծախսեր</span>
                            <strong className="expense">
                                1,320,000 ֏
                            </strong>
                        </div>

                        <div className="progress">
                            <div className="progress-fill expense-fill"></div>
                        </div>

                        <div className="report-item">
                            <span>Շահույթ</span>
                            <strong className="profit">
                                1,130,000 ֏
                            </strong>
                        </div>

                        <div className="chart">

                            <div className="bar b1"></div>
                            <div className="bar b2"></div>
                            <div className="bar b3"></div>
                            <div className="bar b4"></div>
                            <div className="bar b5"></div>
                            <div className="bar b6"></div>

                        </div>

                        <div className="report-actions">

                            <button>
                                📄 PDF
                            </button>

                            <button>
                                📊 Excel
                            </button>

                        </div>

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