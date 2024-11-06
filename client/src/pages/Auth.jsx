import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import { apiInstance } from "../utils/api";
import toast from 'react-hot-toast';

const Auth = () => {
  const [data, setData] = useState({ email: "", password: "" });
    const [authState,setAuthState]= useState("login")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const isInLogIn = authState === "login"

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await apiInstance.post(isInLogIn ? "/login" : "register",data);
      if(isInLogIn){
        navigate("/dashboard");
        localStorage.setItem("user",JSON.stringify(res.data))
      }
      else{
        toast.success("Registered succesfully!")
        setAuthState("login")
        setData({
          email:"",
          password:""
        })
      }
    } catch (err) {
      console.log(err)
      toast.error(err?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => setAuthState(isInLogIn ? "register" : "login")
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">{isInLogIn ? "Login" : "Register"}</h1>
        <AuthForm
          email={data.email}
          password={data.password}
          loading={loading}
          handleChange={handleChange}
          handleClick={handleLogin}
          isInLogIn={isInLogIn}
          toggleAuthMode={toggleAuthMode}
        />
      </div>
    </div>
  );
};

export default Auth;
