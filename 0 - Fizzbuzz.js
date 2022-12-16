// Iterative
// function intToFizzbuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }


function intToFizzbuzz(i) {
    let entry = "";
    if (i % 3 === 0)
        entry += "fizz";
    if (i % 5 === 0)
        entry += "buzz";
    if (i % 3 !== 0 && i % 5 !== 0)
        entry = i;
    return entry;
}

for (let i = 1; i <= 100; i++) {
    console.log(intToFizzbuzz(i))
}