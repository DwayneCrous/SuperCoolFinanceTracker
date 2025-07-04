<script>
  const transactions = {
    "Checking Account": [
      { id: 1, desc: "Groceries", amount: -200 },
      { id: 2, desc: "Salary", amount: 5000 },
    ],
    "Savings Account": [
      { id: 1, desc: "Interest", amount: 50 },
      { id: 2, desc: "Transfer from Checking", amount: 1000 },
    ],
    "Credit Card Account": [
      { id: 1, desc: "Online Shopping", amount: -800 },
      { id: 2, desc: "Restaurant", amount: -250 },
    ],
  };

  let selectedAccount = "Checking Account";

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
          <select name="Filter By Date" id="dropdown_date">
            <option value="option1">Today</option>
            <option value="option2">This Week</option>
            <option value="option3">Last Week</option>
            <option value="option4">This Month</option>
            <option value="option5">Last Month</option>
            <option value="option6">This Year</option>
            <option value="option7">Last Year</option>
          </select>
          <select
            name="Filter By Account"
            id="dropdown_account"
            bind:value={selectedAccount}
          >
            <option value="Checking Account">Checking Account</option>
            <option value="Savings Account">Savings Account</option>
            <option value="Credit Card Account">Credit Card Account</option>
          </select>
          <select name="Filter By Category" id="dropdown_category">
            <option value="option1">Food & Drink</option>
            <option value="option2">Transport</option>
            <option value="option3">Entertainment</option>
            <option value="option4">Bills & Utilities</option>
            <option value="option5">Health</option>
            <option value="option6">Shopping</option>
            <option value="option7">Income</option>
          </select>
          <select name="Filter By Amount" id="dropdown_amount">
            <option value="option1">Less than R100</option>
            <option value="option2">R100 - R500</option>
            <option value="option3">R500 - R1000</option>
            <option value="option4">More than R1000</option>
          </select>
          <select name="Filter By Transaction Type" id="dropdown_type">
            <option value="option1">Deposit</option>
            <option value="option2">Withdrawal</option>
            <option value="option3">Transfer</option>
          </select>
        </div>
      </div>
      <div class="account-transactions">
        <div class="account-header">
          <p>{selectedAccount}</p>
          <button class="add-transaction" id="add-transactions"
            >Add Transaction</button
          >
        </div>
        <!-- <p>Total Balance: R{totalBalance}</p> -->
        {#if accountTransactions.length > 0}
          <ul class="transactions-list">
            {#each accountTransactions as tx}
              <li class={tx.amount >= 0 ? "income" : "expense"}>
                <span class="transaction-desc">{tx.desc}</span>
                <span class="transaction-amount">
                  {tx.amount >= 0 ? "+" : ""}R{tx.amount}
                </span>
              </li>
            {/each}
          </ul>
        {:else}
          <p>No transactions found.</p>
        {/if}
      </div>
    </div>
  </div>
</main>

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
    font-weight: bold;
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
</style>
