let apiQuotes = [];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn= document.getElementById('new-quote');
const loader = document.getElementById('loader');


//Show that we are loading

function loading(){
  loader.hidden = false;
  quoteContainer.hidden = true;

}



//Hide loading

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}





async function newQuote(){
   loading();
  
  await sleep(500);
  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //Checking if author field if blank
  if (!quote.author)
   authorText.textContent = 'Unknown';
   else
   authorText.textContent = quote.author;

//Checking the quote length for determining the styling
if (quote.text.length > 120)
 quoteText.classList.add('long-quote')
else
quoteText.classList.remove('long-quote')

//Setting quote and hiding loader
  quoteText.textContent = quote.text;
  complete();


}




//Getting Quotes from API

async function getQuotes(){
  loading();
  const apiURL = 'https://type.fit/api/quotes';
  try{

    const response = await fetch(apiURL);
    apiQuotes = await response.json();
   newQuote();
  }catch(error){

    //This is where I would catch my error

  }
}


// Tweet Quote
function tweetQuote() {

 const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

 window.open(twitterUrl, '_blank');

}


//Event Listener

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//Upon loading
getQuotes();
