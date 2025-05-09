// Example for your frontend (page.tsx)

const handleRebrand = async () => {
  try {
    setLoading(true);
    setMessage("");

    // Prepare your data for the rebrand
    const name = "Alina-BOT-";
    const bio = "@GoddessAlina2D";
    const imagePath = "/path/to/your/image.png";  // Update with the actual image path
    const bannerPath = "/path/to/your/banner.png";  // Update with the actual banner path

    const response = await fetch('/api/rebrand', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        bio,
        accessToken: userAccessToken, // Make sure to get the user's access token
        accessSecret: userAccessSecret, // And the user's access secret
        imagePath,
        bannerPath,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage('Profile updated successfully!');
    } else {
      setMessage(`Error: ${data.message}`);
    }
  } catch (error) {
    setMessage(`Error: ${error.message}`);
  } finally {
    setLoading(false);
  }
};
