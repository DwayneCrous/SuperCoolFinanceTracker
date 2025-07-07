<script>
  import { goto } from "$app/navigation";
</script>

<main>
  <div class="container">
    <div class="login-box">
      <h1>Login with Discord</h1>
      <p>Welcome to Super Cool Finance Tracker</p>
      <button on:click={() => goto("/Login/discord")}>
        <i class="fa-brands fa-discord"></i> Login with Discord
      </button>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    height: auto;
    padding-top: 310px;
    justify-content: center;
    align-items: center;
    background-color: #111;
  }

  .container {
    background-color: #23272a;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
    color: #ffffff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  h1 {
    margin-bottom: 10px;
    font-size: 28px;
    color: #7289da;
  }

  p {
    margin-bottom: 30px;
    color: #99aab5;
  }

  button {
    background-color: #7289da;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
  }

  button:hover {
    background-color: #5b6eae;
  }

  i {
    margin-right: 8px;
  }
</style>
