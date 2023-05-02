//scope ex1
const sum = 0;
//sum = global scope, out of loop
for (let i = 0; i < 10; i++) {
  let num = i;
  console.log(sum);
} //i and num = block scope

//scope ex2
const sum1 = 0;
//sum = globa scope
const loop = () => {
  for (let i = 0; i < 10; i++) {
    const num1 = i;
  }
}; // i and num = function and block scope
console.log(sum1);
