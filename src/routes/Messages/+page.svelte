<script>
  import messages from "./messages.json";

  let selectedDate = "all";

  $: filteredMessages = messages.filter((message) => {
    if (selectedDate === "all") return true;
    const today = new Date();
    const messageDate = new Date(message.date);
    switch (selectedDate) {
      case "today":
        return messageDate.toDateString() === today.toDateString();
      case "thisWeek": {
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        return messageDate >= startOfWeek && messageDate <= today;
      }
      case "lastWeek": {
        const lastWeekStart = new Date(today);
        lastWeekStart.setDate(today.getDate() - today.getDay() - 7);
        const lastWeekEnd = new Date(today);
        lastWeekEnd.setDate(today.getDate() - today.getDay() - 1);
        return messageDate >= lastWeekStart && messageDate <= lastWeekEnd;
      }
      case "thisMonth":
        return (
          messageDate.getMonth() === today.getMonth() &&
          messageDate.getFullYear() === today.getFullYear()
        );
      case "lastMonth": {
        const lastMonth = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          1
        );
        return (
          messageDate.getMonth() === lastMonth.getMonth() &&
          messageDate.getFullYear() === lastMonth.getFullYear()
        );
      }
      case "thisYear":
        return messageDate.getFullYear() === today.getFullYear();
      case "lastYear":
        return messageDate.getFullYear() === today.getFullYear() - 1;
      default:
        return true;
    }
  });
</script>

<main>
  <div class="header">
    <h1>Messages</h1>
    <p>This is where you can view all your messages.</p>
  </div>

  <div class="parent">
    <div class="filters">
      <p>Filters</p>
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
    </div>
    <div class="messages">
      <p>Messages</p>
      {#if filteredMessages.length > 0}
        <ul class="messages-list">
          {#each filteredMessages as message}
            <li>{message.text}</li>
          {/each}
        </ul>
      {:else}
        <div class="no-messages">
          <p>No messages found.</p>
        </div>
      {/if}
    </div>
  </div>
</main>

<style>
  /* I notice now that I really do not like css very much.
  Like honestly dude there's em, rem, px, vh, vw, vmin, vmax, ch,
  in, cm, mm, pt, ex AHHHHHHHHH */

  /* Do not even get me started on responsive design :( */
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
    background-color: #292c3c;
    color: #c6d0f5;
    padding: 20px;
    border: 1px solid #51576d;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .filters p {
    margin: 0;
    font-size: 20px;
    color: #c6d0f5;
    align-self: flex-start;
  }

  .messages {
    grid-column: span 3 / span 3;
    grid-row: span 4 / span 4;
    grid-row-start: 2;
    background-color: #292c3c;
    color: #c6d0f5;
    padding: 20px;
    border: 1px solid #51576d;
    border-radius: 10px;
    height: 550px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .messages p {
    flex-shrink: 0;
    margin: 0;
    font-size: 20px;
    color: #c6d0f5;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .messages-list {
    list-style: none;
    padding: 0;
    margin: 16px 0 0 0;
    flex: 1 1 auto;
    overflow-y: auto;
    max-height: 100%;
  }

  .messages-list li {
    background: #414559;
    margin-bottom: 10px;
    padding: 14px 18px;
    border-radius: 5px;
    color: #c6d0f5;
    border: 1px solid #51576d;
    transition: background 0.2s;
  }

  .messages-list li:hover {
    background: #51576d;
  }

  .no-messages {
    background-color: #414559;
    border: 1px solid #51576d;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
  }

  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #51576d;
    background-color: #414559;
    color: #c6d0f5;
    font-size: 16px;
  }
</style>
