"use strict";


/** 1. isHometown */

const isHometown = (town) => {
  return town === 'San Francisco';
};


// ** 2. getFullName */

const getFullName = (first, last) => {
  return`${first} ${last}`;
}


/** 3. calculateTotal */

const calculateTotal = (basePrice, state, tax=0.05) => {
  let subtotal = basePrice * (1 + tax);
  let fee = 0;

  if (state === 'CA'){
    fee = 0.03 * subtotal;
  }else if (state === 'PA'){
    fee = 2;
  }else if (state === 'MA'){
    if (basePrice <= 100){
    fee = 1;
  }else{
    fee = 3;
  }
  }
  return subtotal + fee
}

// console.log(isHometown('San Francisco'));
// console.log(isHometown('Sacramento'));
// console.log(getFullName('Brittany', 'Morton'));
console.log(calculateTotal(10, 'CA'));
console.log(calculateTotal(10, 'PA'));
console.log(calculateTotal(10, 'MA'))