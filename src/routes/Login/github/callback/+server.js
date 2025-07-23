import { json, redirect } from '@sveltejs/kit';
import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_REDIRECT_URI
} from '$env/static/private';

export async function GET({ url, cookies, fetch }) {
  const code = url.searchParams.get('code');
  if (!code) return json({ error: 'No code provided' }, { status: 400 });

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: GITHUB_REDIRECT_URI
    })
  });

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;

  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json'
    }
  });

  const user = await userRes.json();

  if (!user?.login) return json({ error: 'Failed to fetch GitHub user' }, { status: 500 });

  cookies.set('username', user.name || user.login, {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: 'lax'
  });

  cookies.set('avatar', user.avatar_url, {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: 'lax'
  });

  cookies.set('userid', user.id.toString(), {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: 'lax'
  });

  throw redirect(303, '/Home');
}
