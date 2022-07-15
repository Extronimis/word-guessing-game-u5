const quotes = [
  {
    quote: 'You cannot stop change any more than you can stop the suns from setting',
    source: 'Shmi Skywalker',
    
  },
  {
    quote: 'Always remember your focus determines your reality',
    source: 'Qui-Gon Jinn'
  },
  {
    quote: 'Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering',
    source: 'Yoda',
    citation: 'The Phantom Menace',
  },
  {
    quote: 'If you strike me down I shall become more powerful than you can possibly imagine',
    source: 'Obi-Wan Kenobi',
  },
  {
    quote: "You have to find something that you love enough to jump over hurdles and break through the brick walls",
    source: 'George Lucas',
    year: 'June 19 1999',
  },
  {
    quote: 'Compassion, which I would define as unconditional love, is essential to a Jedis life. So you might say, that we are encouraged to love',
    source: 'Anakin Skywalker',
  },
  {
    quote: 'Be careful not to choke on your own aspirations',
    source: 'Darth Vader'
  },
  {
    quote: "All who gain power are afraid to lose it",
    source: 'Supreme Chancellor Palpatine',
  }
];

// console.log(quotes);

/***
 A function that generates a random number and returns the object array associated with that number
***/

function getRandomQuote() {
  const randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}

/***
 This function calls on getRandomQuote(). It strings together quote and source of quote to display a random quote in browser. It tests if there is a citation, year, and/or tag associated with the random quote and if there is then it concatenates <span> elements.
***/
function printQuote() {
  let quoteObj = getRandomQuote();
  let htmlQuote = `<p class="quote"> ${quoteObj.quote}</p>
  <p class="source"> ${quoteObj.source}`;
  if (quoteObj.citation) {
    htmlQuote += `<span class="citation"> ${quoteObj.citation}</span>`;
  }
  if (quoteObj.year) {
    htmlQuote += `<span class="year"> ${quoteObj.year}</span>`;
  }
  if (quoteObj.tag) {
    htmlQuote += `<span class="tag"> ${quoteObj.tag}</span>`;
  }
  htmlQuote += `</p>`;
  // console.log(htmlQuote);
  return document.getElementById('quote-box').innerHTML = htmlQuote;
}


/*
 click event listener for the print quote button
*/

document.getElementById('load-quote').addEventListener("click", printQuote, false);