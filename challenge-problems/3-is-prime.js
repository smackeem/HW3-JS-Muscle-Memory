/***************************************************************************
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true
***************************************************************************/

function isPrime(number) {
  // your code here
  let numOfFactors = 0;
  for(let i = 1; i <= number; i++){
    if(number % i === 0){
      numOfFactors += 1;
    }
  }
  if(numOfFactors === 2){
    return true;
  }else{
    return false;
  }
}

module.exports = isPrime;
