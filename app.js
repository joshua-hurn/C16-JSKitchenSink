// This is a variable with my name.
let myName = "Josh";

// const variable with an age.
const age = 21;

// stored result of 5 + 4
let result = 5 + 4;

function alertWord(word) {
    alert(word)
}

alertWord("Hello World");
alertWord("This is another alert");

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let favVeggies = [
    "Corn",
    "Beans",
    "Potato",
    "Onion",
    "Brussels Sprouts"
];

for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i])
}

let pet = {
    name: "Jeffery",
    breed: "short-hair"
};

// dot notation
console.log(pet.name, pet.breed);

let people = [
    {
        name: "Charles",
        age: 21
    },
    {
        name: "Abby",
        age: 27
    },
    {
        name: "James",
        age: 17
    },
    {
        name: "John",
        age: 19
    },
    {
        name: "Garrett",
        age: 22
    }
];

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(word) {
    return word.length
}

let wordLength = getLength('Hello World');

if (wordLength % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place.'); 
}
