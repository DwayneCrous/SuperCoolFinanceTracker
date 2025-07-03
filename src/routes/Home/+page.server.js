import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
  const userName = cookies.get('username');
  if (!userName) throw redirect(302, '/Login');
  return { userName };
};
