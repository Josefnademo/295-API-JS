/**
 * Vous devez faire la somme des entiers présent dans le tableau numbers
 */

let numbers = [1, 2, 3, 4, 5];

// Solution utilisant le paradigme procédurale

for(i=0; i<= numbers.length; i++){
   smu += numbers[i];
   
   }
// Solution utilisant le paradigme fonctionnel

const sum = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue, 0); //0 the start value of calculating
console.log(sum); // 15
console.log(SUM);
/*he reduce() method of Array instances executes a user-supplied "reducer" callback function on each element 
of the array, in order, passing in the return value from the calculation on the preceding element.
 The final result of running the reducer across all elements of the array is a single value.*/