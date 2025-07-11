import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
  const userName = cookies.get('username');
  if (!userName) throw redirect(303, '/Login');
  return { userName };
};