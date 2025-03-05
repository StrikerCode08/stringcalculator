class StringCalculator {
  constructor() {
    this.defaultDelimiters = [",", "\n", " "];
  }
  add(numberString) {
    if (!numberString.trim()) return 0;
    let delimiters = [...this.defaultDelimiters];
    if (numberString.startsWith("//")) {
      const parts = numberString.split("\n");
      delimiters = [parts[0].slice(2)];
      numberString = parts[1];
    }
    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
    let numbers = numberString.split(delimiterRegex).map(Number);
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }
    numbers = numbers.filter((num) => num <= 1000);
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
module.exports = StringCalculator;
