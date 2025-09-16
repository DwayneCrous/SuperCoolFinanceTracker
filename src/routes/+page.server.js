import { isAuthenticated } from "$lib/server/auth.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
	if (!isAuthenticated(cookies)) {
		throw redirect(303, "/Login");
	}
};
