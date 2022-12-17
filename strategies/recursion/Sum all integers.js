// Write a recursive function that given an input n sums all nonnegative integers up to n.

function sum(n) {
  if (n < 0) {
    return 0;
  }
  return n + sum(n - 1);
}