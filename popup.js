const endpoint = "https://favqs.com/api/qotd";
const API_KEY = '24a4d63eb035841b509fdd758fa6ab5a';

function getQuote() {
  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${API_KEY}`
    }
  })
    .then(response => response.json())
    .then(data => {
      const quote = document.getElementById("quote");
      quote.innerHTML = `${data.quote.body} <footer>${data.quote.author}</footer>`;
    })
    .catch(error => console.log(error));
}

function copyQuote() {
    const quote = document.getElementById("quote").innerText;
    navigator.clipboard.writeText(quote).then(() => {
        console.log("Quote copied to clipboard.");
    });
}

document.getElementById("close-button").addEventListener("click", () => {
  hideOverlay();
  window.close();
});

function showOverlay() {
  document.getElementById("overlay").style.display = "block";
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
  showOverlay();
  setTimeout(hideOverlay, 1000);
});

document.getElementById("next-quote").addEventListener("click", getQuote);
document.getElementById("copy-quote").addEventListener("click", copyQuote);
document.getElementById("close-button").addEventListener("click", () => {
  window.close();
});

getQuote();