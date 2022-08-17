// Recursion

let counter = 0;

function inception() {
  if (counter > 3) {
    return "done";
  }
  counter++;

  return inception();
}

inception();

//1 Identify the base case
//2 Identfy the recursive case
//3 Get closer and closer and return when needed. Usually you have 2 returns.

//Find Factorial Recursive O(n)

function findFactorialRecursive(number) {
  console.log(number);

  if (number === 2 ){
    return 2;
  }

  return number * findFactorialRecursive(number -1);
}

 // Find Fibonacci Sequence

 function findFibonacciRecursive(n){
    if( n<2){
        return n; 
    }

    return findFibonacciRecursive(n-1) + findFibonacciRecursive(n-2);
 }

 console.log( findFibonacciRecursive(24) )
