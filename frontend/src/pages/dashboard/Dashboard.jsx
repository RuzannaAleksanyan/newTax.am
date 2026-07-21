// import { useState } from "react";

// import "./Dashboard.css";

// import Sidebar from "./sidebar/Sidebar";
// import WelcomePage from "./WelcomePage/WelcomePage";
// import BusinessRegistration from "../BusinessRegistration/BusinessRegistration";

// export default function Dashboard() {

//     const [activeSection, setActiveSection] = useState("welcome");

//     return (
//         <div className="dashboard-layout">

//             <Sidebar />

//             <main className="dashboard-content">

//                 {activeSection === "welcome" && (
//                     <WelcomePage
//                         onStartBusiness={() => setActiveSection("business")}
//                     />
//                 )}

//                 {activeSection === "business" && (
//                     <BusinessRegistration />
//                 )}

//             </main>

//         </div>
//     );
// }

import { useState } from "react";

import "./Dashboard.css";

import Sidebar from "./sidebar/Sidebar";

import WelcomePage from "./WelcomePage/WelcomePage";
import BusinessRegistration from "../BusinessRegistration/BusinessRegistration";
import AccountingSettings from "../AccountingSettings/AccountingSettings";

import StatisticsCards from "./MainContent/StatisticsCards";
import IncomeExpenseChart from "./MainContent/IncomeExpenseChart";

export default function Dashboard() {

    const [activeSection, setActiveSection] = useState("welcome");

    return (
        <div className="dashboard-layout">

            <Sidebar />

            <main className="dashboard-content">

                {activeSection === "welcome" && (
                    <WelcomePage
                        onStartBusiness={() =>
                            setActiveSection("business")
                        }
                    />
                )}

                {activeSection === "business" && (
                    <BusinessRegistration
                        onBack={() =>
                            setActiveSection("welcome")
                        }
                        onNext={() =>
                            setActiveSection("accounting")
                        }
                    />
                )}

                {activeSection === "accounting" && (
                    <AccountingSettings
                        onBack={() =>
                            setActiveSection("business")
                        }
                        onNext={() =>
                            setActiveSection("dashboard")
                        }
                    />
                )}

                {activeSection === "dashboard" && (
                    <>
                        <StatisticsCards />
                        <IncomeExpenseChart />
                    </>
                )}

            </main>

        </div>
    );
}