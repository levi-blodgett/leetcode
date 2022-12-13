// https://leetcode.com/discuss/interview-question/860489/google-phone-design-a-spreadsheet
var spreadsheet = {};

const getCell = (key) => {
    var cell = spreadsheet[key];

    if (cell && typeof (cell.val) === "number") {
        return cell.val;
    };

    var split = cell.val.split("=")[1].split("+");

    return getCell(split[0]) + getCell(split[1]);
}

const setCell = (key, value) => {
    var cell = {
        name: key,
        val: value
    };

    spreadsheet[key] = cell;
}

setCell("A1", 13);
setCell("A2", 14);
setCell("A3", "=A1+A2");
setCell("A4", "=A1+A3");
setCell("A5", "=A1+A4");

console.log(spreadsheet);
console.log(getCell("A5"));