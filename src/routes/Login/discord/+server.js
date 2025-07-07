import { DISCORD_CLIENT_ID, DISCORD_REDIRECT_URI } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export async function GET() {
  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: DISCORD_REDIRECT_URI,
    response_type: 'code',
    scope: 'identify'
  });

  throw redirect(302, `https://discord.com/api/oauth2/authorize?${params}`);
}
