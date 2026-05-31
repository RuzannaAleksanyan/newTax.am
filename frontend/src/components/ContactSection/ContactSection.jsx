import "./ContactSection.css";

export default function ContactSection() {
    return (
        <section className="contact">

            <h2>Կապ մեզ հետ</h2>

            <div className="contact-grid">

                <div className="contact-card">
                    <h3>📧 Email</h3>
                    <p>info@company.com</p>
                </div>

                <div className="contact-card">
                    <h3>📞 Հեռախոս</h3>
                    <p>+374 00 00 00 00</p>
                </div>

                <div className="contact-card">
                    <h3>📍 Հասցե</h3>
                    <p>Երևան, Հայաստան</p>
                </div>

            </div>

        </section>
    );
}