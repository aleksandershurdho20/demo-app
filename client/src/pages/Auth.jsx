import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";

const Auth = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <AuthForm
          email={data.email}
          password={data.password}
          loading={loading}
          handleChange={handleChange}
          handleClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default Auth;
