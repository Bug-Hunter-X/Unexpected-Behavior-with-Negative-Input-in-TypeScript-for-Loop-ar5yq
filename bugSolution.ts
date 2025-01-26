function printNumbers(n: number): void {
  if (n < 1) {
    console.error('Input must be a positive integer.');
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Prints 1 to 5
printNumbers(-5); // Prints 'Input must be a positive integer.'
printNumbers(0); // Prints 'Input must be a positive integer.'