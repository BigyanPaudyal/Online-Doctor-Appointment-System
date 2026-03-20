import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";

export default function Register({ onSwitch }) {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }
    setLoading(true);
    // Simulate API registration — replace with real API call
    setTimeout(() => {
      login({ name: form.name, email: form.email, role: "patient" });
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
          <h1 className="auth-headline">Start your<br/>health journey.</h1>
          <p className="auth-sub">Create a free patient account to search doctors, book appointments, and access your medical records anytime.</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2 className="card-title">Create account</h2>
          <p className="card-subtitle">Patient registration</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="field-group">
              <label>Full name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
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
              <label>Phone number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+977 98XXXXXXXX"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field-row">
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
              <div className="field-group">
                <label>Confirm password</label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="••••••••"
                  value={form.confirm}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {error && <div className="auth-error">{error}</div>}

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? <span className="spinner" /> : "Create Account"}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?{" "}
            <button onClick={onSwitch} className="link-btn">Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );
}
