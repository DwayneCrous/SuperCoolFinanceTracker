<script>
  let search = "";
  let faqs = [
    {
      question: "How do I add a transaction?",
      answer:
        "Click the “+” button or go to Transactions → Add Transaction. Fill in the details and hit save.",
    },
    {
      question: "Can I categorize expenses?",
      answer:
        "Yes, you can assign categories like Groceries, Salary, etc., to each transaction for better tracking.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes! Your data is securely stored and never shared. We only store what's needed for your usage.",
    },
    {
      question: "Can I track multiple accounts (e.g. Cash, Bank, Credit)?",
      answer:
        "Yes, you can track multiple accounts. Just create separate accounts for each one in the app.",
    },
    {
      question: "Why did I get redirected to the login screen?",
      answer:
        "If your session expires or you try accessing a page without being logged in, the app sends you back to the login screen for your security. You’ll also get a toast message explaining why.",
    },
    {
      question: "Can I switch between light and dark mode?",
      answer:
        "Yes, you can toggle between light and dark mode in the settings. Your preference will be saved.",
    },
    {
      question: "How do I send an EFT using my Samsung fridge?",
      answer: "what?",
    },
  ];

  let openIndex = null;

  function toggle(index) {
    openIndex = openIndex === index ? null : index;
  }

  $: filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );
</script>

<main>
  <div class="header">
    <h1>Help</h1>
    <p>Have any unanswered questions? Well you're in the right place.</p>
  </div>
  <div class="faq-container">
    <input type="text" placeholder="🔍 Search FAQs..." bind:value={search} />

    {#each filteredFaqs as faq, index}
      <div class="faq-item">
        <button class="faq-question" on:click={() => toggle(index)}>
          {faq.question}
          <span>{openIndex === index ? "▲" : "▸"}</span>
        </button>
        <div class="faq-answer {openIndex === index ? 'open' : ''}">
          <p>{faq.answer}</p>
        </div>
      </div>
    {/each}

    <button
      type="button"
      class="back-to-top"
      on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ⬆️ Back to top
    </button>
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

  .faq-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #292c3c;
    color: #c6d0f5;
    border-radius: 10px;
    border: 1px solid #51576d;
  }

  input[type="text"] {
    width: 100%;
    padding: 0.75rem 1rem;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    background-color: #414559;
    border: 1px solid #51576d;
    color: #c6d0f5;
    margin-bottom: 1.5rem;
  }

  .faq-item {
    margin-bottom: 1rem;
    border-bottom: 1px solid #51576d;
  }

  .faq-question {
    width: 100%;
    background: none;
    border: none;
    color: #a5adce;
    font-size: 1rem;
    text-align: left;
    padding: 0.75rem 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    color: #babbf1;
  }

  .faq-answer.open {
    max-height: 200px;
    padding: 0.5rem 0;
  }
  .back-to-top {
    margin-top: 2rem;
    text-align: right;
    color: #8caaee;
    cursor: pointer;
    background: none;
    border: none;
    font: inherit;
    padding: 0;
  }

  .back-to-top:hover {
    text-decoration: underline;
  }
</style>
