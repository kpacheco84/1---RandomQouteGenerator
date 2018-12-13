/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//NOTES TO SELF:tommorow add to github and initialize button if 20 seconds has past

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



// qoutes from mhttps://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/

//quotes array
  var quotes = [

    {
  
      quote: 'The way to get started is to quit talking and begin doing.',
  
      source: 'Walt Disney',
  
      about: 'an American entrepreneur, animator, voice actor and film producer'
  
    },
    {
  
      quote: 'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.',
      
  
      source: 'Winston Churchill',
  
      about: 'a British politician, statesman, army officer, and writer, who was Prime Minister of the United Kingdom from 1940 to 1945 and again from 1951 to 1955'
  
    },
    {
  
      quote: 'Don’t let yesterday take up too much of today.',
  
      source: 'Will Rogers',
  
      about: 'an American stage and motion picture actor, vaudeville performer, American cowboy, humorist, newspaper columnist, and social commentator from Oklahoma'
  
    },
    {
  
      quote: 'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
  
      source: 'Unknown',
  
      about: 'unknown'
  
    },
    {
  
      quote: 'People who are crazy enough to think they can change the world, are the ones who do.',
  
      source: 'Rob Siltanen',
  
      about: 'the Founder and Chief Creative Officer of advertising agency Siltanen & Partners'
  
    },



  ];
// background colors for random selection
var bgColors = [
'Gold',
'Blue',
'Silver',
'Teal',
'Orange'

];


// function for random qoute number
function getRandomQuote() {

  var ranNum = Math.floor(Math.random() * quotes.length);

return ranNum

};
// function for random color number
function getRandomColor() {

  var ranNum = Math.floor(Math.random() * bgColors.length);

return ranNum

};

//funtcion to print random qoute properties
function printQuote()
{
  
 var ranNum = getRandomQuote();
 var ranQuote = quotes[ranNum].quote;
var ranSource = quotes[ranNum].source;
var ranAbout = quotes[ranNum].about;
var ranQuotehtml = '<p class="quote">' + ranQuote + '</p>';
var ranSourcehtml = '<p class="source">' + ranSource + '</p>';
var ranAbouthtml = '<p class="about">' + '('+ranAbout+')' + '</p>';
var message = ranQuotehtml+ranSourcehtml+ranAbouthtml
//return document.write(ranQuotehtml,ranSourcehtml);
document.getElementById('quote-box').innerHTML = message;
};


//function to grab random color
function changeBgColor()
{
  
 var ranNum = getRandomColor();
 var ranBgColor = bgColors[ranNum];

//change the background color
document.body.style.backgroundColor  = ranBgColor;

};

printQuote();
changeBgColor();

//pick random quote when you click the button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//pick random color when you click the button
document.getElementById('loadQuote').addEventListener("click", changeBgColor, false);

