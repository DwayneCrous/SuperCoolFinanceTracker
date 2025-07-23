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

  // Demo values, replace with real user/account data
  let displayName = "Dwayne";
  let loggedInVia = "Discord";
  let theme = "dark";
  let fontSize = "normal";
  let currency = "USD";
  let dateFormat = "YYYY-MM-DD";
  let budgetAlerts = true;
  let billReminders = true;

  function updateDiscord() {
    alert("Redirecting to Discord account management...");
  }
  function logOut() {
    alert("Logging out...");
  }
  function deleteData() {
    if (confirm("Are you sure you want to delete all your data?")) {
      alert("Your data has been deleted.");
    }
  }
  function exportData() {
    alert("Exporting your data...");
  }
  function importData() {
    alert("Importing data...");
  }
</script>

<main>
  <div class="settings-container">
    <h1 class="settings-title">Settings Page</h1>
    <section class="settings-block">
      <div class="block-title">👤 Account Settings</div>
      <div class="divider"></div>
      <div class="account-row">
        <div class="account-label">Display Name:</div>
        <input class="account-input" type="text" bind:value={displayName} />
      </div>
      <div class="account-row">
        <div class="account-label">Logged in via:</div>
        <span class="account-provider"
          >Discord <span class="discord-icon">🟣</span></span
        >
      </div>
      <div class="account-row">
        <div class="account-label">Profile Picture:</div>
        <img class="avatar" src={avatarUrl} alt="Avatar" />
      </div>
      <div class="account-row">
        <div class="account-label">⚙️ Manage external account:</div>
        <button class="discord-btn" type="button" on:click={updateDiscord}
          >Update on Discord</button
        >
      </div>
      <div class="account-actions">
        <button class="logout-btn" type="button" on:click={logOut}
          >🚪 Log Out</button
        >
        <button class="delete-btn" type="button" on:click={deleteData}
          >🗑️ Delete My Data</button
        >
      </div>
    </section>
    <section class="settings-block">
      <div class="block-title">🎨 Appearance</div>
      <div class="divider"></div>
      <div class="appearance-row">
        <div class="appearance-label">Theme:</div>
        <select class="appearance-select" bind:value={theme}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div class="appearance-row">
        <div class="appearance-label">Font size:</div>
        <select class="appearance-select" bind:value={fontSize}>
          <option value="normal">Normal</option>
          <option value="large">Large</option>
          <option value="small">Small</option>
        </select>
      </div>
    </section>
    <section class="settings-block">
      <div class="block-title">💰 Finance Preferences</div>
      <div class="divider"></div>
      <div class="finance-row">
        <div class="finance-label">Default currency:</div>
        <select class="finance-select" bind:value={currency}>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="ZAR">ZAR (R)</option>
        </select>
      </div>
      <div class="finance-row">
        <div class="finance-label">Date format:</div>
        <select class="finance-select" bind:value={dateFormat}>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
        </select>
      </div>
    </section>
    <section class="settings-block">
      <div class="block-title">🔔 Notifications</div>
      <div class="divider"></div>
      <div class="notification-row">
        <label>
          <input type="checkbox" bind:checked={budgetAlerts} /> Budget alerts ON
        </label>
      </div>
      <div class="notification-row">
        <label>
          <input type="checkbox" bind:checked={billReminders} /> Bill reminders ON
        </label>
      </div>
    </section>
    <section class="settings-block">
      <div class="block-title">📦 Data</div>
      <div class="divider"></div>
      <div class="data-row">
        <button class="data-btn" type="button" on:click={exportData}
          >Export data</button
        >
        <button class="data-btn" type="button" on:click={importData}
          >Import data</button
        >
      </div>
    </section>
  </div>
</main>

<style>
  main {
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
  }
  .settings-container {
    width: 100%;
    max-width: 600px;
    background: #292c3c;
    border-radius: 16px;
    border: 1px solid #51576d;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .settings-title {
    text-align: center;
    color: #c6d0f5;
    font-size: 2rem;
    margin-bottom: 12px;
    font-weight: bold;
  }
  .settings-block {
    background: #414559;
    border-radius: 10px;
    border: 1px solid #51576d;
    padding: 20px 16px;
    margin-bottom: 0;
  }
  .block-title {
    color: #c6d0f5;
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .divider {
    border-bottom: 1px solid #44475a;
    margin-bottom: 16px;
  }
  .account-row,
  .appearance-row,
  .finance-row,
  .notification-row,
  .data-row {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    gap: 12px;
  }
  .account-label,
  .appearance-label,
  .finance-label {
    color: #a5adce;
    min-width: 130px;
    font-size: 1rem;
  }
  .account-input {
    flex: 1;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #44475a;
    background: #292c3c;
    color: #c6d0f5;
    font-size: 1rem;
    outline: none;
  }
  .account-provider {
    color: #c6d0f5;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .discord-icon {
    font-size: 1.2rem;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #c6d0f5;
    object-fit: cover;
  }
  .discord-btn {
    background: #5865f2;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }
  .discord-btn:hover {
    background: #4752c4;
  }
  .account-actions {
    display: flex;
    gap: 16px;
    margin-top: 10px;
  }
  .logout-btn {
    background: #292c3c;
    color: #c6d0f5;
    border: 1px solid #51576d;
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }
  .logout-btn:hover {
    background: #b5bfe2;
  }
  .delete-btn {
    background: #e78284;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }
  .delete-btn:hover {
    background: #e64553;
  }
  .appearance-select,
  .finance-select {
    flex: 1;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #44475a;
    background: #232634;
    color: #c6d0f5;
    font-size: 1rem;
    outline: none;
  }
  .data-row {
    gap: 16px;
    margin-top: 8px;
  }
  .data-btn {
    background: #292c3c;
    color: #c6d0f5;
    border: 1px solid #51576d;
    border-radius: 6px;
    padding: 10px 18px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }
  .data-btn:hover {
    background: #c6d0f5;
    color: #292c3c;
  }

  label {
    color: #c6d0f5;
  }

  input[type="checkbox"] {
    accent-color: #c6d0f5;
    margin-right: 8px;
    width: 18px;
    height: 18px;
  }
</style>
