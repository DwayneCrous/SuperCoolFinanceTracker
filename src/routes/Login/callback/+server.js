import { json, redirect } from '@sveltejs/kit';
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_REDIRECT_URI } from '$env/static/private';

export async function GET({ url, cookies, fetch }) {
  const code = url.searchParams.get('code');
  if (!code) return json({ error: 'No code' }, { status: 400 });

  // Exchange code for token
  const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      client_id: DISCORD_CLIENT_ID,
      client_secret: DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: DISCORD_REDIRECT_URI
    })
  });

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;

  const userRes = await fetch('https://discord.com/api/users/@me', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const user = await userRes.json();

  if (!user?.username) return json({ error: 'Failed to fetch Discord user' }, { status: 500 });

  cookies.set('username', user.username, {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: 'lax'
  });
  cookies.set('userid', user.id, {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: 'lax'
  });
  cookies.set('avatar', user.avatar, {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: 'lax'
  });

  throw redirect(303, '/Home');
}
