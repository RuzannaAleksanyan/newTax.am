import { useState, useEffect } from "react";
import "./ExchangeSection.css";

export default function ExchangeSection() {
    const currencies = [
        {
            pair: "USD/AMD",
            rate: "386.42",
            trend: "+0.8%",
            icon: "💵",
        },
        {
            pair: "EUR/AMD",
            rate: "419.87",
            trend: "+1.2%",
            icon: "💶",
        },
        {
            pair: "RUB/AMD",
            rate: "4.81",
            trend: "-0.3%",
            icon: "₽",
        },
        {
            pair: "GBP/AMD",
            rate: "491.23",
            trend: "+0.5%",
            icon: "💷",
        },
        {
            pair: "CHF/AMD",
            rate: "437.65",
            trend: "+0.2%",
            icon: "🇨🇭",
        },
        {
            pair: "CAD/AMD",
            rate: "284.19",
            trend: "+0.7%",
            icon: "🇨🇦",
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === currencies.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [currencies.length]);

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === currencies.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? currencies.length - 1 : prev - 1
        );
    };

    return (
        <section className="exchange-section">
            <div className="exchange-content">
                <div className="exchange-text">
                    <span className="section-tag">
                        💱 Արժույթի փոխարժեքներ
                    </span>

                    <h2>
                        Հետևեք փոխարժեքներին
                        <br />
                        իրական ժամանակում
                    </h2>

                    <p>
                        Ստացեք արդիական տվյալներ տարբեր արժույթների
                        փոխարժեքների վերաբերյալ, համեմատեք
                        ցուցանիշները և կատարեք արագ հաշվարկներ։
                    </p>

                    <ul>
                        <li>✓ USD, EUR, RUB և այլ արժույթներ</li>
                        <li>✓ Օրական թարմացվող տվյալներ</li>
                        <li>✓ Արագ հաշվարկներ</li>
                        <li>✓ Պատմական տվյալներ</li>
                    </ul>
                </div>

                <div className="exchange-preview">
                    <div className="currency-card">
                        <div className="currency-icon">
                            {currencies[current].icon}
                        </div>

                        <h3>
                            {currencies[current].pair}
                        </h3>

                        <div className="currency-rate">
                            {currencies[current].rate}
                        </div>

                        <div
                            className={`currency-trend ${
                                currencies[current].trend.includes("-")
                                    ? "negative"
                                    : "positive"
                            }`}
                        >
                            {currencies[current].trend.includes("-")
                                ? "📉"
                                : "📈"}{" "}
                            {currencies[current].trend}
                        </div>
                    </div>

                    <div className="slider-controls">
                        <button
                            className="slider-btn"
                            onClick={prevSlide}
                        >
                            ←
                        </button>

                        <button
                            className="slider-btn"
                            onClick={nextSlide}
                        >
                            →
                        </button>
                    </div>

                    <div className="dots">
                        {currencies.map((_, index) => (
                            <span
                                key={index}
                                className={
                                    current === index
                                        ? "dot active"
                                        : "dot"
                                }
                                onClick={() => setCurrent(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}