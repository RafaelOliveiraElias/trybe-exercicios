let n = 9;
let string = "";

// External loop https://www.tutorialstonight.com/js/javascript-star-pattern.php
for (let i = 1; i <= Math.round (n/2); i++) {
  // printing spaces
  for (let j = 1; j <=  Math.round(n/2) - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === Math.round(n/2)) {
      string += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);