/** 
The quotes array below stores a number of objects with programming quotes,
each object has up to 5 properties - quote, source, citation, year and tags.
 */

let quotes = [
  {
    quote: "Talk is cheap. Show me the code.",
    source: "Linus Torvalds"
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    source: "Harold Abelson",
    citation: "Structure and Interpretation of Computer Programs",
    year: 1984
  },
  {
    quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    source: "John Woods",
    tags: "Programming, Humor"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    source: "Robert C. Martin",
    citation: "Clean Code: A Handbook of Agile Software Craftsmanship",
    year: 2008
  },
  {
    quote: "Progress is possible only if we train ourselves to think about programs without thinking of them as pieces of executable code.",
    source: "Edsger W. Dijkstra",
  },
  {
    quote: "What kind of programmer is so divorced from reality that she thinks she'll get complex software right the first time?",
    source: "James Alan Gardner",
    citation: "Ascending",
    year: 2001,
    tags: "Debugging, Programming"
  },
  {
    quote: "Happiness should be a function without any parameters.",
    source: "Pranshu Midha"
  },
  {
    quote: "I'm a programmer. I like programming. And the best way I've found to have a positive impact on code is to write it.",
    source: "Robert C. Martin",
    citation: "Clean Architecture",
    year: 2017
  },
  {
    quote: "Most improved things can be improved.",
    source: "Mokokoma Mokhonoana"
  }
];

/**
 * This function takes in an array of objects as a paramater and randomly
 * returns one of the objects in that array.
 */

function getRandomQuote(quotes) {
  let randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}

/**
 * This function creates a 'choice' variable that is a random rgb colour,
 * it then sets the random colour to the body background colour in the CSS file.
 */

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const choice = `rgb(${red}, ${green}, ${blue})`;

  document.getElementById("body").style.backgroundColor = choice;
}

/**
 * This function uses the getRandomQuote function and assigns a reandomly selected
 * object from the array to a new variable. It then creates a HTML string and adds the value of the
 * two compulsory objects properties to that string, it then checks if the object has
 * any of the other potential properties and if so, adds their value onto the string also.
 * It then sets this string to a selected point in the HTML file and finally calls the getRandomColor
 * function to set a new background colour.
 */


function printQuote() {
  let chosenQuote;
  let HTMLstring = "";
  chosenQuote = getRandomQuote(quotes);
  HTMLstring = `<p class="quote"> ${chosenQuote.quote}</p> <p class="source"> ${chosenQuote.source}`;
  if (chosenQuote.citation) {
    HTMLstring += `<span class="citation"> ${chosenQuote.citation}</span>`;
  }
  if (chosenQuote.year) {
    HTMLstring += `<span class="year"> ${chosenQuote.year}</span>`;
  }
  if (chosenQuote.tags) {
    HTMLstring += `<span class="year"> ${chosenQuote.tags}</span>`;
  }
  HTMLstring += "</p>";

  document.getElementById('quote-box').innerHTML = HTMLstring;

  getRandomColor()
}

/**
 * Calling this function sets a random quote and a random background colour to the page, when it is first opened.
 */

printQuote();

/**
 * This causes the page to refresh with a new random quote and random background colour every 20 second.
 */

setInterval(printQuote, 20000);

/**
 * This calls the printQuote function when the 'Show another quote' button is pressed.
 */

document.getElementById('load-quote').addEventListener("click", printQuote, false);