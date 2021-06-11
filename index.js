//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
const input = require('readline-sync');

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggie = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let drink = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let addOn = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

let mealNumber = 0;
let pantry = [];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

for (i=0; i < protein.length; i++) {
    console.log(protein[i], grain[i], veggie[i], drink[i], addOn[i]);
}
console.log();

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

mealNumber=input.question("How many meals need to be assembled? ");
while (mealNumber <1 || mealNumber >6 || isNaN(mealNumber)) {
  mealNumber=input.question("How many meals need to be assembled? 1-6 only please! ");
}
for (i=0; i < mealNumber; i++) {
    console.log(`Tonights menu is grilled ${protein[i]}, seasoned ${grain[i]}, buttered ${veggie[i]}, ice cold ${drink[i]},and yummy ${addOn[i]}`);
    if(veggie[i].includes('kale')) {
      console.log("Don't worry! You can have ice cream tomorrow!");
      console.log()
    } else {
      console.log();
    }
}

pantry.push(protein);
pantry.push(grain);
pantry.push(veggie);
pantry.push(drink);
pantry.push(addOn);

console.log(pantry);

/*Skill boosts: 
//a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”*/