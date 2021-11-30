let n = 5;
let string = "";
for (let i = 1; i <= Math.round (n/2); i++) {
  for (let j = 1; j <= Math.round (n/2) - i; j++) {
    string += " ";
  }
  
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
// https://www.tutorialstonight.com/js/javascript-star-pattern.php