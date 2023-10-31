/* complex_code.js */

// This code demonstrates a complex algorithm for generating prime numbers

// Function to check if a given number is prime
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to generate prime numbers up to a given limit
function generatePrimes(limit) {
    let primes = [];
    
    // Use Sieve of Eratosthenes algorithm to find primes
    let sieve = new Array(limit + 1).fill(true);
    for (let p = 2; p * p <= limit; p++) {
        if (sieve[p] === true) {
            for (let i = p * p; i <= limit; i += p) {
                sieve[i] = false;
            }
        }
    }

    // Collect the prime numbers
    for (let p = 2; p <= limit; p++) {
        if (sieve[p]) {
            primes.push(p);
        }
    }

    return primes;
}

// Example usage
let primes = generatePrimes(100);
console.log(primes);

// Function to calculate sum of prime numbers
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Calculate the sum of the generated prime numbers
let sum = calculateSum(primes);
console.log('Sum of prime numbers:', sum);

// Function to find the nth prime number
function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
        if (isPrime(num)) {
            count++;
        }
        num++;
    }
    return num - 1;
}

// Find the 10th prime number
let nthPrime = findNthPrime(10);
console.log('10th prime number:', nthPrime);

// Function to check if a given number is a perfect square
function isPerfectSquare(n) {
    let sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}

// Function to find the sum of all prime numbers that are also perfect squares
function sumOfPerfectSquarePrimes(limit) {
    let sum = 0;
    let count = 0;
    let num = 2;

    while (count < limit) {
        if (isPrime(num) && isPerfectSquare(num)) {
            sum += num;
            count++;
        }
        num++;
    }
    return sum;
}

// Find the sum of the first 5 prime numbers that are perfect squares
let sumOfPerfectSquares = sumOfPerfectSquarePrimes(5);
console.log('Sum of prime number perfect squares:', sumOfPerfectSquares);

// ... continue with more complex code if desired ...