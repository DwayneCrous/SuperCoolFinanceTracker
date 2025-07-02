<script>
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

    const chartDom = document.getElementById("pie-chart");
    const myChart = echarts.init(chartDom, "dark");
    const option = {
      backgroundColor: "transparent",
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
          name: "",
          type: "pie",
          radius: "50%",
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
    myChart.setOption(option);
  });
</script>

<main>
  <div class="container">
    <div class="header">
      <h1 id="greeting">{greeting}, Dwayne!</h1>
      <p>Glad to see you again, here is your overview today.</p>
    </div>

    <div class="parent">
      <div class="div1">
        <p>Recent Transactions</p>
      </div>
      <div class="div2">
        <p>Recent Messages</p>
      </div>
      <div class="div3">
        <p>Account Balances</p>
      </div>
      <div class="div4">
        <p>Pie Chart</p>
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

  .div1 {
    grid-column-start: 1;
    grid-row-start: 1;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
  }

  .div1 p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
  }

  .div2 {
    grid-column-start: 1;
    grid-row-start: 2;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
  }

  .div2 p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
  }

  .div3 {
    grid-column-start: 2;
    grid-row-start: 1;
    background-color: #222;
    color: #e0e6ed;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
  }

  .div3 p {
    margin: 0;
    font-size: 20px;
    color: #e0e6ed;
  }

  .div4 {
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
    height: 325px;
  }

  .div4 p {
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
</style>
