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
    name="Alina-BOT-",
    url="https://youpay.me/goddessalina2d",
    location="New Era",
    description="@GoddessAlina2D"
)

# Optional: Update profile image and banner
with open("scripts/Owned by (1).png", "rb") as img:
    api.update_profile_image(filename="scripts/Owned by (1).png", file=img)

with open("scripts/Twitter banner.png", "rb") as banner:
    api.update_profile_banner(filename="scripts/Twitter banner.png", file=banner)

# Post a tweet
api.update_status("I'm just a clickslut for @Goddessalina2d. I couldn't stop myself from clicking. Now I'm just her billboard and slave")

print("✅ Rebrand complete!")
