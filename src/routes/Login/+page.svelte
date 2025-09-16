<script>
	import { enhance } from "$app/forms";

	export let form;

	let username = "";
	let password = "";

	function handleLogin(event) {
		event.preventDefault();
		// Handle login logic here
		console.log("Login attempt:", { username, password });
	}
</script>

<main>
	<div class="container">
		<div class="login-box">
			<h1>Welcome to Super Cool Finance Tracker</h1>
			<p>Please enter your credentials to continue.</p>
			<form method="POST" use:enhance>
				<div class="form-group">
					<label for="username">Username</label>
					<input
						type="text"
						name="username"
						bind:value={username}
						required
						placeholder="Enter your username"
					/>
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input
						type="password"
						name="password"
						bind:value={password}
						required
						placeholder="Enter your password"
					/>
				</div>
				<button type="submit" class="login-btn"> Login </button>
			</form>

			{#if form?.error}
				<p class="error-message">{form.error}</p>
			{/if}

			<p class="signup-link">
				Don't have an account? <a href="/Signup">Sign up here</a>
			</p>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		min-height: 100vh;
		justify-content: center;
		align-items: center;
		background-color: #303446;
	}

	.container {
		background-color: #292c3c;
		padding: 40px;
		border-radius: 15px;
		border: 1px solid #51576d;
		text-align: center;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	}

	h1 {
		margin: 0;
		margin-bottom: 10px;
		font-size: 28px;
		color: #c6d0f5;
	}

	p {
		margin-bottom: 30px;
		color: #a5adce;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		text-align: left;
	}

	label {
		margin-bottom: 5px;
		color: #c6d0f5;
		font-weight: 500;
	}

	input {
		padding: 12px;
		font-size: 16px;
		border-radius: 8px;
		border: 1px solid #51576d;
		background-color: #414559;
		color: #c6d0f5;
	}

	input:focus {
		outline: none;
		border-color: #7289da;
		box-shadow: 0 0 0 2px rgba(114, 137, 218, 0.2);
	}

	input::placeholder {
		color: #a5adce;
	}

	.login-btn {
		padding: 12px 20px;
		font-size: 16px;
		border-radius: 8px;
		cursor: pointer;
		border: none;
		background-color: #7289da;
		color: white;
		font-weight: 500;
	}

	.login-btn:hover {
		background-color: #5b6eae;
	}

	.signup-link {
		margin-top: 20px;
		margin-bottom: 0;
		font-size: 14px;
	}

	.signup-link a {
		color: #7289da;
		text-decoration: none;
	}

	.signup-link a:hover {
		text-decoration: underline;
	}

	.error-message {
		margin-top: 15px;
		margin-bottom: 10px;
		padding: 10px;
		background-color: #f87171;
		color: white;
		border-radius: 8px;
		font-size: 14px;
		text-align: center;
	}
</style>
