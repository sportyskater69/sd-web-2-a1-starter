"use strict";

// sample data - expanded Star Wars characters with varied ages
const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Iterate through the characters array and output each character's name to the console using console.log(). Then, dynamically create <li> elements for each character name and append them to the HTML unordered list element with the id "names-list".

const namesList = document.getElementById("names-list");

characters.forEach(character => {
  console.log(character.name);

  const li = document.createElement("li");
  li.textContent = character.name;

  namesList.appendChild(li);
});

// 2. Filter the characters array to find only those characters whose age property is less than 40. Log each filtered character's name to the console. Then, dynamically create <li> elements for each filtered character and append them to the HTML unordered list element with the id "young-characters-list".

const youngCharList = document.getElementById("young-characters-list");

const youngChars = characters.filter(character => character.age < 40);

youngChars.forEach(character => {
  console.log(character.name);

  const li = document.createElement("li");
  li.textContent = character.name;

  youngCharList.appendChild(li);
});

// 3. Build a reusable function that accepts an array of character objects as a parameter. Inside the function, iterate through the array and extract each character's name property. Dynamically generate <li> elements for each name and append them to a target HTML list element. Call this function with the characters array and render the results in the unordered list with id "function-list".

function renderCharList(characterArray, targetListId) {

  const listElement = document.getElementById(targetListId);

  listElement.innerHTML = "";

  characterArray.forEach((character, index) => {
    if (!character.name) {
      displayError(`ERROR: Character at the index ${index} has no "name" property.`, "error-handling-list");
      return;
    }

    const li = document.createElement("li");
    li.textContent = character.name;
    listElement.appendChild(li);
  });
}


// 4. Write a function that accepts two parameters: an array of character objects and a numeric age threshold. Inside the function, filter the array to include only characters whose age is below the threshold value. For each filtered character, create an <li> element with their name and append it to the target list. Call this function and render the results in the unordered list with id "age-filter-list".

function renderCharsOverAge(characterArray, ageThresh) {
  const listElement = document.getElementById("age-filter-list");

  listElement.innerHTML = "";

  const charMetThresh = characterArray.filter(character => character.age < ageThresh);

  charMetThresh.forEach((character, index) => {
    if (!character.name) {
      displayError(`ERROR: Character at the index ${index} has no "name" property.`, "error-handling-list");
      return;
    }

    const li = document.createElement("li");
    li.textContent = character.name;
    listElement.appendChild(li);
  });
}


// 5. Enhance your rendering functions from exercises 3 and 4 with error handling logic. Before accessing the name property of each character object, check whether the "name" property exists. If a character object is missing the name property, use console.error() to log a descriptive error message to the console, and dynamically create and display the error message in the HTML div element with id "error-messages".

function displayError(message, location) {
  console.error(message);

  const errorCont = document.getElementById("error-messages");
  const errorMsg = document.createElement("p");
  errorMsg.textContent = message;

  errorCont.appendChild(errorMsg);

  const caughtError = document.getElementById(location);
  const li = document.createElement("li");
  li.textContent = message;
  caughtError.appendChild(li);
}

// 6. Create a second array called "brokenCharacters" that intentionally contains objects with missing name properties (e.g., objects with only id and age). Pass this broken array to your error-handling functions from exercise 5. Verify that your error handling correctly identifies the missing name properties, logs appropriate error messages to the console, and displays those error messages in the HTML div element with id "broken-array-errors".
const brokenCharacters = [
  { id: 11, age: 40 },             // Missing name
  { id: 12, name: "Mace Windu", age: 53 }, // Valid (checks to make sure the error function works)
  { id: 13, age: 28 },             // Missing name
  { id: 14, name: "", age: 20 },   // Name is empty string (Name technically there.)
  { id: 15 },                       // Just id
];

brokenCharacters.forEach((character, index) => {
  if (!character.name) {
    displayError(`ERROR: Character at the index ${index} has no "name" property.`, "broken-array-errors");
    return;
  }
})

renderCharList(characters, "function-list");

renderCharsOverAge(characters, 60);