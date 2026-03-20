import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/dashboard.css";

export default function DoctorDashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard-wrapper doctor">
      <aside className="sidebar doctor-sidebar">
        <div className="sidebar-logo">
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="#0EA5E9"/>
            <path d="M18 8v20M8 18h20" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          </svg>
          <span>MediBook</span>
        </div>
        <nav className="sidebar-nav">
          <a className="nav-item active">🏠 Dashboard</a>
          <a className="nav-item">📅 Appointments</a>
          <a className="nav-item">🕐 My Schedule</a>
          <a className="nav-item">📋 Patient Reports</a>
          <a className="nav-item">👤 Profile</a>
        </nav>
        <button className="logout-btn" onClick={logout}>← Logout</button>
      </aside>

      <main className="dashboard-main">
        <header className="dash-header">
          <div>
            <h1>Welcome, {user.name} 🩺</h1>
            <p className="dash-role-tag doctor-tag">Doctor Account</p>
          </div>
        </header>

        <div className="dash-cards">
          <div className="dash-card">
            <div className="card-icon">📬</div>
            <div>
              <h3>New Requests</h3>
              <p className="card-count">0</p>
            </div>
          </div>
          <div className="dash-card">
            <div className="card-icon">✅</div>
            <div>
              <h3>Approved Today</h3>
              <p className="card-count">0</p>
            </div>
          </div>
          <div className="dash-card">
            <div className="card-icon">🏁</div>
            <div>
              <h3>Completed</h3>
              <p className="card-count">0</p>
            </div>
          </div>
        </div>

        <div className="dash-placeholder">
          <p>🚀 Next step: Build the <strong>Appointments</strong> and <strong>Set Availability</strong> pages.</p>
        </div>
      </main>
    </div>
  );
}
