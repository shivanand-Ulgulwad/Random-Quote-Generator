

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const nextbtn = document.getElementById("next-btn");

async function getquotes() {
  try {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = `— ${data.author}`;
  } catch (error) {
    quote.innerHTML = "Oops! Something went wrong.";
    author.innerHTML = "";
    console.error(error);
  }
}

getquotes();

nextbtn.addEventListener("click", getquotes);



