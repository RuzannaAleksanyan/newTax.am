export default function Sidebar() {
    return (
        <div className="sidebar">

            <h2 className="logo">
                NewTax
            </h2>

            <nav>

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

            <button className="logout-btn">
                Logout
            </button>

        </div>
    );
}