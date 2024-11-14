import React,{useState} from "react";
import Input from "../input/Input";
import FacialAuth from "./FacialAuth";
export default function AuthForm({
  email,
  password,
  loading,
  handleChange,
  handleClick,
  isInLogIn,
  toggleAuthMode,
  biometricAuth,
  handleBiometricAuth
}) {

  return (
   <>
   {biometricAuth ? <FacialAuth handleBiometricAuth={handleBiometricAuth}/> :  <form onSubmit={handleClick} className="space-y-4">
      <div>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleChange}
          required
        />
        <div className="text-center mt-4">
          <p className="text-gray-600">
            {" "}
            {isInLogIn ? "Don't have an account?" : "Already have a account "}
          </p>
          <button
            type="button"
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={toggleAuthMode}
          >
            {isInLogIn ? "Sign up" : "Log in"}
          </button>
        </div>
      </div>
      <button
        type="submit"
        className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {isInLogIn ? "Log in" : "Sign up"}
      </button>
      <button
        type="submit"
        className={`w-full bg-blue-100 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 `}
      onClick={handleBiometricAuth}
      >
        Continue with face authentication
      </button>
    </form>}
   </>
  );
}
