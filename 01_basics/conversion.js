// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

console.log("2" === 2);

console.log(1 + 2 + "2"); // 32
// js adds the first two numbers as it checks the declared datatypes of the literals and performs action accordingly
console.log("1" + 2 + 2); // 122
//similarly here it converts all the numbers into string values as the first + is treated as addition and not not concatenation

console.log(true); //true
console.log(+true); // 1
console.log(+""); // 0

