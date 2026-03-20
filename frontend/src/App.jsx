import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  const [user, setUser] = useState(null); // { name, email, role }
  const [page, setPage] = useState("login"); // login | register

  const login = (userData) => setUser(userData);
  const logout = () => { setUser(null); setPage("login"); };

  // Role-based routing
  if (user) {
    if (user.role === "patient") return <AuthContext.Provider value={{ user, logout }}><PatientDashboard /></AuthContext.Provider>;
    if (user.role === "doctor")  return <AuthContext.Provider value={{ user, logout }}><DoctorDashboard /></AuthContext.Provider>;
    if (user.role === "admin")   return <AuthContext.Provider value={{ user, logout }}><AdminDashboard /></AuthContext.Provider>;
  }

  return (
    <AuthContext.Provider value={{ login }}>
      {page === "login"
        ? <Login onSwitch={() => setPage("register")} />
        : <Register onSwitch={() => setPage("login")} />}
    </AuthContext.Provider>
  );
}
