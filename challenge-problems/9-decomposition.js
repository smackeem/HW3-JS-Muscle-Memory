/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/

/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/
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

/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
  // your code here
  let primeNums = []
  let counter = 1;
  while(primeNums.length !== n){
    if(isPrime(counter)){
      primeNums.push(counter)
    }
    counter++;
  }
  return primeNums;
}

/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/
function sumOfNPrimes(n) {
  // your code here
  let primes = firstNPrimes(n);
  let total = 0;
  for(let i = 0; i < primes.length; i++){
    total += primes[i];
  }
  return total;
}

module.exports = { firstNPrimes, isPrime, sumOfNPrimes };
