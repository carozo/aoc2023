const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");
const lines = input.replaceAll(/Game .*:/g, "").split("\n");
const getPower = (line) => {
  let redMin = 0;
  let greenMin = 0;
  let blueMin = 0;
  line.split(";").forEach((subset) => {
    subset.split(",").forEach((item) => {
      const [number, color] = item.split(" ").splice(1);
      if (color === "red" && parseInt(number) > redMin) {
        redMin = number;
      } else if (color === "green" && parseInt(number) > greenMin) {
        greenMin = number;
      } else if (color === "blue" && parseInt(number) > blueMin) {
        blueMin = number;
      }
    });
  });
  return redMin * greenMin * blueMin;
};
const result = lines.reduce((acc, curr) => getPower(curr) + acc, 0);
console.log(result);
