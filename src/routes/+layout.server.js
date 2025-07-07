export const load = async ({ cookies }) => {
  const userName = cookies.get('username');
  const userId = cookies.get('userid');
  const avatar = cookies.get('avatar');

  return {
    userName,
    userId,
    avatar
  };
};
