import React from "react";
import Input from "../input/Input";
export default function AuthForm({
  email,
  password,
  loading,
  handleChange,
  handleClick,
}) {
  return (
    <form onSubmit={handleClick} className="space-y-4">
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
      </div>
      <button
        type="submit"
        className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
