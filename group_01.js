var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];
var maxSalary = 65000;
console.log(calcBonus(robert));


console.log(individualCalcBonus(2));
console.log(individualCalcBonus(3));
console.log(individualCalcBonus(4));
//taking in one employee at a time.
function calcBonus(employeeArray) {

var result = [];

result[0] = employeeArray[0];
var rating = employeeArray[3];
//set bonus
result[1] = individualCalcBonus(rating);

//adjust for numbers of years
var employeeNumber = employeeArray[1];
result[1] += yearAdjustment(employeeNumber);

var salary = employeeArray[2];
//decreasing the bonus percent by 1%
if(salary > maxSalary) {
  result[1] -=0.01;
 }

 // no bonus can be above 13% or below 0%
if(result[1] > 0.13) {

  result[1] = 0.13;
}
else if(result[1] < 0) {
  result[1] = 0;
}
var percentage = result[1];
var bonus = math.round(salary * percentage);

//new salary
result[2] = salary + bonus;
//bonus
result[3] = bonus;

return result;
}

console.log(individualCalcBonus(2));

 function individualCalcBonus(rating) {
var bonusNumber = 0
   switch(rating) {
     case 1:
     case 2:
     //do nothing
     break;

     case 3:
     bonusNumber = 0.04;
     break;

     case 4:
     bonusNumber = 0.06;
     break;

     case 5:
     bonusNumber = 0.10;
     break;
   }
   if() {
     bonusNumber += 0.05

   }

   function yearAdjustment(employeeNumber) {
     var adjustment = 0
     if(employeeNumber.length == 4) {
     adjustment += 0.05
   }
   return adjustment;
 }
