import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo" style={{color:"white"}}>📝 Task Management System</h2>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>🏠 Dashboard</Link>
        <Link to="/board" className={location.pathname === "/board" ? "active" : ""}>📊 Task Board</Link>
        </div>
    </nav>
  );
}
