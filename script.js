const quoteContianer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];


//Showing new quotes

function newQuote(){

//Picking a random quote from apiQuotes array

const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length )];

authorText.textContent = quote.author;
quoteText.textContent = quote.text;

}

//Getting Quotes from API

async function getQuotes(){

  const apiURL = 'https://type.fit/api/quotes';
  try{

    const response = await fetch(apiURL);
    apiQuotes = await response.json();
       newQuote();
  }catch(error){

    //This is where I would catch my error

  }
}


//Upon loading

getQuotes();
