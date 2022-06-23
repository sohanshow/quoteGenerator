let apiQuotes = [];


//Getting Quotes from API

async function getQuotes(){

  const apiURL = 'https://type.fit/api/quotes';
  try{

    const response = await fetch(apiURL);
    apiQuotes = await response.json();

     console.log(apiQuotes);
  }catch(erro){

    //This is where I would catch my error

  }
}


//Upon loading

getQuotes();
