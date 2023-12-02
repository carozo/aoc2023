const fs = require("fs");

const rawInput = fs.readFileSync("./input.txt", "utf-8");

const input = rawInput
  .replaceAll("four", "4")
  .replaceAll("six", "6")
  .replaceAll("seven", "7")
  .replaceAll("eight", "e8t")
  .replaceAll("nine", "9e")
  .replaceAll("zero", "0o")
  .replaceAll("one", "o1e")
  .replaceAll("two", "t2o")
  .replaceAll("three", "t3e")
  .replaceAll("five", "5e");

const lines = input.split("\n");

const getCalibrationNumber = (line) => {
  let pointer;
  let result;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char >= 0 && char <= 9) {
      if (!pointer) {
        result = char;
        pointer = char;
      } else {
        pointer = char;
      }
    }
  }
  return parseInt(result + pointer);
};

const calibrationNumbers = lines.map((line) => getCalibrationNumber(line));

const result = calibrationNumbers.reduce((acc, curr) => acc + curr, 0);

console.log(calibrationNumbers);

console.log(result);
