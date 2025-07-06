<script>
  import transactions from "./transactions.json";

  let selectedAccount = "all";
  let selectedDate = "all";
  let selectedCategory = "all";
  let selectedAmount = "all";
  let selectedType = "all";

  let showModal = false;
  let newTx = {
    desc: "",
    amount: "",
    category: "",
    type: "Deposit",
  };

  function openModal() {
    showModal = true;
    newTx = {
      desc: "",
      amount: "",
      category: "",
      type: "Deposit",
    };
  }

  function closeModal() {
    showModal = false;
  }

  async function addTransaction() {
    if (!selectedAccount || selectedAccount === "all") {
      alert("Please select an account to add a transaction.");
      return;
    }
    const today = new Date().toISOString().slice(0, 10);
    const tx = {
      id: (transactions[selectedAccount]?.length || 0) + 1,
      desc: newTx.desc,
      amount: Number(newTx.amount),
      category: newTx.category,
      type: newTx.type,
      date: today,
    };

    const res = await fetch("/Transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ account: selectedAccount, tx }),
    });

    if (res.ok) {
      location.reload();
    } else {
      alert("Failed to add transaction.");
    }
    showModal = false;
  }

  $: allTransactions = Object.entries(transactions).flatMap(([account, txs]) =>
    txs.map((tx) => ({ ...tx, account }))
  );

  $: filteredTransactions = (
    selectedAccount === "all"
      ? allTransactions
      : allTransactions.filter((tx) => tx.account === selectedAccount)
  )
    .filter((tx) => {
      // Filtering the date
      if (selectedDate === "all") return true;
      const today = new Date("2025-07-04");
      const txDate = new Date(tx.date);
      switch (selectedDate) {
        case "today":
          return txDate.toDateString() === today.toDateString();
        case "thisWeek": {
          const startOfWeek = new Date(today);
          startOfWeek.setDate(today.getDate() - today.getDay());
          return txDate >= startOfWeek && txDate <= today;
        }
        case "lastWeek": {
          const lastWeekStart = new Date(today);
          lastWeekStart.setDate(today.getDate() - today.getDay() - 7);
          const lastWeekEnd = new Date(today);
          lastWeekEnd.setDate(today.getDate() - today.getDay() - 1);
          return txDate >= lastWeekStart && txDate <= lastWeekEnd;
        }
        case "thisMonth":
          return (
            txDate.getMonth() === today.getMonth() &&
            txDate.getFullYear() === today.getFullYear()
          );
        case "lastMonth": {
          const lastMonth = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            1
          );
          return (
            txDate.getMonth() === lastMonth.getMonth() &&
            txDate.getFullYear() === lastMonth.getFullYear()
          );
        }
        case "thisYear":
          return txDate.getFullYear() === today.getFullYear();
        case "lastYear":
          return txDate.getFullYear() === today.getFullYear() - 1;
        default:
          return true;
      }
    })
    .filter((tx) => {
      // Filtering the category of the transactions
      return (
        selectedCategory === "all" ||
        tx.category.toLowerCase().trim() ===
          selectedCategory.toLowerCase().trim()
      );
    })
    .filter((tx) => {
      // Filtering the amount of the transactions
      if (selectedAmount === "all") return true;
      const absAmount = Math.abs(tx.amount);
      if (selectedAmount === "lt100") return absAmount < 100;
      if (selectedAmount === "100to500")
        return absAmount >= 100 && absAmount <= 500;
      if (selectedAmount === "500to1000")
        return absAmount > 500 && absAmount <= 1000;
      if (selectedAmount === "gt1000") return absAmount > 1000;
      return true;
    })
    .filter((tx) => {
      // Filtering the type of the transactions
      return selectedType === "all" || tx.type === selectedType;
    });

  $: availableCategories = Array.from(
    new Set(
      (selectedAccount === "all"
        ? allTransactions
        : transactions[selectedAccount] || []
      )
        .map((tx) => tx.category)
        .filter(Boolean)
    )
  ).sort();

  $: accountTransactions = transactions[selectedAccount] || [];
</script>

