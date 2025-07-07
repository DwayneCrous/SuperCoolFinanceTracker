import { GITHUB_CLIENT_ID, GITHUB_REDIRECT_URI } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export async function GET() {
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: GITHUB_REDIRECT_URI,
    scope: 'read:user user:email',
  });

  throw redirect(302, `https://github.com/login/oauth/authorize?${params}`);
}
