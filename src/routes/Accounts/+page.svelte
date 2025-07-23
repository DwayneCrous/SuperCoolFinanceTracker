<script>
  import { onMount } from "svelte";

  let accounts = [];
  let showModal = false;

  let type = "Checking";
  let number = "";
  let balance = "";
  let recentTransaction = "";

  async function loadAccounts() {
    try {
      const res = await fetch("/Accounts");
      const data = await res.json();
      accounts = Array.isArray(data) ? data : [];
    } catch (err) {
      console.error("Error fetching accounts:", err);
      accounts = [];
    }
  }

  async function saveAccount(account) {
    try {
      await fetch("/Accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(account),
      });
      // Reload accounts after saving
      await loadAccounts();
    } catch (err) {
      console.error("Error saving account:", err);
    }
  }

  async function addAccountFromModal() {
    // Use YYYY-MM-DD format for SQLite DATE
    const pad = (n) => n.toString().padStart(2, "0");
    const now = new Date();
    const creationDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    const newAccount = {
      type,
      number,
      recentTransaction,
      creationDate,
      balance,
    };
    await saveAccount(newAccount);
    resetForm();
    showModal = false;
  }

  // Remove account logic would need a DELETE endpoint in the server
  // For now, just reload accounts
  function removeAccount() {
    loadAccounts();
  }

  function resetForm() {
    type = "Checking";
    number = "";
    balance = "";
    recentTransaction = "";
  }

  onMount(loadAccounts);
</script>

<main>
  <div class="header">
    <h1>Accounts</h1>
    <p>This is where you can manage and view your accounts.</p>
  </div>

  <div class="parent">
    <div class="account-actions">
      <button on:click={() => (showModal = true)}>Add Account</button>
      <button on:click={removeAccount}>Remove Account</button>
    </div>

    {#each accounts as acc (acc.id)}
      <div class="account-details">
        <div class="account-header">
          <p>{acc.type} Account</p>
        </div>
        <p>Account Number: {acc.number}</p>
        {#if acc.interestRate}
          <p>Interest Rate: {acc.interestRate}</p>
        {/if}
        {#if acc.creditLimit}
          <p>Credit Limit: {acc.creditLimit}</p>
        {/if}
        {#if acc.dueDate}
          <p>Due Date: {acc.dueDate}</p>
        {/if}
        <p>Recent Transaction: {acc.recentTransaction}</p>
        <p>Creation Date: {acc.creationDate}</p>
        <p>Total Balance: {acc.balance}</p>
      </div>
    {/each}
  </div>

  {#if showModal}
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <h2>Add Account</h2>
          <button class="close-modal" on:click={() => (showModal = false)}
            >×</button
          >
        </div>

        <div class="modal-content">
          <div class="form-group">
            <label>Account Type:</label>
            <select bind:value={type}>
              <option>Checking</option>
              <option>Savings</option>
              <option>Credit</option>
            </select>
          </div>

          <div class="form-group">
            <label>Account Number:</label>
            <input type="text" bind:value={number} />
          </div>

          <div class="form-group">
            <label>Balance:</label>
            <input type="text" bind:value={balance} />
          </div>

          <div class="form-group">
            <label>Recent Transaction:</label>
            <input type="text" bind:value={recentTransaction} />
          </div>

          <div class="modal-actions">
            <button class="btn-add" on:click={addAccountFromModal}>Save</button>
            <button class="btn-cancel" on:click={() => (showModal = false)}
              >Cancel</button
            >
          </div>
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  .header h1 {
    margin-top: 0;
    color: #c6d0f5;
    margin-bottom: 8px;
  }

  .header p {
    color: #a5adce;
    margin-bottom: 40px;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .account-actions {
    grid-column: span 3;
    background-color: #292c3c;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #51576d;
    display: flex;
    gap: 10px;
  }

  .account-actions button {
    background-color: #414559;
    color: #c6d0f5;
    border: 1px solid #51576d;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .account-actions button:hover {
    background-color: #51576d;
  }

  .account-details {
    background-color: #292c3c;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #51576d;
  }

  .account-header {
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #51576d;
    text-align: center;
    color: #c6d0f5;
  }

  .account-details p {
    color: #c6d0f5;
    margin: 5px 0;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
    background: #292c3c;
    color: #c6d0f5;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid #51576d;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .modal h2 {
    margin: 0;
    font-size: 22px;
    color: #c6d0f5;
  }

  .close-modal {
    background: transparent;
    border: none;
    color: #c6d0f5;
    font-size: 24px;
    cursor: pointer;
    line-height: 1;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  label {
    font-size: 14px;
    color: #a5adce;
  }

  input,
  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #51576d;
    background-color: #414559;
    color: #c6d0f5;
    font-size: 16px;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
  }

  .btn-add,
  .btn-cancel {
    background: #414559;
    color: #c6d0f5;
    border: 1px solid #51576d;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-add:hover,
  .btn-cancel:hover {
    background: #51576d;
  }
</style>
