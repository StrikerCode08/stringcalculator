class StringCalculator {
  constructor() {
    this.defaultDelimiter = /,|\n/;
  }
  add(numberString) {
    if (numberString === "") return 0;
    let delimiter = this.defaultDelimiter;
    if (numberString.startsWith("//")) {
      const parts = numberString.split("\n");
      delimiter = new RegExp(parts[0].slice(2));
      numberString = parts[1];
    }
    let numbers = numberString.split(delimiter).map(Number);
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }
    numbers = numbers.filter((num) => num <= 1000);
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
module.exports = StringCalculator;
