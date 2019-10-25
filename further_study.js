"use strict";

const wordsInCommon = (words1, words2) => {

  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set){
    if (words2Set.has(word)){
      result.add(word)
    }
  }

return Array.from(result);


};

const kidsGame = (names) => {
  //names = ["bagon", "baltoy", "yamask", "starly", 
  //         "nosepass", "kalob", "nicky", "booger"]

  // get first word and remove, add to output
  const output = [names.shift()];

  // makes object with {first-letter:[names-starting-with-letter]}
  const firstLetterToWords = {}

  for (const name of names) {
    if (!firstLetterToWords[name[0]]) {
      firstLetterToWords[name[0]] = [name];
    } else {
      firstLetterToWords[name[0]].push(name);
    }
  }
  console.log(firstLetterToWords)
  console.log(output)





}

kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]);

// console.log(wordsInCommon(['one', 'two', 'apple', 'berry'], ['apple', 'one', 'balloon']))