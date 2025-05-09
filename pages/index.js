// pages/index.js or any component where you want the button

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleRebrand = async () => {
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/rebrand', {
        method: 'POST',
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Rebrand process initiated!');
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Welcome to Your Twitter Rebrand App</h1>
      <button onClick={handleRebrand} disabled={loading}>
        {loading ? 'Processing...' : 'Rebrand My Profile'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

