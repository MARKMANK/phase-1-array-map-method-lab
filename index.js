const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  for(let i = 0; i < tutorials.length; i ++){
    const bookTitle = tutorials[i];
    tutorials[i] = titleCaseWords(bookTitle);
  }
  return tutorials;
}
function titleCaseWords(arrayString){
  return arrayString.split(' ').map(function(word){
    return (word.charAt(0).toUpperCase()+ word.slice(1));
  }).join(' ');
  }
