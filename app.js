
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const nextbtn = document.getElementById("next-btn");

async function getquotes(params) {
  let response = await fetch("https://quotes-api-self.vercel.app/quote");

  let data = await response.json();
  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
}


getquotes();






