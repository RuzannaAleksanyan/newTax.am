
import { useState } from "react";

import "./Dashboard.css";

import Sidebar from "./sidebar/Sidebar";

import WelcomePage from "./WelcomePage/WelcomePage";
import BusinessRegistration from "../BusinessRegistration/BusinessRegistration";
import AccountingSettings from "../AccountingSettings/AccountingSettings";

import StatisticsCards from "./MainContent/StatisticsCards";
import IncomeExpenseChart from "./MainContent/IncomeExpenseChart";

import ContactInformation from "../ContactInformation/ContactInformation";
import BankInformation from "../BankInformation/BankInformation";

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

                {activeSection === "dashboard" && (
                    <>
                        <StatisticsCards />
                        <IncomeExpenseChart />
                    </>
                )}

                {activeSection === "accounting" && (
                    <AccountingSettings
                        onBack={() => setActiveSection("business")}
                        onNext={() => setActiveSection("contact")}
                    />
                )}

                {activeSection === "contact" && (
                    <ContactInformation
                        onBack={() => setActiveSection("accounting")}
                        onNext={() => setActiveSection("bank")}
                    />
                )}

                {activeSection === "bank" && (
                    <BankInformation
                        onBack={() =>
                            setActiveSection("contact")
                        }
                        onNext={() =>
                            setActiveSection("dashboard")
                        }
                    />
                )}

            </main>

        </div>
    );
}