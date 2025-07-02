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
    background-color: #111;
  }

  .side-nav-bar {
    width: 255px;
    background: #222;
    border-right: 1px solid #444;
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
    margin: 20px 0;
  }

  .side-nav-bar nav ul li a {
    color: #fff;
    font-size: 22px;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
    transition: background 0.2s;
  }

  .side-nav-bar nav ul li a:hover {
    background: #444;
    border: 1px solid #555;
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
    background: #222;
    border-top: 1px solid #444;
    color: #fff;
    text-align: center;
    padding: 3px 0;
    font-size: 14px;
  }

  .content {
    margin-left: 255px;
    flex: 1;
    padding: 40px;
  }
</style>
