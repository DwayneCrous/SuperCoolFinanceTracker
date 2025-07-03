import fs from 'fs/promises';
import path from 'path';
import { redirect, fail } from '@sveltejs/kit';

const usersPath = path.resolve('src/lib/server/users.json');

export const actions = {
  createAccount: async ({ request }) => {
    const form = await request.formData();
    const username = form.get('username');
    const email = form.get('email');
    const password = form.get('password');

    let users = [];
    try {
      const data = await fs.readFile(usersPath, 'utf-8');
      users = JSON.parse(data);
    } catch (e) {}

    if (users.find(u => u.username === username || u.email === email)) {
      return fail(400, { error: 'User already exists.' });
    }

    users.push({ username, email, password });
    await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
    return { success: true, message: 'Account created! Please login.' };
  },

  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const username = form.get('login-username');
    const password = form.get('login-password');

    let users = [];
    try {
      const data = await fs.readFile(usersPath, 'utf-8');
      users = JSON.parse(data);
    } catch (e) {}

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      return fail(401, { error: 'Invalid credentials.' });
    }

    cookies.set('username', username, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24
    });

    throw redirect(303, '/Home');
  }
};