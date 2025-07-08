<script>
  export let data;
  const userName = data.userName;
  const userId = data.userId;
  const avatar = data.avatar;

  const avatarUrl = avatar?.startsWith("http")
    ? avatar
    : userId && avatar
      ? `https://cdn.discordapp.com/avatars/${userId}/${avatar}.png`
      : "https://cdn.discordapp.com/embed/avatars/0.png";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <title>SCFTA</title>
</svelte:head>

<main>
  <div class="side-nav-bar">
    <nav>
      <ul>
        <li><a href="/Home"><i class="fa-solid fa-house"></i>Home</a></li>
        <li>
          <a href="/Transactions"
            ><i class="fa-solid fa-handshake"></i>Transactions</a
          >
        </li>
        <li>
          <a href="/Accounts"
            ><i class="fa-solid fa-money-check-dollar"></i>Accounts</a
          >
        </li>
        <li>
          <a href="/Messages"><i class="fa-solid fa-message"></i>Messages</a>
        </li>
        <li>
          <a href="/Settings"><i class="fa-solid fa-gear"></i>Settings</a>
        </li>
        <li>
          <a href="/Help"><i class="fa-solid fa-circle-info"></i>Help</a>
        </li>
      </ul>
    </nav>

    {#if userName}
      <div class="user-profile">
        <img src={avatarUrl} alt="profile-pic" />
        <div class="profile-info">
          <p>{userName}</p>
          <form method="POST" action="/logout">
            <button type="submit" class="logout-button">Logout</button>
          </form>
        </div>
      </div>
    {/if}

    <footer>
      <p>2025 DR Development</p>
    </footer>
  </div>
  <div class="content">
    <slot />
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    font-family: Arial, sans-serif;
    display: flex;
    min-height: 100vh;
    background-color: #303446;
  }

  .side-nav-bar {
    width: 255px;
    background: #292c3c;
    border-right: 1px solid #51576d;
    padding: 20px 0;
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 10;
    transition: width 0.3s;
  }

  .side-nav-bar nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .side-nav-bar nav ul li {
    margin: 10px 0;
  }

  .side-nav-bar nav ul li a {
    color: #c6d0f5;
    font-size: 20px;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
    transition: background 0.2s;
  }

  .side-nav-bar nav ul li a:hover {
    background: #51576d;
    border: 1px solid #737994;
  }

  .side-nav-bar nav ul li i {
    padding-right: 10px;
    font-size: 20px;
  }

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 255px;
    background: #292c3c;
    border-top: 1px solid #51576d;
    color: #b5bfe2;
    text-align: center;
    padding: 3px 0;
    font-size: 14px;
  }

  .content {
    margin-left: 255px;
    flex: 1;
    padding: 40px;
    background-color: #303446;
  }

  .user-profile {
    background-color: #414559;
    border: 1px solid #626880;
    border-radius: 12px;
    padding: 10px;
    margin: 20px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #b5bfe2;
  }

  .user-profile img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #626880;
  }

  .user-profile p {
    margin: 0;
    font-size: 16px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .logout-button {
    margin-top: 6px;
    padding: 4px 8px;
    font-size: 12px;
    background-color: #51576d;
    color: #c6d0f5;
    border: 1px solid #626880;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .logout-button:hover {
    background-color: #737994;
  }
</style>
