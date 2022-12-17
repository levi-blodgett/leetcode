// Write a function that takes two inputs n and m and outputs the number of unique paths from the top left corner to bottom right corner of a nxm grid. Constraints: You can only move down or right 1 unit at a time.

function uniquePaths(n, m) {
    if (n === 1 || m === 1) {
        return 1;
    }
    return uniquePaths(n - 1, m) + uniquePaths(n, m - 1);
}