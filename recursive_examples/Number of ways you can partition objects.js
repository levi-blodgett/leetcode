// Write a function that counts the number of ways you can partition n objects using parts up to m (assuming m > 0).

function partition(n, m) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }
    if (m === 0) {
        return 0;
    }
    return partition(n - m, m) + partition(n, m - 1);
}