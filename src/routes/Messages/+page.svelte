<script>
</script>

<main>
  <div class="header">
    <h1>Messages</h1>
    <p>This is where you can view all your messages.</p>
  </div>

  <div class="parent">
    <div class="filters">
      <p>Filters</p>
    </div>
    <div class="messages">
      <p>Messages</p>
    </div>
  </div>
</main>

<style>
  h1 {
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
    grid-template-rows: repeat(5, 1fr);
    gap: 15px;
  }

  .filters {
    grid-column: span 3 / span 3;
  }

  .messages {
    grid-column: span 3 / span 3;
    grid-row: span 4 / span 4;
    grid-row-start: 2;
  }

  .filters,
  .messages {
    background-color: #292c3c;
    color: #c6d0f5;
    padding: 20px;
    border: 1px solid #51576d;
    border-radius: 10px;
  }

  .filters p,
  .messages p {
    margin: 0;
    font-size: 20px;
    color: #c6d0f5;
  }
</style>
