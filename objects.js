"use strict";


/** 1. countWords */
function countWords(phrase) {
	const wordCounts = {};

  for (const word of phrase.split(' ')) {
    if (!wordCounts[word]) {
      wordCounts[word] = 1
      // console.log(wordCounts);
    } else {
      wordCounts[word] += 1
      // console.log(wordCounts);
    }
  }
  return wordCounts
}


/** 2. getMelonsAtPrice */
function getMelonsAtPrice(price) {
const melonPrices = {
  2.50:['Cantaloupe', 'Honeydew'],
  2.95:['Watermelon'],
  3.25:['Musk', 'Crenshaw'],
  14.25:['Christmas']
};

if (!melonPrices[price]){
  return
}
return melonPrices[price]
}



// console.log(countWords("Will Will Smith smith? No he will not."));
console.log(getMelonsAtPrice(2.50))
console.log(getMelonsAtPrice(14.25))
console.log(getMelonsAtPrice(5.00))