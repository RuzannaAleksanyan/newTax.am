import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">

                    <h3>NewTax.am</h3>

                    <p>
                        Ֆինանսների և բիզնեսի կառավարման
                        ժամանակակից հարթակ
                    </p>

                </div>

                <div className="footer-links">

                    <h4>Արագ հղումներ</h4>

                    <a href="#">Գլխավոր</a>
                    <a href="#">Ծառայություններ</a>
                    <a href="#">Հաշվետվություններ</a>
                    <a href="#">Կապ</a>

                </div>

                <div className="footer-contact">

                    <h4>Կոնտակտներ</h4>

                    <p>📧 info@newtax.am</p>
                    <p>📞 +374 00 00 00 00</p>
                    <p>📍 Երևան, Հայաստան</p>

                </div>

            </div>

            <div className="footer-bottom">

                <div className="socials">

                    <a href="#">🌐</a>
                    <a href="#">📘</a>
                    <a href="#">📸</a>
                    <a href="#">💼</a>

                </div>

                <p>
                    © 2026 NewTax.am — Բոլոր իրավունքները պաշտպանված են
                </p>

            </div>

        </footer>
    );
}