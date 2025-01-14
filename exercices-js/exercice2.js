/**
 * Vous devez constuire un tableau contenant tous les jours où la temperature est >= à 35 degrés
 */

const weatherData = [
  { date: "01-01-2021", temperature: 30 },
  { date: "01-02-2021", temperature: 35 },
  { date: "01-03-2021", temperature: 40 },
  { date: "01-04-2021", temperature: 38 },
];

// Solution utilisant le paradigme procédurale
/*if( temperature >= 35){
weatherData.forEach((element => (temperature >= 35)){
  console.log(date);
  
});
}*/
//const hotDays = [];
for(let day of weatherData){
  if (day.temperature>= 35){
hotDays.push(day);
  }
}

// Solution utilisant le paradigme fonctionnel
// A VOUS DE COMPLETER ICI
const hotDays= weatherData.filter(day=> day.temperature>=35 );

console.log(`Les jours de canicules sont : ${hotDays.map((day) => day.date)}`);
// Les jours de canicules sont : 01-02-2021,01-03-2021,01-04-2021
