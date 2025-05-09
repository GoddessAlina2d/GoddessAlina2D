
// pages/api/rebrand.js
import tweepy from 'tweepy';

// This will handle POST requests to /api/rebrand
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { accessToken, accessSecret, name, bio, imagePath, bannerPath } = req.body;

    if (!accessToken || !accessSecret || !name || !bio) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Authentication with Twitter API
    const auth = new tweepy.OAuth1UserHandler(
        API_KEY = os.environ["TWITTER_API_KEY"]
        API_SECRET = os.environ["TWITTER_API_SECRET"]
        ACCESS_TOKEN = os.environ["TWITTER_ACCESS_TOKEN"]
        ACCESS_SECRET = os.environ["TWITTER_ACCESS_SECRET"]
    );
    const api = new tweepy.API(auth);

    try {
      // Update profile with new data
      const updatedProfile = await api.update_profile({
        name,
        description: bio,
      });

       # Optional: Update profile image
    image_path = "public/images/Owned By (1).png"  # Path to the image in your project
    with open(image_path, "rb") as img:
        api.update_profile_image(file=img)

    # Optional: Update profile banner
    banner_path = "public/images/Twitter banner.png"  # Path to the banner image in your project
    with open(banner_path, "rb") as banner:
        api.update_profile_banner(file=banner)


      // Post a tweet
      const tweet = await api.update_status("I'm just a clickslut for @Goddessalina2d. I couldn't stop myself from clicking. Now I'm just her billboard and slave");

      // Send success response
      res.status(200).json({ message: "Profile updated successfully!", profile: updatedProfile, tweet: tweet });

    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ message: "Error updating profile.", error: error.message });
    }

  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
