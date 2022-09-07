class Calculator {
  constructor() {
    //properties
    this.PI = Math.PI;
    this.E = Math.E;
  }

  //getter
  get pi() {
    return `PI (${this.PI})`;
  }
  get e() {
    return `Eulner's number (${this.E})`;
  }

  //methods
  ratio(x, y, width) {
    return (width / y) * x;
  }

  percentage(x, y) {
    return (100 * x) / y;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    y === 0 ? console.log("error") : console.log(x / y);
  }

  modulation(x, y) {
    y === 0 ? console.log("error") : console.log(x % y);
  }

  elevate(x, y) {
    return Math.pow(x, y);
  }

  sqrt(x) {
    return Math.sqrt(x);
  }
}
const calculate = new Calculator();

console.log(calculate.pi); //PI (3.141592653589793)
console.log(calculate.e); //Eulner's number (2.718281828459045)
