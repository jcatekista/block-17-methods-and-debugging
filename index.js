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
const evenPrice = coffeeMenu.filter((coffeeMenu) => coffeeMenu.price % 2 === 0);
console.table(evenPrice);
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
const isSeasonal = (item) => {
  return item.seasonal === true;
};
const seasonalItem = coffeeMenu.filter(isSeasonal);
console.table(seasonalItem);
//print seasonal with "with imported beans"asa
const seasonalTotal = seasonalItem.map(
  (coffeeMenu) => coffeeMenu.name + " with imported beans"
);
console.table(seasonalTotal);
