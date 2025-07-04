<script>
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
          <select name="Filter By Account" id="dropdown_account">
            <option value="option1">Checking Account</option>
            <option value="option2">Savings Account</option>
            <option value="option3">Credit Card Account</option>
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
        <p>Account Transactions</p>
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
    gap: 8px;
  }

  .filters {
    grid-column: span 3 / span 3;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
    display: flex;
    flex-direction: column; /* stack p and selects vertically */
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
    gap: 16px;
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
  }

  .account-transactions p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
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
</style>
