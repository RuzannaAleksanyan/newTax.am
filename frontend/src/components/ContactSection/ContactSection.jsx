import "./ContactSection.css";

export default function ContactSection() {
    return (
        <section className="contact">

            <div className="contact-header">

                <span className="contact-badge">
                    📞 Կապ մեզ հետ
                </span>

                <h2>
                    Մենք միշտ
                    <span> հասանելի ենք</span>
                </h2>

                <p>
                    Ունե՞ք հարցեր կամ առաջարկներ։
                    Կապ հաստատեք մեզ հետ ցանկացած հարմար եղանակով։
                </p>

            </div>

            <div className="contact-wrapper">

                <div className="contact-grid">

                    <div className="contact-card">
                        <div className="contact-icon">📧</div>
                        <h3>Email</h3>
                        <p>info@company.com</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">📞</div>
                        <h3>Հեռախոս</h3>
                        <p>+374 00 00 00 00</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">📍</div>
                        <h3>Հասցե</h3>
                        <p>Երևան, Հայաստան</p>
                    </div>

                </div>

                <div className="contact-form">

                    <div className="form-header">
                        <h3>✉️ Ուղարկեք հաղորդագրություն</h3>
                        <p>
                            Պատասխան կստանաք հնարավորինս արագ
                        </p>
                    </div>

                    <div className="input-group">
                        <label>Անուն</label>
                        <input
                            type="text"
                            placeholder="Մուտքագրեք ձեր անունը"
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div className="input-group">
                        <label>Հաղորդագրություն</label>
                        <textarea
                            rows="5"
                            placeholder="Գրեք ձեր հաղորդագրությունը..."
                        ></textarea>
                    </div>

                    <button className="send-btn">
                        <span>Ուղարկել հաղորդագրություն</span>
                        <span>→</span>
                    </button>

                </div>

            </div>

        </section>
    );
}