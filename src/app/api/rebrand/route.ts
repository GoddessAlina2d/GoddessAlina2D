import { NextResponse } from 'next/server';
import { TwitterApi } from 'twitter-api-v2';

export async function POST() {
  try {
    // Twitter API credentials from environment variables
    const client = new TwitterApi({
      appKey: process.env.TWITTER_API_KEY!,
      appSecret: process.env.TWITTER_API_SECRET!,
      accessToken: process.env.TWITTER_ACCESS_TOKEN!,
      accessSecret: process.env.TWITTER_ACCESS_SECRET!,
    });

    const rwClient = client.readWrite;

    // Update profile fields
    await rwClient.v1.updateAccountProfile({
      name: 'Alina-BOT-',
      url: 'https://youpay.me/goddessalina2d',
      location: 'New Era',
      description: '@GoddessAlina2D',
    });

    // Optional: Update profile image and banner
    import fs from 'fs';
    import path from 'path';


    const image = fs.readFileSync(path.join(process.cwd(), 'public', 'Owned By (1).png'));
    const banner = fs.readFileSync(path.join(process.cwd(), 'public', 'Twitter banner.png'));

    await rwClient.v1.updateAccountProfileImage(image);
    await rwClient.v1.updateAccountProfileBanner(banner);

    // Post a tweet
    await rwClient.v2.tweet("I'm just a clickslut for @Goddessalina2d. I couldn't stop myself from clicking. Now I'm just her billboard and slave.");

    return NextResponse.json({ message: '✅ Rebrand complete!' });
  } catch (error) {
  const message = error instanceof Error ? error.message : 'Unknown error';

    console.error('Twitter API error:', error);
    return NextResponse.json({ message: '❌ Rebrand failed', error: error.message }, { status: 500 });
  }
}

