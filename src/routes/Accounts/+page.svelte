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
      const text = await res.text();

      try {
        accounts = JSON.parse(text);
        if (!Array.isArray(accounts)) accounts = [];
      } catch (parseError) {
        console.error("Failed to parse JSON from /Accounts:", parseError);
        accounts = [];
      }
    } catch (err) {
      console.error("Error fetching accounts:", err);
      accounts = [];
    }
  }

  async function saveAccounts() {
    try {
      await fetch("/Accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(accounts),
      });
    } catch (err) {
      console.error("Error saving accounts:", err);
    }
  }

  function addAccountFromModal() {
    const newAccount = {
      id: Date.now(),
      type,
      number,
      recentTransaction,
      creationDate: new Date().toLocaleDateString("en-US"),
      balance,
    };

    accounts = [...accounts, newAccount];
    saveAccounts();
    resetForm();
    showModal = false;
  }

  function removeAccount() {
    accounts = accounts.slice(0, -1);
    saveAccounts();
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
    <div class="modal-backdrop">
      <div class="modal">
        <h2>Add Account</h2>

        <label>
          Account Type:
          <select bind:value={type}>
            <option>Checking</option>
            <option>Savings</option>
            <option>Credit</option>
          </select>
        </label>

        <label>
          Account Number:
          <input type="text" bind:value={number} />
        </label>

        <label>
          Balance:
          <input type="text" bind:value={balance} />
        </label>

        <label>
          Recent Transaction:
          <input type="text" bind:value={recentTransaction} />
        </label>

        <div class="buttons">
          <button on:click={addAccountFromModal}>Save</button>
          <button on:click={() => (showModal = false)}>Cancel</button>
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  .header h1 {
    margin-top: 0;
    color: #e0e6ed;
    margin-bottom: 8px;
  }

  .header p {
    color: #b0b8c1;
    margin-bottom: 40px;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .account-actions {
    grid-column: span 3;
    background-color: #222;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #444;
    display: flex;
    gap: 10px;
  }

  .account-actions button {
    background-color: #333;
    color: #e0e6ed;
    border: 1px solid #444;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  .account-details {
    background-color: #222;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #444;
  }

  .account-header {
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #444;
    text-align: center;
  }

  .account-details p {
    color: #e0e6ed;
    margin: 5px 0;
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #222;
    color: #e0e6ed;
    padding: 2rem;
    border-radius: 10px;
    width: 400px;
    border: 1px solid #444;
  }

  label {
    display: block;
    margin-bottom: 1rem;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    background: #333;
    border: 1px solid #444;
    border-radius: 5px;
    color: white;
  }

  .buttons {
    display: flex;
    gap: 15px;
  }

  .buttons button {
    padding: 10px 20px;
    background: #333;
    border: 1px solid #444;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
</style>
