<script>
  export let data;
  let userName = data.userName;

  import { onMount } from "svelte";
  import * as echarts from "echarts";

  let greeting = "";

  function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }

  onMount(() => {
    greeting = getGreeting();

    // Pie chart for transactions overview
    const pieDom = document.getElementById("pie-chart");
    const pieChart = echarts.init(pieDom, "dark");
    const pieOption = {
      backgroundColor: "transparent",
      color: ["#a3d8f4", "#74c0fc", "#4dabf7"],
      title: {
        text: "Transactions Overview",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Percentage value",
          type: "pie",
          radius: "70%",
          data: [
            { value: 33, name: "Withdrawals" },
            { value: 33, name: "Deposits" },
            { value: 33, name: "Payments" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    pieChart.setOption(pieOption);

    // Bar chart for account balances
    const barDom = document.getElementById("bar-graph");
    const barChart = echarts.init(barDom, "dark");
    const barOption = {
      backgroundColor: "transparent",
      xAxis: {
        type: "value",
        axisLabel: { color: "#e0e6ed" },
      },
      yAxis: {
        type: "category",
        data: ["Checking", "Savings", "Credit Card"],
        axisLabel: { color: "#e0e6ed" },
      },
      series: [
        {
          data: [1234.56, 5678.9, 123.45],
          type: "bar",
          itemStyle: {
            color: function (params) {
              const colors = ["#b9fbc0", "#98f5c0", "#70e9a8"];
              return colors[params.dataIndex];
            },
          },
          barWidth: "70%",
        },
      ],
    };
    barChart.setOption(barOption);
  });
</script>

<main>
  <div class="container">
    <div class="header">
      <h1 id="greeting">{greeting}, {userName}!</h1>
      <p>Glad to see you again, here is your overview today.</p>
    </div>

    <div class="parent">
      <div class="recent-transactions">
        <p><i class="fa-solid fa-wallet"></i> Recent Transactions</p>
        <ul>
          <li>Checking Account: + R500</li>
          <li>Savings Account: + R200</li>
          <li>Checking Account: - R150</li>
          <li>Checking Account: -R100</li>
        </ul>
      </div>
      <div class="recent-messages">
        <p><i class="fa-solid fa-message"></i> Recent Messages</p>
        <ul>
          <li>Deposit of R500 made into checking Account.</li>
          <li>Deposit of R200 made into Savings Account.</li>
          <li>Payment of R150 made to Utility Company.</li>
          <li>Account created today, welcome to the site!</li>
        </ul>
      </div>
      <div class="account-balances">
        <p><i class="fa-solid fa-chart-simple"></i> Account Balances</p>
        <div id="bar-graph"></div>
      </div>
      <div class="pie-chart">
        <p><i class="fa-solid fa-chart-pie"></i> Pie Chart</p>
        <div class="chart-wrapper">
          <div id="pie-chart"></div>
        </div>
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;
    color: #e0e6ed;
  }

  .recent-transactions {
    grid-column-start: 1;
    grid-row-start: 1;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
  }

  .recent-transactions p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
  }

  .recent-transactions ul {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
  }

  .recent-transactions li {
    margin-bottom: 10px;
    background-color: #333;
    border: 1px solid #444;
    border-radius: 5px;
    padding: 10px 10px;
    color: #b0b8c1;
    font-size: 18px;
  }

  .recent-messages {
    grid-column-start: 1;
    grid-row-start: 2;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
  }

  .recent-messages p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
  }

  .recent-messages ul {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
  }

  .recent-messages li {
    margin-bottom: 10px;
    background-color: #333;
    border: 1px solid #444;
    border-radius: 5px;
    padding: 10px 10px;
    color: #b0b8c1;
    font-size: 18px;
  }

  .account-balances {
    grid-column-start: 2;
    grid-row-start: 1;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
    height: 320px;
    display: flex;
    flex-direction: column;
  }

  .account-balances p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
  }

  .pie-chart {
    grid-column-start: 2;
    grid-row-start: 2;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    height: 320px;
  }

  .pie-chart p {
    margin: 0 0 10px 0;
    font-size: 20px;
    text-align: left;
    color: #e0e6ed;
  }

  .chart-wrapper {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }

  #pie-chart {
    width: 100%;
    height: 100%;
    display: block;
    background-color: transparent;
  }

  #bar-graph {
    width: 100%;
    height: 100%;
    background-color: transparent;
    margin-top: 0;
  }
</style>
