import "./CalculatorsSection.css";

export default function CalculatorsSection() {
    return (
        <section className="section">

            <h2>Հաշվիչներ</h2>

            <div className="cards">

                <div className="card">
                    <div className="icon">💵</div>
                    <h3>Աշխատավարձի հաշվիչ</h3>
                    <p>
                        Հաշվարկեք աշխատավարձը, հարկերը և պարտադիր
                        վճարները արագ և հեշտ։
                    </p>
                </div>

                <div className="card">
                    <div className="icon">🏢</div>
                    <h3>Ընկերությունների հարկեր</h3>
                    <p>
                        Հաշվեք կազմակերպության հարկային
                        պարտավորությունները և վճարումները։
                    </p>
                </div>

                <div className="card">
                    <div className="icon">📈</div>
                    <h3>Տոկոսների վճարման հաշվիչ</h3>
                    <p>
                        Հաշվեք վարկերի և տոկոսների ամսական
                        կամ ընդհանուր վճարումները։
                    </p>
                </div>

                <div className="card">
                    <div className="icon">💰</div>
                    <h3>Դիվիդենտների հաշվիչ</h3>
                    <p>
                        Հաշվեք բաժնետերերի դիվիդենտները
                        և դրանց հարկային մասը։
                    </p>
                </div>

                <div className="card">
                    <div className="icon">🏠</div>
                    <h3>Վարձակալության հաշվիչ</h3>
                    <p>
                        Հաշվեք վարձակալական վճարները
                        և հարկային պարտավորությունները։
                    </p>
                </div>

                <div className="card">
                    <div className="icon">🎵</div>
                    <h3>Ռոյալթիների հաշվիչ</h3>
                    <p>
                        Հաշվարկեք ռոյալթիների վճարումները
                        և համապատասխան հարկերը։
                    </p>
                </div>

                <div className="card">
                    <div className="icon">📊</div>
                    <h3>Գույքի վաճառքից եկամուտներ</h3>
                    <p>
                        Հաշվեք գույքի վաճառքից ստացված
                        եկամուտները և հարկերը։
                    </p>
                </div>

            </div>

        </section>
    );
}