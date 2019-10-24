"use strict";


/** 1. countWords */
function countWords(phrase) {
	const word_counts = {};

  for (const word of phrase.split(' ')) {
    if (!word_counts[word]) {
      word_counts[word] = 1
      // console.log(word_counts);
    } else {
      word_counts[word] += 1
      // console.log(word_counts);
    }
  }
  return word_counts
}


/** 2. getMelonsAtPrice */
function getMelonsAtPrice(price) {
	// Replace this with your code
}



console.log(countWords("Will Will Smith smith? No he will not."));