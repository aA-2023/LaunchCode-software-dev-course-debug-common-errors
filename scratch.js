/* let numbers = [2, 4, "eight", 10];
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {   // type of checks to see if is number before doubling. SKIPS non numbers. cool
  let doubled = numbers[i] * 2;
  console.log(doubled);
  }
  else {console.log("These are the douled numbers. Non-numbers may have been skipped.")}
}
 */




function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;  // Supposed to indicate num is NOT prime
      }
    }
    return true; // Supposed to indicate num IS prime
  }

  console.log(isPrime(2)); // Expected true but gets false


  /*         Logic error: the outputs for true and false were flipped around  */
