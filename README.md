# Unexpected Behavior with Negative Input in TypeScript

This code demonstrates unexpected behavior when a negative number is passed as input to a function that iterates using a for loop.  The loop silently does nothing instead of throwing an error or producing expected output.

## Bug Report

The `printNumbers` function is intended to print numbers from 1 to n.  When a positive number is supplied it works correctly. However, when a negative number is provided, the loop condition `i <= n` is always false (1 > -5), resulting in no numbers being printed. This is a subtle bug that might go unnoticed. 

## Solution

The solution involves adding an explicit check for negative input to handle it appropriately. This can be done by either throwing an error, printing an error message, or returning early.

## How to Reproduce

1. Save the code in a file named `bug.ts`.
2. Compile and run the code using a TypeScript compiler (tsc) and node.
3. Observe the unexpected behavior when calling `printNumbers` with a negative argument.