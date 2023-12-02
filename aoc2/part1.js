const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");
const lines = input.replaceAll(/Game .*:/g, "").split("\n");
const isGameImpossible = (line) => {
  let impossible;
  line.split(";").forEach((subset) => {
    subset.split(",").forEach((item) => {
      const [number, color] = item.split(" ").splice(1);
      if (
        (color === "red" && number > 12) ||
        (color === "green" && number > 13) ||
        (color === "blue" && number > 14)
      ) {
        impossible = true;
      }
    });
  });
  return impossible;
};
const result = lines.reduce(
  (acc, curr, index) => (isGameImpossible(curr) ? acc : acc + index + 1),
  0
);
console.log(result);
