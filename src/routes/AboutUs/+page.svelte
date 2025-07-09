<main>
  <div class="header">
    <h1>About Us</h1>
    <p>This is everything about us you need to know.</p>
  </div>

  <div class="parent">
    <div class="greeting-block">
      <p class="greeting-block-heading">
        My name is Dwayne and this is Super Cool Finance Tracker App!
      </p>
    </div>
    <div class="scfta-reason">
      <p class="heading">The reason why I made SCFTA</p>
      <p class="body-text">
        I created SCFTA to help people like me get a clear and organized view of
        their finances. Managing money can be quite the challenge and often
        overwhelming, and I wanted to make that experience just a little bit
        easier with a clean, user-friendly app that tracks your transactions,
        categorizes income and expenses and provides insight into your spending
        habits.
      </p>
    </div>
    <div class="who-am-i">
      <p class="heading">Who am I?</p>
      <p class="body-text">
        I am Dwayne, an inspiring developer and a massive nerd. I like the idea
        of using technology to help with everyday problems. I really enjoy
        designing and building user-friendly apps, and SCFTA is a personal
        project that originally came from a school project I had to make for my
        Information Technology class to an app that everyone can use to help
        keep track of what they are spending their hard earned money on.
      </p>
    </div>
    <div class="use-case">
      <p class="heading">What is this app for?</p>
      <p class="body-text">
        SCFTA is built to make it easier to keep track of your finances. From
        logging every transaction to analyzing spending by category, the app
        gives you an insight on how you spend your finances. Whether you're
        budgeting for groceries or saving for a big goal like college, SCFTA is
        your all-in-one finance tracker. oh and this app is super cool in my
        unbiased opinion.
      </p>
    </div>
  </div>
</main>

<style>
  .header h1 {
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

  .greeting-block,
  .scfta-reason,
  .who-am-i,
  .use-case {
    background-color: #292c3c;
    color: #c6d0f5;
    border: 1px solid #51576d;
    border-radius: 10px;
  }

  .greeting-block {
    grid-column: span 3 / span 3;
    display: flex;
    justify-content: center;
  }

  .scfta-reason {
    grid-row: span 4 / span 4;
    grid-row-start: 2;
  }

  .who-am-i {
    grid-row: span 4 / span 4;
    grid-row-start: 2;
  }

  .use-case {
    grid-row: span 4 / span 4;
    grid-row-start: 2;
  }

  .greeting-block-heading {
    margin: 0;
    padding: 20px;
    font-size: 20px;
    color: #c6d0f5;
  }

  .heading {
    margin: 0;
    padding-top: 20px;
    padding-left: 20px;
    font-size: 20px;
    color: #c6d0f5;
  }

  .body-text {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: #a5adce;
    padding: 20px;
  }
</style>
