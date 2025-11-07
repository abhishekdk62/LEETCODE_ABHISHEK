var countPrimes = function(n) {
  if (n < 3) return 0;
  let primes = [2];

  for (let i = 3; i < n; i += 2) { // skip even numbers
    let flag = false;
    for (let j = 3; j * j <= i; j += 2) { // skip even divisors
      if (i % j == 0) {
        flag = true;
        break;
      }
    }
    if (!flag) primes.push(i);
  }

  return primes.length;
};
