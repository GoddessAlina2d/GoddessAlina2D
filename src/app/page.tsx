"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRebrand = async () => {
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch('/api/rebrand', { method: 'POST' });
      const data = await response.json();

      if (response.ok) {
        setMessage('Profile updated successfully!');
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={handleRebrand}
        disabled={loading}
        className="px-4 py-2 bg-black text-white rounded"
      >
        {loading ? "Rebranding..." : "Rebrand"}
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
