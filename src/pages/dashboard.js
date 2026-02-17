import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/");
        return;
      }

      try {
        const res = await fetch(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          localStorage.removeItem("token");
          navigate("/");
          return;
        }

        const data = await res.json();
        setUser(data);

      } catch (error) {
        console.error(error);
        navigate("/");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Dashboard</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
