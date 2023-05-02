//arrow style
//const myFunction = (letter) => {
//    console.log(letter);
//}
//dot style
function myFunction(letter) {
  console.log(letter);
}
//demo
const alphabet = ["a", "b", "c", "d"];
alphabet.forEach(myFunction);

//SORT, same array just in alpha order
const fruits = [
  "banana",
  "strawberry",
  "mango",
  "kiwi",
  "grapes",
  "coconut",
  "pineapple",
];
console.log(fruits.sort());

//MAP

function addOne(num) {
  return num + 1;
}

const myNumArray = [1, 2, 3];
const newArray = myNumArray.map(addOne);
console.log(newArray);

//Filter

const isAdult = (age) => {
  return age >= 18;
};

const ages = [28, 34, 52, 16, 17];
const result = ages.filter(isAdult);
console.log(result);

//reduce
const add = (total, num) => {
  return total + num;
};
let numsToAdd = [10, 20, 30];
console.log(numsToAdd.reduce(add));
