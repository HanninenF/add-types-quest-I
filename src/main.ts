import "./styles.css";
import {
  averageAge,
  averageNumberOfHobbies,
  getPersonWithMostHobbies,
  getOldestPerson,
  getYoungestPerson,
} from "./func/user-functions";
import {
  averageMonsterAge,
  averageNumberOfTentacles,
  getAllNoWingedMonster,
  numberOfMonstersWithWings,
  prettyPrintMonster,
} from "./func/monster";
import {
  commonColor,
  numberOfColors,
  printAllColors,
} from "./func/dog-functions";
import { printSum } from "./printSum";
import User from "./func/user";
import Dog from "./func/Dog";
import { people } from "./func/persons";

printSum(1, 2);
printSum(5, 12);

console.log(`Vi har ${people.length} stycken användare.`);
console.log(`Medelåldern på alla användare är ${averageAge(people)}`);
console.log(
  `Medelantalet hobbies per användare är ${averageNumberOfHobbies(people)}`
);
// skriv ut "Den personen med flest hobbies har Y stycken hobbies". Byt ut Y mot ett funktionsanrop. Skapa den funktionen.*FÄRDIG

console.log(getPersonWithMostHobbies(people));
// skriv ut "Den äldsta personen är A och den yngsta är B". Byt ut A och B mot funktionsanrop. Skapa de två funktionerna*FÄRDIG

console.log(getOldestPerson(people));
console.log(getYoungestPerson(people));

const dogs: Dog = [
  { name: "Nisse", color: "brown" },
  { name: "Fiffi", color: "white" },
  { name: "Fluffe", color: "black" },
  { name: "Hoppe", color: "beige" },
  { name: "Pluto", color: "gray" },
  { name: "Winter", color: "gray" },
  { name: "Rolf", color: "brown" },
  { name: "Benny", color: "brown" },
  { name: "Krister", color: "brown" },
];

console.log(`Vi har ${dogs.length} stycken hundar.`);
console.log(`Hundarna har ${numberOfColors(dogs)} antal unika färger.`);
console.log(
  `Den vanligaste färgen bland alla hundar är: ${commonColor(dogs)}.`
);
// vi vill ha en pretty print som skriver ut alla färger som hundarna har och hur många hundar det finns av varje färg*FÄRDIG

console.log(printAllColors(dogs));

const monsters = [
  { name: "Florg", age: 1266, tentacles: 29, eyes: 666, hasWings: true },
  { name: "Smirch", age: 78, tentacles: 68, eyes: 2, hasWings: false },
  { name: "Gorge", age: 25, tentacles: 2, eyes: 2, hasWings: false },
  { name: "Fioliviargh", age: 478, tentacles: 6, eyes: 1, hasWings: true },
  { name: "Snorla", age: 42, tentacles: 9, eyes: 9456, hasWings: false },
  {
    name: "Oligarnaclech",
    age: 36,
    tentacles: 675,
    eyes: 148,
    hasWings: true,
  },
  { name: "Milowarg", age: 78, tentacles: 2, eyes: 12, hasWings: false },
  { name: "Znawrl", age: 456, tentacles: 8, eyes: 6, hasWings: true },
  { name: "Welff", age: 6548, tentacles: 34, eyes: 4, hasWings: true },
  { name: "Ulf", age: 56, tentacles: 4, eyes: 2, hasWings: false },
  { name: "Ellorn", age: 423, tentacles: 2, eyes: 2, hasWings: false },
];

console.log(`Vi har ${monsters.length} stycken monster.`);
console.log(`Medelåldern på alla monster är ${averageMonsterAge(monsters)}`);
console.log(
  `Medelantalet tentakler för alla monster är ${averageNumberOfTentacles(
    monsters
  )}`
);

// loopa igenom alla monster och skriv ut dem med prettyPrintMonster
prettyPrintMonster(monsters[0]);

console.log(
  `Antalet monster som har vingar är ${numberOfMonstersWithWings(monsters)}`
);

const noWingedMonster = getAllNoWingedMonster(monsters);
console.log(noWingedMonster);
