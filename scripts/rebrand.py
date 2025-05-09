import tweepy

# Twitter app credentials (use environment variables in production)
API_KEY = "YOUR_API_KEY"
API_SECRET = "YOUR_API_SECRET"
ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"
ACCESS_SECRET = "YOUR_ACCESS_SECRET"

# Authenticate
auth = tweepy.OAuth1UserHandler(API_KEY, API_SECRET, ACCESS_TOKEN, ACCESS_SECRET)
api = tweepy.API(auth)

# Update profile
api.update_profile(
    name="🔥 Rebranded Name",
    url="https://yourdomain.com",
    location="New Era",
    description="This account just got a makeover 🚀"
)

# Optional: Update profile image and banner
with open("new_avatar.jpg", "rb") as img:
    api.update_profile_image(filename="new_avatar.jpg", file=img)

with open("new_banner.jpg", "rb") as banner:
    api.update_profile_banner(filename="new_banner.jpg", file=banner)

# Post a tweet
api.update_status("The rebrand is live. What do you think? 👀")

print("✅ Rebrand complete!")
