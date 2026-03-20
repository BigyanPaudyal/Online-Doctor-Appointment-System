import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/dashboard.css";

export default function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard-wrapper admin">
      <aside className="sidebar admin-sidebar">
        <div className="sidebar-logo">
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="#0EA5E9"/>
            <path d="M18 8v20M8 18h20" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          </svg>
          <span>MediBook</span>
        </div>
        <nav className="sidebar-nav">
          <a className="nav-item active">🏠 Dashboard</a>
          <a className="nav-item">🏥 Manage Hospitals</a>
          <a className="nav-item">🩺 Manage Doctors</a>
          <a className="nav-item">👥 Manage Patients</a>
          <a className="nav-item">📅 All Appointments</a>
        </nav>
        <button className="logout-btn" onClick={logout}>← Logout</button>
      </aside>

      <main className="dashboard-main">
        <header className="dash-header">
          <div>
            <h1>Admin Panel ⚙️</h1>
            <p className="dash-role-tag admin-tag">Administrator</p>
          </div>
        </header>

        <div className="dash-cards">
          <div className="dash-card">
            <div className="card-icon">🏥</div>
            <div>
              <h3>Hospitals</h3>
              <p className="card-count">0</p>
            </div>
          </div>
          <div className="dash-card">
            <div className="card-icon">🩺</div>
            <div>
              <h3>Doctors</h3>
              <p className="card-count">0</p>
            </div>
          </div>
          <div className="dash-card">
            <div className="card-icon">👥</div>
            <div>
              <h3>Patients</h3>
              <p className="card-count">0</p>
            </div>
          </div>
          <div className="dash-card">
            <div className="card-icon">📅</div>
            <div>
              <h3>Total Appointments</h3>
              <p className="card-count">0</p>
            </div>
          </div>
        </div>

        <div className="dash-placeholder">
          <p>🚀 Next step: Build <strong>Manage Hospitals</strong> and <strong>Manage Doctors</strong> pages.</p>
        </div>
      </main>
    </div>
  );
}
