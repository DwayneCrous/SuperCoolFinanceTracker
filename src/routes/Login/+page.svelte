<script>
  export let form;
  import butterup from "butteruptoasts";
  import "butteruptoasts/src/butterup.css";
  import { enhance } from "$app/forms";

  let toastShown = false;

  $: if (form?.error && !toastShown) {
    butterup.toast({
      title: "Error ❌",
      message: form.error,
      type: "error",
      location: "top-right",
      dismissable: true,
    });
    toastShown = true;
  }

  $: if (form?.message && !toastShown) {
    butterup.toast({
      title: "Success ✅",
      message: form.message,
      type: "success",
      location: "top-right",
      dismissable: true,
    });
    toastShown = true;
  }
</script>

<main>
  <div class="parent">
    <div class="header">
      <h1>Welcome to Super Cool Finance Tracker App</h1>
      <p>Please create an account or login to continue.</p>
    </div>

    <div class="create-account">
      <p>Create Account <i class="fa-solid fa-plus"></i></p>
      <form method="POST" action="?/createAccount" use:enhance>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Create Account</button>
      </form>
    </div>

    <div class="login">
      <p>Login <i class="fa-solid fa-right-to-bracket"></i></p>
      <form method="POST" action="?/login" use:enhance>
        <label for="login-username">Username:</label>
        <input type="text" id="login-username" name="username" required />

        <label for="login-password">Password:</label>
        <input type="password" id="login-password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</main>

<style>
  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    gap: 10px;
  }

  .header {
    grid-column: span 2 / span 2;
    text-align: center;
    color: #e0e6ed;
    font-size: 20px;
    padding-bottom: 20px;
  }

  .login,
  .create-account {
    grid-row-start: 2;
    background-color: #222;
    border: 1px solid #444;
    border-radius: 10px;
    color: #e0e6ed;
    margin: 0px;
    padding: 0 20px 0 0;
    box-sizing: border-box;
  }

  .login i,
  .create-account i {
    padding-left: 5px;
  }

  .login p,
  .create-account p {
    margin: 0;
    padding: 20px;
    font-size: 20px;
  }

  .login form,
  .create-account form {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }

  .login label,
  .create-account label {
    display: block;
    margin-bottom: 10px;
    color: #b0b8c1;
  }

  .login input,
  .create-account input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: #333;
    color: #e0e6ed;
  }

  .login button,
  .create-account button {
    width: 100%;
    padding: 10px;
    background-color: #444;
    color: #e0e6ed;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .create-account button:hover {
    background-color: #555;
    border: 1px solid #70e9a8;
  }

  .login button:hover {
    background-color: #555;
    border: 1px solid #4dabf7;
  }

  .login {
    grid-row-start: 2;
  }
</style>
