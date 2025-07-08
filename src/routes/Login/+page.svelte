<script>
  import { goto } from "$app/navigation";
</script>

<main>
  <div class="container">
    <div class="login-box">
      <h1>Welcome to Super Cool Finance Tracker</h1>
      <p>Select a login method to continue.</p>
      <div class="login-buttons">
        <button class="discord" on:click={() => goto("/Login/discord")}>
          <i class="fa-brands fa-discord"></i> Login with Discord
        </button>
        <button class="google" on:click={() => goto("/Login/google")}>
          <i class="fa-brands fa-google"></i> Login with Google
        </button>
        <button class="github" on:click={() => goto("/Login/github")}>
          <i class="fa-brands fa-github"></i> Login with GitHub
        </button>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    height: auto;
    padding-top: 270px;
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

  .login-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  button {
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button i {
    margin-right: 8px;
    font-size: 18px;
  }

  button.discord {
    background-color: #7289da;
    color: white;
  }

  button.discord:hover {
    background-color: #5b6eae;
  }

  button.google {
    background: #ffffff;
    color: #444444;
  }

  button.google:hover {
    background: #dad9d9;
  }

  button.github {
    background-color: #414559;
    color: #c6d0f5;
  }

  button.github:hover {
    background-color: #51576d;
  }
</style>
