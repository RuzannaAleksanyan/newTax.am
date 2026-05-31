import "./SectorsSection.css";

export default function SectorsSection() {
    return (
        <section className="section light">

            <h2>Ոլորտներ</h2>

            <div className="cards">

                <div className="card">
                    <div className="icon">🏦</div>
                    <h3>Բանկային ծառայություններ և ֆինանսներ</h3>
                    <p>Այս ոլորտը ներառում է բանկեր, վարկային կազմակերպություններ և ներդրումային ընկերություններ։</p>
                </div>

                <div className="card">
                    <div className="icon">📡</div>
                    <h3>Ցանցային ծառայություններ</h3>
                    <p>Ներառում է ինտերնետ, բջջային կապ և կապի այլ ծառայություններ։</p>
                </div>

                <div className="card">
                    <div className="icon">💻</div>
                    <h3>ՏՏ ոլորտ</h3>
                    <p>Ծրագրավորում, արհեստական բանականություն և թվային լուծումներ։</p>
                </div>

                <div className="card">
                    <div className="icon">🏥</div>
                    <h3>Առողջապահություն</h3>
                    <p>Հիվանդանոցներ, դեղագործություն և բժշկական ծառայություններ։</p>
                </div>

                <div className="card">
                    <div className="icon">🏠</div>
                    <h3>Անշարժ գույք</h3>
                    <p>Բնակարանների, գրասենյակների և հողատարածքների առքուվաճառք։</p>
                </div>

                <div className="card">
                    <div className="icon">🛒</div>
                    <h3>Առևտուր</h3>
                    <p>Ապրանքների գնում և վաճառք՝ մանրածախ և մեծածախ մակարդակներում։</p>
                </div>

                <div className="card">
                    <div className="icon">🛡️</div>
                    <h3>Ապահովագրություն</h3>
                    <p>Ֆինանսական ռիսկերի նվազեցման ապահովագրական ծառայություններ։</p>
                </div>

                <div className="card">
                    <div className="icon">⚡</div>
                    <h3>Էներգետիկա</h3>
                    <p>Էլեկտրաէներգիայի և այլ էներգետիկ ռեսուրսների արտադրություն։</p>
                </div>

                <div className="card">
                    <div className="icon">🏗️</div>
                    <h3>Շինարարություն</h3>
                    <p>Շենքերի և ենթակառուցվածքների կառուցման ծառայություններ։</p>
                </div>

            </div>

        </section>
    );
}