<main>
  <div class="container">
    <div class="header">
      <h1>Transactions</h1>
      <p>
        This is where you can visit your transaction history of each account.
      </p>
    </div>

    <div class="parent">
      <div class="filters">
        <p>Filters</p>
        <div class="filter-selects">
          <select
            name="Filter By Date"
            id="dropdown_date"
            bind:value={selectedDate}
          >
            <option value="all">All Dates</option>
            <option value="today">Today</option>
            <option value="thisWeek">This Week</option>
            <option value="lastWeek">Last Week</option>
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="thisYear">This Year</option>
            <option value="lastYear">Last Year</option>
          </select>
          <select
            name="Filter By Account"
            id="dropdown_account"
            bind:value={selectedAccount}
          >
            <option value="all">All Accounts</option>
            <option value="Checking Account">Checking Account</option>
            <option value="Savings Account">Savings Account</option>
            <option value="Credit Card Account">Credit Card Account</option>
          </select>
          <select
            name="Filter By Category"
            id="dropdown_category"
            bind:value={selectedCategory}
          >
            <option value="all">All Categories</option>
            {#each availableCategories as cat}
              <option value={cat}>{cat}</option>
            {/each}
          </select>
          <select
            name="Filter By Amount"
            id="dropdown_amount"
            bind:value={selectedAmount}
          >
            <option value="all">All Amounts</option>
            <option value="lt100">Less than R100</option>
            <option value="100to500">R100 - R500</option>
            <option value="500to1000">R500 - R1000</option>
            <option value="gt1000">More than R1000</option>
          </select>
          <select
            name="Filter By Transaction Type"
            id="dropdown_type"
            bind:value={selectedType}
          >
            <option value="all">All Types</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>
      </div>
      <div class="account-transactions">
        <div class="account-header">
          <p>{selectedAccount === "all" ? "All Accounts" : selectedAccount}</p>
          <button
            class="add-transaction"
            id="add-transactions"
            on:click={openModal}>Add Transaction</button
          >
        </div>
        {#if filteredTransactions.length > 0}
          <ul class="transactions-list">
            {#each filteredTransactions as tx}
              <li class={tx.amount >= 0 ? "income" : "expense"}>
                <span class="transaction-desc">{tx.desc}</span>
                <span class="transaction-date">{tx.date}</span>
                <span class="transaction-amount">
                  {tx.amount >= 0 ? "+" : "-"}R{Math.abs(tx.amount)}
                </span>
              </li>
            {/each}
          </ul>
        {:else}
          <div class="no-transactions">
            <p>No transactions found.</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</main>

{#if showModal}
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h2>Add Transaction</h2>
        <button class="close-modal" on:click={closeModal}>×</button>
      </div>
      <div class="modal-content">
        <div class="form-group">
          <label for="transaction_desc">Description</label>
          <input
            type="text"
            id="transaction_desc"
            bind:value={newTx.desc}
            placeholder="Transaction description"
          />
        </div>
        <div class="form-group">
          <label for="transaction_amount">Amount</label>
          <input
            type="number"
            id="transaction_amount"
            bind:value={newTx.amount}
            placeholder="Transaction amount"
          />
        </div>
        <div class="form-group">
          <label for="transaction_category">Category</label>
          <input
            type="text"
            id="transaction_category"
            bind:value={newTx.category}
            placeholder="Transaction category"
          />
        </div>
        <div class="form-group">
          <label for="transaction_type">Type</label>
          <select id="transaction_type" bind:value={newTx.type}>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-add" on:click={addTransaction}>
          Add Transaction
        </button>
        <button class="btn-cancel" on:click={closeModal}> Cancel </button>
      </div>
    </div>
  </div>
{/if}

<style>
  h1 {
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
    grid-template-rows: repeat(5, 1fr);
    gap: 15px;
  }

  .filters {
    grid-column: span 3 / span 3;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .filters p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
    align-self: flex-start;
  }

  .filter-selects {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
  }

  .account-transactions {
    grid-column: span 3 / span 3;
    grid-row: span 4 / span 4;
    grid-row-start: 2;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
    height: 550px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .account-transactions p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
    flex-shrink: 0;
  }
  select {
    width: auto;
    min-width: 160px;
    padding: 10px;
    margin-top: 0;
    border-radius: 5px;
    border: 1px solid #444;
    background-color: #333;
    color: #e0e6ed;
  }

  .transactions-list {
    list-style: none;
    padding: 0;
    margin: 16px 0 0 0;
    flex: 1 1 auto;
    overflow-y: auto;
    max-height: 100%;
  }

  .transaction-date {
    margin-left: 18px;
    color: #e0e6ed;
    background-color: #333;
    border: 1px solid #444;
    font-size: 14px;
    padding: 4px;
    border-radius: 5px;
    text-align: right;
  }

  .transactions-list li {
    background: #333;
    margin-bottom: 10px;
    padding: 14px 18px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    transition: background 0.2s;
  }

  .transactions-list li.income {
    border: 1px solid #2ecc71;
    color: #2ecc71;
  }

  .transactions-list li.expense {
    border: 1px solid #e74c3c;
    color: #e74c3c;
  }

  .transaction-desc {
    flex: 1;
  }

  .transaction-amount {
    margin-left: 18px;
  }

  .account-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 0;
  }

  .add-transaction {
    background: #333;
    color: #e0e6ed;
    border: 1px solid #444;
    padding: 10px 22px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;
    margin-left: 10px;
  }

  .no-transactions p {
    background-color: #333;
    border: 1px solid #444;
    border-radius: 5px;
    padding: 20px;
    margin-top: 20px;
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
    background: #222;
    color: #e0e6ed;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
    color: #e0e6ed;
  }

  .close-modal {
    background: transparent;
    border: none;
    color: #e0e6ed;
    font-size: 18px;
    cursor: pointer;
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
    color: #b0b8c1;
  }

  input,
  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #444;
    background-color: #333;
    color: #e0e6ed;
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
    background: #333;
    color: #e0e6ed;
    border: 1px solid #444;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-add:hover,
  .btn-cancel:hover {
    background: #444;
  }
</style>
