import { useState } from "react";

export default function AddIncome() {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        console.log({
            title,
            amount,
            date,
            description
        });
    };

    return (
        <div className="add-income">

            <h1>Ավելացնել եկամուտ</h1>

            <div className="income-form">

                <input
                    type="text"
                    placeholder="Եկամտի անվանում"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Գումար"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <textarea
                    placeholder="Նկարագրություն"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button onClick={handleSubmit}>
                    Պահպանել
                </button>

            </div>

        </div>
    );
}