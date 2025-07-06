<script>
  let creationDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  let totalBalance = "$0.00"; // TODO: Replace with actual balance logic

  let checkingAccNum = "123456789";
  let checkingAccRT = "Grocery Store - $45.23 (07/05/2025)";

  let savingsAccNum = "234567890";
  let savingsAccIR = "1.5% APY";
  let savingsAccRT = "Deposit - $200.00 (07/01/2025)";

  let creditAccNum = "4321 5678 9012 3456";
  let creditAccCL = "$5,000.00";
  let creditAccRT = "Payment - $150.00 (06/28/2025)";
  let creditDueDate = "07/20/2025";
</script>

<main>
  <div class="header">
    <h1>Accounts</h1>
    <p>This is where you can manage and view your accounts.</p>
  </div>

  <div class="parent">
    <div class="account-actions">
      <button>Add Account</button>
      <button>Remove Account</button>
    </div>
    <div class="checking-account-details">
      <div class="checking-account-header">
        <p>Checking Account</p>
      </div>
      <p>Account Number: {checkingAccNum}</p>
      <p>Recent Transaction: {checkingAccRT}</p>
      <p>Creation Date: {creationDate}</p>
      <p>Total Balance: {totalBalance}</p>
    </div>
    <div class="savings-account-details">
      <div class="savings-account-header">
        <p>Savings Account</p>
      </div>
      <p>Account Number: {savingsAccNum}</p>
      <p>Interest Rate: {savingsAccIR}</p>
      <p>Recent Transaction: {savingsAccRT}</p>
      <p>Creation Date: {creationDate}</p>
      <p>Total Balance: {totalBalance}</p>
    </div>
    <div class="credit-account-details">
      <div class="credit-account-header">
        <p>Credit Account</p>
      </div>
      <p>Account Number: {creditAccNum}</p>
      <p>Credit Limit: {creditAccCL}</p>
      <p>Recent Transaction: {creditAccRT}</p>
      <p>Due Date: {creditDueDate}</p>
      <p>Creation Date: {creationDate}</p>
      <p>Total Balance: {totalBalance}</p>
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

  .account-actions,
  .checking-account-details,
  .savings-account-details,
  .credit-account-details {
    background-color: #222;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #444;
  }

  .account-actions button {
    background-color: #333;
    color: #e0e6ed;
    border: 1px solid #444;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }

  .checking-account-header,
  .savings-account-header,
  .credit-account-header {
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #444;
    text-align: center;
  }

  .checking-account-details p,
  .savings-account-details p,
  .credit-account-details p {
    color: #e0e6ed;
    margin: 5px 0;
  }

  .account-actions {
    grid-column: span 3 / span 3;
  }

  .checking-account-details {
    grid-row: span 4 / span 4;
    grid-row-start: 2;
  }

  .savings-account-details {
    grid-row: span 4 / span 4;
    grid-row-start: 2;
  }

  .credit-account-details {
    grid-row: span 4 / span 4;
    grid-row-start: 2;
  }
</style>
