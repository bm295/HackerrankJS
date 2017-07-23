// Write your code here
var tip = mealCost * tipPercent / 100;
var tax = mealCost * taxPercent / 100;
var totalCost = mealCost + tip + tax;
// Use console.log() to print to stdout
console.log('The total meal cost is ' + Math.round(totalCost) + ' dollars.');
