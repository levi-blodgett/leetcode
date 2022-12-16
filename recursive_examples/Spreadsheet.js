// https://leetcode.com/discuss/interview-question/860489/google-phone-design-a-spreadsheet
const spreadsheet = {}; // Initialize the spreadsheet object

// The getCell() function takes a cell name as input and returns the value of the cell
const getCell = (key) => {
    const cell = spreadsheet[key];

    // If the cell is not found, return undefined
    if (!cell) return;

    // If the cell contains a number, return it
    if (typeof cell.val === "number") return cell.val;

    // Otherwise, assume that the cell contains a formula and try to evaluate it
    const formula = cell.val.split("=")[1]; // Split the formula at the "=" sign
    const operands = formula.split("+"); // Split the formula at the "+" sign

    // Recursively call getCell() on each operand to get its value
    const operandValues = operands.map(getCell);

    // If any operand value is undefined, return undefined
    if (operandValues.includes(undefined)) return;

    // Otherwise, return the sum of the operand values
    return operandValues.reduce((a, b) => a + b);
};

// The setCell() function allows a user to set the value of a cell in the spreadsheet
const setCell = (key, value) => {
    const cell = {
        name: key, // Store the cell's name
        val: value, // Store the cell's value
    };
    spreadsheet[key] = cell; // Add the cell to the spreadsheet
};

// Set some example cells
setCell("A1", 13);
setCell("A2", 14);
setCell("A3", "=A1+A2");
setCell("A4", "=A1+A3");
setCell("A5", "=A1+A4");

console.log(spreadsheet); // Print the spreadsheet to the console
console.log(getCell("A5")); // Print the value of cell A5