import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { profileAction } from "./redux/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.info);

  useEffect(() => {
    dispatch(profileAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Protected route */}
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />

        {/* Public routes */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
