// src/components/Navbar.js
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { Link } from "react-router-dom";

function Navbar() {
  const user = useSelector((state) => state.user.info);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <h2 className="logo">Task Manager</h2>

      <div className="nav-links">
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span className="welcome-text">Hi, {user.name}</span>
            <button className="logout-btn" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
