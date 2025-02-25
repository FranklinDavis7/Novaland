import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    walletAddress: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const connectWallet = async () => {
    setError("");
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const walletAddress = accounts[0];
        setFormData({ ...formData, walletAddress });
        await handleWalletSignin(walletAddress);
      } catch (err) {
        setError("Failed to connect wallet.");
      }
    } else {
      setError("MetaMask not detected.");
    }
  };

  const handleEmailSignin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      if (data?.user) await fetchUserProfile(data.user.id);
    } catch (err) {
      setError(err.message || "Failed to sign in.");
    }

    setLoading(false);
  };

  const handleWalletSignin = async (walletAddress) => {
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("wallet_address", walletAddress)
        .single();

      if (error || !data) throw new Error("Wallet not linked to any account.");
      navigateToDashboard(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const fetchUserProfile = async (userId) => {
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error || !data) throw new Error("Failed to fetch user data.");
      navigateToDashboard(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const navigateToDashboard = (userData) => {
    navigate("/dashboard", { state: { user: userData } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="absolute inset-0 bg-[url('https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-10/Blockchain%20Technology%20from%20Builtin.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-xl z-10">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-8">Sign In</h2>
        <form onSubmit={handleEmailSignin} className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-4 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-4 border rounded-lg"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-lg text-lg transition"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In with Email"}
          </button>
        </form>
        <div className="text-center my-4 text-gray-500">or</div>
        <button
          onClick={connectWallet}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-lg text-lg transition"
        >
          Connect Wallet
        </button>
        {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Signin;
