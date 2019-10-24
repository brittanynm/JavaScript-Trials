"use strict";

const items = ['berry', 'apple', 'banana', 'cherry', 'orange'];

/** 1. printIndices */
const printIndices = (items) => {
	// Replace this with your code

  for (const i in items) {
    console.log(items[i]);
    console.log(i);
  }
};
  // improvement: put them on the same ine

/** 2. everyOtherItem */
const everyOtherItem = (items) => {
	// Replace this with your code
  const result = [];

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  console.log(result);

};

const nums = [1, 30, 4, 21, 100000];

/** 3. smallestNItems */
const smallestNItems = (items, n) => {
	// Replace this with your code
  const sorted_items = items.sort((a, b) => a - b);
  const sliced_list = sorted_items.slice(0, n);
  sliced_list.reverse();
  console.log(sliced_list);

};

// printIndices(items);
// everyOtherItem(items);
smallestNItems(nums, 3);