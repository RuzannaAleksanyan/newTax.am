import { useState } from "react";
import "./ContactInformation.css";

export default function ContactInformation({ onBack, onNext }) {

    const [form, setForm] = useState({
        phone: "",
        website: "",
        contactPerson: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-information">

            <div className="contact-header">
                <h1>📞 Կոնտակտային տվյալներ</h1>

                <p>
                    Նշեք այն տվյալները, որոնց միջոցով հնարավոր կլինի
                    կապ հաստատել ձեր կազմակերպության հետ։
                </p>
            </div>

            <div className="section">
                <label>📞 Հեռախոս</label>

                <input
                    type="text"
                    name="phone"
                    placeholder="+374 XX XXX XXX"
                    value={form.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="section">
                <label>🌐 Website</label>

                <input
                    type="text"
                    name="website"
                    placeholder="https://example.com"
                    value={form.website}
                    onChange={handleChange}
                />
            </div>

            <div className="section">
                <label>👤 Կոնտակտային անձ</label>

                <input
                    type="text"
                    name="contactPerson"
                    placeholder="Անուն Ազգանուն"
                    value={form.contactPerson}
                    onChange={handleChange}
                />
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