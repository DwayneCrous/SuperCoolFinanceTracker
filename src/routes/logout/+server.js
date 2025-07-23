import { redirect } from '@sveltejs/kit';

export const POST = async ({ cookies }) => {
  cookies.delete('username', { path: '/' });
  cookies.delete('avatar', { path: '/' });
  return redirect(302, '/Login');
};
