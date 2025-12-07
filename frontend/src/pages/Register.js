// src/pages/Register.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../redux/userSlice";

function Register() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(form));
  };

  return (
    <div className="auth-box">
      <h3>Create Account</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

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

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
