export const actions = {
	default: async ({ cookies }) => {
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

      
   },
};
