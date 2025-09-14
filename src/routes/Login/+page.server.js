export const actions = {
	default: async ({ cookies }) => {
		const data = await request.formData();
		const username = data.get("username");
		const password = data.get("password");
	},
};
