import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./WelcomePage.css";


function WelcomePage({ onStartBusiness }) {

    // const navigate = useNavigate();
    // const location = useLocation();

    const user = location.state || {};

    const startBusiness = () => {
        navigate("/business-registration", {
            state: user
        });
    };


    return (
        <main className="welcome">
            <div className="blur blur-one"></div>
            <div className="blur blur-two"></div>

            <section className="welcome-content">
                <div className="mini-logo">
                    BIZ
                </div>

                <h1>
                    Բարի գալուստ
                    <br />
                    <span>
                        ձեր բիզնեսի նոր սկիզբ
                    </span>
                </h1>

                <p>
                    {user.name && `${user.name}, `}
                    ձեր հաշիվը պատրաստ է։
                    Ստեղծեք ձեր բիզնես պրոֆիլը և
                    միացեք կառավարման նոր փորձին։
                </p>

                <div className="action">
                    <button
                        onClick={() => {
                            console.log("clicked");
                            onStartBusiness();
                        }}
                    >
                        Ստեղծել բիզնես պրոֆիլ
                    </button>

                    <span>
                        Սկսելու համար անհրաժեշտ է ընդամենը մի քանի րոպե
                    </span>
                </div>

                <div className="bottom-info">
                    <div>
                        <strong>
                            01
                        </strong>
                        <span>
                            Անվտանգ
                            գրանցում
                        </span>
                    </div>

                    <div>
                        <strong>
                            02
                        </strong>
                        <span>
                            Պարզ
                            կառավարում
                        </span>
                    </div>

                    <div>
                        <strong>
                            03
                        </strong>
                        <span>
                            Աճող
                            բիզնես
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
}


export default WelcomePage;