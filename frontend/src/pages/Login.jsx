import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";

// Mock users — replace with real API call later
const MOCK_USERS = [
  { email: "patient@demo.com", password: "1234", name: "Aarav Sharma", role: "patient" },
  { email: "doctor@demo.com",  password: "1234", name: "Dr. Priya Koirala", role: "doctor" },
  { email: "admin@demo.com",   password: "1234", name: "Admin User", role: "admin" },
];

export default function Login({ onSwitch }) {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const found = MOCK_USERS.find(
        (u) => u.email === form.email && u.password === form.password
      );
      if (found) {
        login({ name: found.name, email: found.email, role: found.role });
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="auth-brand">
          <div className="auth-logo">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="10" fill="#0EA5E9"/>
              <path d="M18 8v20M8 18h20" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
            </svg>
            <span>MediBook</span>
          </div>
          <h1 className="auth-headline">Your health,<br/>our priority.</h1>
          <p className="auth-sub">Book appointments with top doctors, track your medical records, and manage your health — all in one place.</p>
          <div className="auth-demo-hints">
            <p className="hint-label">Demo credentials:</p>
            <div className="hint-row"><span className="hint-role patient">Patient</span><span>patient@demo.com / 1234</span></div>
            <div className="hint-row"><span className="hint-role doctor">Doctor</span><span>doctor@demo.com / 1234</span></div>
            <div className="hint-row"><span className="hint-role admin">Admin</span><span>admin@demo.com / 1234</span></div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2 className="card-title">Welcome back</h2>
          <p className="card-subtitle">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="field-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && <div className="auth-error">{error}</div>}

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? <span className="spinner" /> : "Sign In"}
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?{" "}
            <button onClick={onSwitch} className="link-btn">Register here</button>
          </p>
        </div>
      </div>
    </div>
  );
}
