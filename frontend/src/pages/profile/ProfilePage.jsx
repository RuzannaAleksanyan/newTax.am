import { useEffect, useState } from "react";

export default function ProfilePage() {

    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchProfile = async () => {

            const token = localStorage.getItem("token");

            if (!token) {
                setError("Token չի գտնվել");
                return;
            }

            try {
                const res = await fetch("http://127.0.0.1:8000/profile", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                const data = await res.json();

                if (!res.ok) {
                    setError(data.detail || "Profile error");
                    return;
                }

                setUser(data);

            } catch (err) {
                setError("Սերվերի սխալ");
            }
        };

        fetchProfile();

    }, []);

    if (error) {
        return (
            <div>
                <h2>Profile</h2>
                <p style={{ color: "red" }}>{error}</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div>
                <h2>Profile</h2>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Profile Page</h1>

            <p><b>ID:</b> {user.id}</p>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
        </div>
    );
}