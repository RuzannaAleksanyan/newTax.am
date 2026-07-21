import { useState } from "react";
import "./BankInformation.css";


export default function BankInformation({
    onBack,
    onNext
}) {

    const [form, setForm] = useState({
        bankName: "",
        iban: "",
        accountNumber: "",
        swift: ""
    });


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };


    return (

        <div className="bank-information">


            <div className="bank-header">

                <h1>
                    🏦 Բանկային տվյալներ
                </h1>

                <p>
                    Այս տվյալները հետագայում կօգտագործվեն
                    հաշիվների և ֆինանսական փաստաթղթերի ստեղծման ժամանակ։
                </p>

            </div>



            <div className="section">

                <label>
                    🏦 Բանկի անուն
                </label>

                <input
                    type="text"
                    name="bankName"
                    placeholder="Օր․ Ամերիաբանկ"
                    value={form.bankName}
                    onChange={handleChange}
                />

            </div>



            <div className="section">

                <label>
                    🌍 IBAN
                </label>

                <input
                    type="text"
                    name="iban"
                    placeholder="AM00 0000 0000 0000 0000"
                    value={form.iban}
                    onChange={handleChange}
                />

            </div>



            <div className="section">

                <label>
                    💳 Հաշվեհամար
                </label>

                <input
                    type="text"
                    name="accountNumber"
                    placeholder="Հաշվի համար"
                    value={form.accountNumber}
                    onChange={handleChange}
                />

            </div>



            <div className="section">

                <label>
                    🌐 SWIFT
                </label>

                <input
                    type="text"
                    name="swift"
                    placeholder="Օր․ ARMIAM22"
                    value={form.swift}
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
                    Ավարտել →
                </button>

            </div>


        </div>

    );
}