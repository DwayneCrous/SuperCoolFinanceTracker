export function setAuthCookies(cookies, userId) {
	cookies.set("session", String(userId), {
		httpOnly: true,
		sameSite: "lax",
		path: "/",
	});
}

export function isAuthenticated(cookies) {
	return !!cookies.get("session");
}
