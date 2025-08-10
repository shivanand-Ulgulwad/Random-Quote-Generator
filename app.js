// const quote = document.getElementById("quote");
// const author = document.getElementById("author");
// const nextbtn = document.getElementById("next-btn");



// async function getquotes(params) {
    
//     let response = await fetch("https://api.quotable.io/random");
//     let data = await response.json();
//     quote.innerHTML = data.content;
//     author.innerHTML = data.author;
    
   

// }

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

// Load the first quote when page loads
getquotes();

// Load a new quote when button is clicked
nextbtn.addEventListener("click", getquotes);


