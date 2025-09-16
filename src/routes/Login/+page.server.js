import { setAuthCookies } from "$lib/server/auth.js";
import { dbPromise } from "$lib/server/db/db.js";
import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
	if (cookies.get("session")) {
		throw redirect(303, "/");
	}
};

export const actions = {
	default: async ({ request, cookies }) => {
		const db = await dbPromise;
		const data = await request.formData();
		const username = data.get("username");
		const password = data.get("password");

		if (!username || !password) {
			return fail(400, { error: "Username and password are required" });
		}

		const user = await db.get(
			"SELECT * FROM users WHERE username = ? AND password = ?",
			username,
			password // In a real app, hash the password and compare hashes
		);

		if (!user) {
			return fail(400, { error: "Invalid username or password" });
		}

		setAuthCookies(cookies, user.id);

		throw redirect(303, "/");
	},
};
