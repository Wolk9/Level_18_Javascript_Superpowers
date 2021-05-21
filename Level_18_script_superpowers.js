const superHeroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
  }
];

// 1:
console.log("Array met alle superhelden: ", superHeroes);

// 2:
const lightweightSuperHeroes = superHeroes.filter(
  (superHeroes) => superHeroes.weight <= 190
);
console.log("Array met lichte superhelden: ", lightweightSuperHeroes);

// 3:
const exact200 = superHeroes
  .filter((superHeroes) => superHeroes.weight == 200)
  .map((obj) => obj.name);

console.log("Array met voornamen 200 lbs superhelden: ", exact200);

// 4:
const firstApp = superHeroes.map(
  (superHeroes) => superHeroes.name + ": " + superHeroes.first_appearance
);

console.log("Array van first Appearces", firstApp);

// 5:
const publishDCC = superHeroes
  .filter((superHeroes) => superHeroes.publisher == "DC Comics")
  .map((obj) => obj.name);

const publishMC = superHeroes
  .filter((superHeroes) => superHeroes.publisher == "Marvel Comics")
  .map((obj) => obj.name);

console.log("Door DC Comics uitgegegen: ", publishDCC);
console.log("Door Marvel Comics uitgegeven: ", publishMC);

// 6 & 7

const allWeightDCC = superHeroes
  .filter((superHeroes) => superHeroes.publisher == "DC Comics")
  .map((obj) => parseInt(obj.weight))
  .filter(Boolean)
  .reduce((addValue, currentValue) => addValue + currentValue);

const allWeightMC = superHeroes
  .filter((superHeroes) => superHeroes.publisher == "Marvel Comics")
  .map((obj) => parseInt(obj.weight))
  .filter(Boolean)
  .reduce((addValue, currentValue) => addValue + currentValue);

const allWeight = allWeightMC + allWeightDCC;

console.log("Sum off all DC Comics superheroes is: " + allWeightDCC);
console.log("Sum off all Marvel Comics superheroes is: " + allWeightMC);
console.log("Sum Total of all weight of superheroes is:" + allWeight);

// outcome DC Comics: 1316
// outcome Marvel Comics: 2637=
// outcome ALL: 3953

// 8:

// const exact200 = superHeroes
//   .filter((superHeroes) => superHeroes.weight == 200)
//   .map((obj) => obj.name);

// console.log("Array met voornamen 200 lbs superhelden: ", exact200);

// gooi eerst de superheld met geen gewicht eruit
// maak van de gewichten integers
// dan selecteer het item met het hoogste gewicht
// log de naam van dat item

/* Dit had ik eerst:

const superHeroesWithWeight = superHeroes.filter(
  (obj) => obj.weight != "unknown"
);

var max = superHeroes.reduce((prev, current) =>
  +prev.weight > +current.weight ? prev : current
);

Maar zo is ie uiteindelijk mooier: */

const superHeroesWithWeight = superHeroes
  .filter((obj) => obj.weight != "unknown")
  .reduce((prev, current) => (+prev.weight > +current.weight ? prev : current));

console.log(
  "The superhero with the highest weight is: " +
    superHeroesWithWeight.name +
    " with a weight of " +
    superHeroesWithWeight.weight
);
