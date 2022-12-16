function Spreadsheet() {
    // Create an empty object to store cell values
    this.cells = {};

    // Define the set_cell() method
    this.set_cell = function (cell, value) {
        // Set the value of the given cell
        this.cells[cell] = value;
    }

    // Define the get_cell() method
    this.get_cell = function (cell) {
        // Get the value of the given cell
        let value = this.cells[cell];

        // If the value is a formula, evaluate it and return the result
        if (value[0] === "=") {
            // Split the formula into its component halves after getting rid of = sign
            let halves = value.slice(1).split("+");

            // If there are no halves, return 0
            if (halves.length === 0) {
                return 0;
            }

            // Evaluate each part and add it to the result
            let result = 0;
            for (let i = 0; i < halves.length; i++) {
                result += this.get_cell(halves[i]);
            }
            return result;
        } else {
            // If the value is not a formula, return it as is
            return value;
        }
    }
}

// Create a new spreadsheet
let sheet = new Spreadsheet();

// Set the values of some cells
sheet.set_cell("A1", 13);
sheet.set_cell("A2", 14);
sheet.set_cell("A3", "=A1+A2");

// Log the result of getting cells
console.log(sheet.get_cell("A1"));
console.log(sheet.get_cell("A3"));