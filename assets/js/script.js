const title = document.getElementById('title');
const quote = document.getElementById('quote');
const quoteGenerator = document.getElementById('quote_generated');

quoteGenerator.addEventListener('click', () => {
    getRandomQuote();
});

async function getRandomQuote() {
    const responsive = await fetch('https://api.adviceslip.com/advice');
    const data = await responsive.json();

    title.textContent = `advice #${data.slip.id}`;
    quote.textContent = `${data.slip.advice}`;
}
