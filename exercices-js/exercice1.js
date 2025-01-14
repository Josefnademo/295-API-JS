/**
 * Vous devez constuire un tableau contenant le carré de chaque entier présent dans le tableau 'numbers'
 */

let numbers = [1, 2, 3, 4, 5];
let result;

// Solution utilisant le paradigme procédurale

//solution 1
numbers.forEach(element => {
    
for (let i = 0; i< numbers.length; index++) {
    element[i]*element[i]==result;
    console.log(result);
}
});

//solution 2
for (let i = 0; i< numbers.length; index++) {
    element[i]*element[i]==result;
    console.log(result);
}

// Solution utilisant le paradigme fonctionnel

let squaredNumbers= numbers.map(element=> element*element);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]


// Afficher le résultat sur une page Web
document.getElementById("output").innerText = `Resultat: ${squaredNumbers.join(", ")}`;