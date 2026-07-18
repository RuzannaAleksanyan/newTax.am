import "./Sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
                <button className="sidebar-btn">
                    Գլխավոր էջ logo 
                </button>

                <button className="sidebar-btn">
                    Վահանակ
                </button>

                <button className="sidebar-btn">
                    Գործարքներ
                </button>

                <button className="sidebar-btn">
                    Եկամուտների ավելացում
                </button>

                <button className="sidebar-btn">
                    Ծախսերի ավելացում
                </button>

                <button className="sidebar-btn">
                    Reports
                </button>

                <button className="sidebar-btn">
                    Արժույթներ
                </button>

                <button className="sidebar-btn">
                    Կարգավորումներ
                </button>

            </nav>

            <button className="account-btn">
                Account
            </button>

        </div>
    );
}