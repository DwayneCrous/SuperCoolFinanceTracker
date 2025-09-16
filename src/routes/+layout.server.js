import { getUserId, isAuthenticated } from "$lib/server/auth.js";
import { dbPromise } from "$lib/server/db/db.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies, url }) => {
	const isLoginPage = url.pathname === "/Login";
	const isSignupPage = url.pathname === "/Signup";

	if (!isLoginPage && !isSignupPage && !isAuthenticated(cookies)) {
		throw redirect(303, "/Login");
	}

	const db = await dbPromise;

	const userId = getUserId(cookies);

	const user = await db.get("SELECT * FROM users WHERE id = ?", userId);

	return {
		user,
	};
};
