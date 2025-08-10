const quote = document.getElementById("quote");
const author = document.getElementById("author");
const nextbtn = document.getElementById("next-btn");



async function getquotes(params) {
    
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    
   

}
