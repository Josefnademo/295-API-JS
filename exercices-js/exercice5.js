/**
 * A l'aide de l'opération de déconstruction `spread`, vous devez
 * créer l'objet javascript : { id: 12, name: 'monkey', threat: 5, food: 'banana' }
 */

const information_part1 = { name: "monkey", threat: 5 };

const information_part2 = { id: 12, food: "banana" };

/*
Pour plus d'information sur l'opérateur spread
https://herewecode.io/fr/blog/operateur-spread-javascript/
*/

/*const monkey {
   id: information.id,
   ...information_part1,
   food: information_part2,
 
}
const monkey1 {
...{id: information_part2.id},
...information_part2,
...{food:information_part2},
...
}*/
const monkey = {
   ...information_part1, // Раскрываем свойства information_part1
   ...information_part2  // Раскрываем свойства information_part2
};

console.log(monkey);
console.log(monkey1);
// doit afficher exactement cela
// { id: 12, name: 'monkey', threat: 5, food: 'banana' }


/*The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero 
or more arguments (for function calls) or elements (for array literals) are expected. In an object literal,
 the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.*/