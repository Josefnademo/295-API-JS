/**
 * Vous devez coder une fonction fléchée qui retourne l'animal (donc l'objet js)
 * qui a une menace (threat) de 5 unités.
 */

const animals = [
  { name: "frog", threat: 0 },
  { name: "monkey", threat: 5 },
  { name: "gorilla", threat: 8 },
  { name: "lion", threat: 10 },
];
// Solution utilisant le paradigme procédurale
const SearchFor5 = ()=> {  // = ()   Cela signifie que la méthode ne contient aucune valeur.
for(const animal of animals ){
  if(animal.threat===5){
    return animal;
  }
}}

// Solution utilisant le paradigme fonctionnel
function searchAnimal(){
  return animals.find((element)=> element.threat==5  );
}
const menace =animals.find((threat)=> threat==5 );

console.log(searchAnimal());
console.log(SearchFor5());
// returns object - {name: "monkey", threat: 5}


/*The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.*/

/*The find() method returns the value of the first element that passes a test.*/ 

/*The find() method executes a function for each array element.
The find() method returns undefined if no elements are found.
The find() method does not execute the function for empty elements.
The find() method does not change the original array.*/