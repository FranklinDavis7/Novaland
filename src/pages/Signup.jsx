import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    walletAddress: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setFormData({ ...formData, walletAddress: accounts[0] });
      } catch (err) {
        setError("Failed to connect wallet.");
      }
    } else {
      setError("MetaMask not detected.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            wallet_address: formData.walletAddress,
          },
        },
      });

      if (error) throw error;
      navigate("/signin");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="absolute inset-0 bg-[url('https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-10/Blockchain%20Technology%20from%20Builtin.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-xl z-10">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-8">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="p-3 border rounded-lg w-full text-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="p-3 border rounded-lg w-full text-lg"
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg text-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-3 border rounded-lg text-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="w-full p-3 border rounded-lg text-lg"
            onChange={handleChange}
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="walletAddress"
              placeholder="MetaMask Wallet Address"
              value={formData.walletAddress}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg text-lg"
            />
            <button
              type="button"
              onClick={connectWallet}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition"
            >
              Connect Wallet
            </button>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-xl transition"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;