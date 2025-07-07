import { json, redirect } from '@sveltejs/kit';
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
} from '$env/static/private';

export async function GET({ url, cookies, fetch }) {
  const code = url.searchParams.get('code');
  if (!code) return json({ error: 'No code received' }, { status: 400 });

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code'
    })
  });

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;

  const userRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const user = await userRes.json();

  if (!user?.email) return json({ error: 'Failed to fetch Google user info' }, { status: 500 });

  cookies.set('username', user.name, {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: 'lax'
  });

  
  cookies.set('avatar', user.picture, {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: 'lax'
  });
  
  throw redirect(303, '/Home');
}