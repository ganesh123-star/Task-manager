// src/pages/Login.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/userSlice";

function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(form));
  };

  return (
    <div className="auth-box">
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
