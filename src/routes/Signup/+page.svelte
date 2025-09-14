<script>
	let username = "";
	let email = "";
	let password = "";
	let confirmPassword = "";

	function handleSignup(event) {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		// Handle signup logic here
		console.log("Signup attempt:", { username, email, password });
	}
</script>

<main>
	<div class="container">
		<div class="signup-box">
			<h1>Join Super Cool Finance Tracker</h1>
			<p>Create your account to get started.</p>
			<form on:submit={handleSignup}>
				<div class="form-group">
					<label for="username">Username</label>
					<input
						type="text"
						id="username"
						bind:value={username}
						required
						placeholder="Choose a username"
					/>
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						bind:value={email}
						required
						placeholder="Enter your email"
					/>
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input
						type="password"
						id="password"
						bind:value={password}
						required
						placeholder="Create a password"
					/>
				</div>
				<div class="form-group">
					<label for="confirmPassword">Confirm Password</label>
					<input
						type="password"
						id="confirmPassword"
						bind:value={confirmPassword}
						required
						placeholder="Confirm your password"
					/>
				</div>
				<button type="submit" class="signup-btn"> Sign Up </button>
			</form>
			<p class="login-link">
				Already have an account? <a href="/Login">Login here</a>
			</p>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		min-height: 100%;
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

	.signup-btn {
		padding: 12px 20px;
		font-size: 16px;
		border-radius: 8px;
		cursor: pointer;
		border: none;
		background-color: #7289da;
		color: white;
		font-weight: 500;
	}

	.signup-btn:hover {
		background-color: #5b6eae;
	}

	.login-link {
		margin-top: 20px;
		margin-bottom: 0;
		font-size: 14px;
	}

	.login-link a {
		color: #7289da;
		text-decoration: none;
	}

	.login-link a:hover {
		text-decoration: underline;
	}
</style>
