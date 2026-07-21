import { useState } from "react";
import "./BusinessRegistration.css";

export default function BusinessRegistration({ onNext }) {
    const today = new Date().toLocaleDateString("hy-AM", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const [businessName, setBusinessName] = useState("");
    const [legalForm, setLegalForm] = useState("");
    const [taxId, setTaxId] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [registrationDate, setRegistrationDate] = useState("");
    const [businessActivity, setBusinessActivity] = useState("");
    const [country, setCountry] = useState("Հայաստան");
    const [city, setCity] = useState("");
    const [legalAddress, setLegalAddress] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async () => {
        setError("");
        setSuccess("");

        const token = localStorage.getItem("token");

        const businessData = {
            business_name: businessName,
            legal_form: legalForm,
            tax_id: taxId,
            registration_number: registrationNumber,
            registration_date: registrationDate,
            business_activity: businessActivity,
            country,
            city,

            legal_address: legalAddress
        };

        try {
            // const token = localStorage.getItem("token");
            const response = await fetch(
                "http://localhost:8000/company",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },

                    body: JSON.stringify(businessData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.detail || "Տվյալների պահպանման սխալ"
                );

                return;
            }

            setSuccess(
                "Կազմակերպության տվյալները պահպանվեցին"
            );

            console.log("Business data saved:", data);
            console.log(data);

        } catch (error) {
            setError(
                "Սերվերի սխալ։ Փորձեք կրկին։"
            );
        }
    };

    return (
        <section className="business-registration">
            <div className="welcome-top">
                <div className="welcome-left">
                    <h1>
                        Կազմակերպության գրանցում
                    </h1>

                    <p className="welcome-text">
                        Լրացրեք ձեր կազմակերպության տվյալները։
                        Այս տվյալները կօգտագործվեն հաշվապահական
                        գործընթացների, փաստաթղթերի և հաշվետվությունների համար։
                    </p>
                </div>

                <div className="welcome-right">
                    <div className="info-card">
                        <span className="label">
                            📅 Այսօր
                        </span>

                        <h3> {today}</h3>
                    </div>

                    <div className="info-card">
                        <span className="label">
                            💼 Կարգավիճակ
                        </span>

                        <h3> Կարգավորում </h3>
                    </div>
                </div>
            </div>

            <div className="setup-business">
                <div className="setup-header">
                    <div className="setup-icon"> 🏢 </div>

                    <div>
                        <h2> Կազմակերպության տվյալներ </h2>
                    </div>
                </div>

                {error && (
                    <div className="error-box">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="success-box"> {success} </div>
                )}

                <div className="form-group">
                    <label> Կազմակերպության անվանում </label>

                    <div className="input-box">
                        <span> 🏢 </span>

                        <input
                            type="text"
                            placeholder="Օր. NewTax LLC"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label> Իրավաբանական ձև </label>

                    <div className="input-box">
                        <span> ⚖️ </span>

                        <select
                            value={legalForm}
                            onChange={(e) => setLegalForm(e.target.value)}
                        >
                            <option value=""> Ընտրել </option>

                            <option value="ՍՊԸ"> ՍՊԸ </option>

                            <option value="ԱՁ"> ԱՁ </option>

                            <option value="ԲԲԸ"> ԲԲԸ </option>

                            <option value="ՓԲԸ"> ՓԲԸ </option>

                            <option value="ՀԿ"> ՀԿ </option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label> ՀՎՀՀ (Tax ID) </label>

                    <div className="input-box">
                        <span> 🆔 </span>

                        <input
                            type="text"
                            placeholder="Օր. 01234567"
                            value={taxId}
                            onChange={(e) => setTaxId(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label> Պետական գրանցման համար </label>

                    <div className="input-box">
                        <span> 📄 </span>

                        <input
                            type="text"
                            placeholder="Գրանցման համար"
                            value={registrationNumber}
                            onChange={(e) => setRegistrationNumber(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label> Գրանցման ամսաթիվ </label>

                    <div className="input-box">
                        <span> 📅 </span>

                        <input
                            type="date"
                            value={registrationDate}
                            onChange={(e) => setRegistrationDate(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label> Գործունեության տեսակ </label>

                    <div className="input-box">
                        <span> 💼 </span>

                        <input
                            type="text"
                            placeholder="Օր. Ծրագրային ապահովում"
                            value={businessActivity}
                            onChange={(e) => setBusinessActivity(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label> Երկիր </label>

                    <div className="input-box">
                        <span> 🌍 </span>

                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="Հայաստան"> Հայաստան </option>

                            <option value="Ռուսաստան"> Ռուսաստան </option>

                            <option value="ԱՄՆ"> ԱՄՆ </option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label> Քաղաք </label>

                    <div className="input-box">
                        <span> 🏙️ </span>

                        <input
                            type="text"
                            placeholder="Օր. Երևան"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>
                        Իրավաբանական հասցե
                    </label>

                    <div className="input-box">
                        <span>
                            📍
                        </span>

                        <input
                            type="text"
                            placeholder="Փողոց, շենք, բնակարան"
                            value={legalAddress}
                            onChange={(e) => setLegalAddress(e.target.value)}
                        />
                    </div>
                </div>

                <button onClick={onNext}>
                    Շարունակել →
                </button>
            </div>
        </section>
    );
}