import { useState } from "react";
import "./AccountingSettings.css";

export default function AccountingSettings({ onBack, onNext }) {

    const [form, setForm] = useState({
        financialYear: "",
        currency: "AMD",
        vatPayer: "",
        taxSystem: "",
        accountingMethod: ""
    });

    const select = (field, value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="accounting">

            <div className="accounting-header">
                <h1>⚙️ Հաշվապահական կարգավորումներ</h1>

                <p>
                    Այս տվյալները կօգտագործվեն ձեր ֆինանսական
                    հաշվարկների և հաշվետվությունների համար։
                </p>
            </div>

            {/* Ֆինանսական տարի */}

            <div className="section">

                <label>📅 Ֆինանսական տարվա սկիզբ</label>

                <input
                    type="date"
                    value={form.financialYear}
                    onChange={(e) =>
                        select("financialYear", e.target.value)
                    }
                />

            </div>


            {/* Currency */}

            <div className="section">

                <label>💰 Հիմնական արժույթ</label>

                <div className="cards">

                    {["AMD", "USD", "EUR"].map(item => (

                        <div
                            key={item}
                            className={`card ${form.currency === item
                                    ? "active"
                                    : ""
                                }`}
                            onClick={() =>
                                select("currency", item)
                            }
                        >
                            {item}
                        </div>

                    ))}

                </div>

            </div>


            {/* VAT */}

            <div className="section">

                <label>💳 ԱԱՀ վճարող է՞</label>

                <div className="cards">

                    {["Այո", "Ոչ"].map(item => (

                        <div
                            key={item}
                            className={`card ${form.vatPayer === item
                                    ? "active"
                                    : ""
                                }`}
                            onClick={() =>
                                select("vatPayer", item)
                            }
                        >
                            {item}
                        </div>

                    ))}

                </div>

            </div>


            {/* Tax */}

            <div className="section">

                <label>📈 Հարկման համակարգ</label>

                <div className="vertical-cards">

                    {[
                        "Շրջանառության հարկ",
                        "Ընդհանուր հարկային համակարգ",
                        "Միկրոձեռնարկատեր"
                    ].map(item => (

                        <div
                            key={item}
                            className={`vertical-card ${form.taxSystem === item
                                    ? "active"
                                    : ""
                                }`}
                            onClick={() =>
                                select("taxSystem", item)
                            }
                        >
                            {item}
                        </div>

                    ))}

                </div>

            </div>


            {/* Accounting */}

            <div className="section">

                <label>📊 Հաշվապահական մեթոդ</label>

                <div className="cards">

                    {[
                        "Cash Basis",
                        "Accrual Basis"
                    ].map(item => (

                        <div
                            key={item}
                            className={`card ${form.accountingMethod === item
                                    ? "active"
                                    : ""
                                }`}
                            onClick={() =>
                                select(
                                    "accountingMethod",
                                    item
                                )
                            }
                        >
                            {item}
                        </div>

                    ))}

                </div>

            </div>


            <div className="footer">

                <button
                    className="back"
                    onClick={onBack}
                >
                    ← Նախորդ
                </button>

                <button
                    className="next"
                    onClick={onNext}
                >
                    Շարունակել →
                </button>

            </div>

        </div>
    );
}