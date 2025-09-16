import { setAuthCookies } from "$lib/server/auth.js";
import { dbPromise, initDB } from "$lib/server/db/db.js";
import { fail } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
	if (cookies.get("session")) {
		throw redirect(303, "/");
	}
};

export const actions = {
	default: async ({ cookies, request }) => {
		const db = await dbPromise;
		const data = await request.formData();

		const username = data.get("username");
		const password = data.get("password");
		const confirmPassword = data.get("confirmPassword");

		if (password !== confirmPassword) {
			return fail(400, {
				error: "Passwords do not match",
				values: { username },
			});
		}

		if (!username || !password) {
			return fail(400, {
				error: "Username and password are required",
				values: { username },
			});
		}

		const existingUser = await db.get(
			"SELECT * FROM users WHERE username = ?",
			username
		);

		if (existingUser) {
			return fail(400, {
				error: "Username already taken",
				values: { username },
			});
		}

		const newUser = await db.run(
			"INSERT INTO users (username, password) VALUES (?, ?)",
			username,
			password // In a real app, hash the password before storing it
		);

		setAuthCookies(cookies, newUser.lastID);

		throw redirect(303, "/");
	},
};
