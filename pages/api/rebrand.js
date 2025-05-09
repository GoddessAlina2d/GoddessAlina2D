// pages/api/rebrand.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Call your external Python service here, using a fetch or axios request
      const response = await fetch('https://account-rebrander.vercel.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Add any data if needed for the rebrand (optional)
        body: JSON.stringify({ someData: 'value' }),
      });

      if (!response.ok) {
        throw new Error('Failed to trigger rebrand');
      }

      return res.status(200).json({ message: 'Rebrand initiated!' });
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}

