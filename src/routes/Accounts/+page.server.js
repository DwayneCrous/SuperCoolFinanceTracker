export const load = async ({ cookies }) => {
  const userName = cookies.get('username');
  return { userName };
};