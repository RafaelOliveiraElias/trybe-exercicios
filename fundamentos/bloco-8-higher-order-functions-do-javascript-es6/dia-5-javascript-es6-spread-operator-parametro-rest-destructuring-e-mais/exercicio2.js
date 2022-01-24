const sum = (...number) => number.reduce(((acc, current)=>acc + current),0);

console.log(sum(1,2,3))
console.log(sum(1,2,3,7))
console.log(sum(1,2,3,9587, 98, 36, 8))

