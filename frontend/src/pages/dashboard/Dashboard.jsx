import "./Dashboard.css";

import Sidebar from "./Sidebar/Sidebar";

import WelcomeSection from "./MainContent/WelcomeSection";
import StatisticsCards from "./MainContent/StatisticsCards";
import IncomeExpenseChart from "./MainContent/IncomeExpenseChart";

export default function Dashboard() {
    return (
        <div className="dashboard-layout">

            <Sidebar />

            <main className="dashboard-content">

                <WelcomeSection />

                <StatisticsCards />

                <IncomeExpenseChart />

            </main>

        </div>
    );
}