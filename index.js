//import file
const coffeeMenu = require("./coffee_data");
//print array of drinks
const printName = (item) => {
  return item.name;
};
console.log(coffeeMenu.map(printName));
//print array of drinks under $5
const under5 = (item) => {
  return item.price <= 5;
};
const itemsUnder5 = coffeeMenu.filter(under5);
console.log(itemsUnder5);
//print even priced drinks

//print total if ordering all drinks
const findPriceArray = (item) => {
  return item.price;
};
const priceArray = coffeeMenu.map(findPriceArray);
const sumTotalCost = (accumulator, currentValue) => {
  return accumulator + currentValue;
};
const totalPrice = priceArray.reduce(sumTotalCost);
console.log("$" + totalPrice);
//print seasonal drinks

//print seasonal with "with imported beans"asa
