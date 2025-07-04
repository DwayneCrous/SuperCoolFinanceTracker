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
      <div class="cheque">
        <p>Checking Account</p>
      </div>
      <div class="savings">
        <p>Savings Account</p>
      </div>
      <div class="credit-card">
        <p>Credit Account</p>
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

  .cheque {
    grid-row: span 5 / span 5;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
  }

  .cheque p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
  }

  .savings {
    grid-row: span 5 / span 5;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
  }

  .savings p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
  }

  .credit-card {
    grid-row: span 5 / span 5;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
  }

  .credit-card p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
  }
</style>
