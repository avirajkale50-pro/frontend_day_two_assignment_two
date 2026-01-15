// 1 . Variables & Data Types
// Concepts: var, let, const, primitive types

// Assignments : 

// Write a function that accepts different data types and prints their type using typeof.
// Answer : 
function dataType(data) {
    console.log(typeof data);
}

dataType(15)
dataType("Hello")
dataType(true)
dataType(null)
dataType(undefined)
dataType({ name: "Aviraj" })
dataType([1, 2, 3])
dataType(function () { });


// Explain the difference between null and undefined with code.
// Answer : 
let y; // variable intentionally set to undefined
console.log(y); // Output: undefined

let obj = { property: null }; // property intentionally set to null
console.log(obj.property); // Output: null

// The main difference between null and undefined is that null is an assignment value (which we intentionally set) and undefined is a default value (which we did not set). The variable is undefined if it has never been assigned a value.

console.log("--------------------------------------------------------------------------------------------------------------------------------");


// 2 Functions
// Concepts: normal functions, arrow functions

// Assignments
// Write a normal function to add two numbers.
// Answer : 
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));    


// Convert a above function into an arrow function.
// Answer : 
const add_arrow = (a, b) => {
    return a + b;
}

console.log(add_arrow(1, 2));

console.log("--------------------------------------------------------------------------------------------------------------------------------");


// 3 Strings
// Concepts: string methods

// Write difference between == and === in java script with examples.
// Answer : 
console.log(1 == "1"); // true
console.log(1 === "1"); // false
// == this check for value only even if the type is different it will try to typecast it and then try to compare them 
//=== this check for both value and type

// "hello world" convert to title case. 
// Answer :    

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

console.log(toTitleCase("hello world"));

console.log("--------------------------------------------------------------------------------------------------------------------------------");

// 4 Objects
// Concepts: object creation, access, iteration

// Assignments
// Create a user object with properties name, age, and city.
// Answer : 
const user = {
    name: "Aviraj",
    age: 22,
    city: "Pune"
}
// Print all keys and values using methods Object.keys, Object.values and forEach loop
//Answer :
Object.keys(user).forEach(key => {
  const value = user[key];
  console.log(`${key}: ${value}`);
});

Object.values(user).forEach(value => {
  console.log(value);
});


// Add new property mobileNumber and delete city properties dynamically.
// Answer : 
user.mobileNumber = 1234567890;
console.log(user);

delete user.city;
console.log(user);

// Convert below array of object group by role
// Input :

const users = [
  { name: "Pratik", role: "admin" },
  { name: "Amit", role: "user" },
  { name: "Neha", role: "admin" },
  { name: "Ravi", role: "user" },
];

//Expected Output: 
// {
//   admin: [
//     { name: "Pratik", role: "admin" },
//     { name: "Neha", role: "admin" }
//   ];
//   user: [
//     { name: "Amit", role: "user" },
//     { name: "Ravi", role: "user" }
//   ]
// }

//Answer :
function groupByRole(users) {
  return users.reduce((acc, user) => {
    if (!acc[user.role]) {
      acc[user.role] = [];
    }
    acc[user.role].push(user);
    return acc;
  }, {});
}

console.log(groupByRole(users));

console.log("--------------------------------------------------------------------------------------------------------------------------------");


// 5 Array Methods (Important)
// Concepts: map, filter, reduce

const arr = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];
console.log(arr);
// Assignments
// Use map to multiply each array element by 2.
// Answer : 
const map = arr.map((num)=>num*2);
console.log(map);

// Use filter to find numbers greater than 10.
// Answer : 
const filter = arr.filter((num)=>num>10);
console.log(filter);

// Use reduce to find the sum of array elements.
// Answer : 
const reduce = arr.reduce((acc,num)=>acc+num,0);
console.log(reduce);

// Reverse an array.
// Answer : 
const reverse = arr.reverse();
console.log(reverse);

console.log("--------------------------------------------------------------------------------------------------------------------------------");


// 6 ES6+ Features
// Concepts: destructuring, spread, rest

// Assignments
// Destructure an object and console name and age from it.
    const user_d = {
        name: "Akshay",
        age: 25,
        city: "Pune"
    };
// output : 
// console.log(user.name); // Akshay
// console.log(user.age); // 25

//Answer : 
const { name, age } = user_d;
console.log(name); // Akshay
console.log(age); // 25


// Merge two arrays using spread operator.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Output: 
// console.log(mergedArray);
// [1, 2, 3, 4, 5, 6]
//Answer : 
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);


//  Create a function accepting 5 numbers using rest parameters and display sum of all numbers from function.
//Answer : 
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

console.log("--------------------------------------------------------------------------------------------------------------------------------");

// 7 Closures
// Concepts: closures, lexical scope

// Assignments
// Create a counter function using closure.
// Answer : 
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter1 = counter();
console.log(counter1()); 
console.log(counter1()); 
console.log(counter1()); 

// Explain how inner functions access outer variables.
// Answer : 
// In a closure, the inner function maintains a reference to the scope of its outer function, even after the outer function has finished executing.

console.log("--------------------------------------------------------------------------------------------------------------------------------");

// 8 Callbacks
// Concepts: callback functions

// Assignments
// Create a function that accepts a callback and executes it after 10 seconds.
// Answer : 
function executeCallback(callback) {
    setTimeout(callback, 10000);
}
executeCallback(() => console.log("Callback executed after 10 seconds"));

console.log("--------------------------------------------------------------------------------------------------------------------------------");

// 9 Promises
// Concepts: Promise, then, catch

// Assignments
// Create a function called getUserData that:
// Returns a Promise
// Resolves with user details object contains name, age, city if userId is 1
// Rejects with an error message if userId is  0
// Handles the response using .then() and .catch()
// Answer : 
function getUserData(userId) {
    return new Promise((resolve, reject) => {
        if (userId === 1) {
            resolve({ name: "John", age: 30, city: "New York" });
        } else {
            reject("User not found");
        }
    });
}
getUserData(1)
    .then((user) => console.log(user))
    .catch((error) => console.log(error));


//Guess the execution sequence of below code
//Code : 
console.log("1: Start");
setTimeout(() => {
  console.log("2: setTimeout");
}, 0);
Promise.resolve().then(() => {
  console.log("3: Promise");
});
console.log("4: End");
//Answer : 
//1: Start
//2: End
//3: Promise
//4: setTimeout

console.log("--------------------------------------------------------------------------------------------------------------------------------");

// 10 Async / Await
// Concepts: async functions, error handling

// Assignments
// Convert the question 1 from assignment 9, to async/await with try , catch block.
// Answer : 
// async function getUserData(userId) {
//     try {
//         if (userId === 1) {
//             resolve({ name: "John", age: 30, city: "New York" });
//         } else {
//             reject("User not found");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// getUserData(1)
//     .then((user) => console.log(user))
//     .catch((error) => console.log(error));

console.log("--------------------------------------------------------------------------------------------------------------------------------");

// 11 DOM Manipulation
// Concepts: DOM selection, events

// Assignments
// Take one div with some text and change text of an element on button click.
    // <div id="message">Hello World</div>
    //<button id="changeBtn">Change Text</button>
//Answer : 
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
    message.textContent = "Text Changed";
});

// Add a new list item dynamically.
// <ul id="list"><li>Item 1</li></ul>
// <button id="addItem">Add Item</button>
//Answer : 
const list = document.getElementById("list");
const addItem = document.getElementById("addItem");
addItem.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Item " + (list.children.length + 1);
    list.appendChild(li);
});

// Remove an element from the DOM.
// <p id="removeMe">Remove this text</p>
// <button id="removeBtn">Remove</button>
//Answer : 
const removeMe = document.getElementById("removeMe");
const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", () => {
    removeMe.remove();
});

// Display input value on screen while typing.
// <input type="text" id="inputBox" />
// <p id="output"></p>
//Answer : 
const inputBox = document.getElementById("inputBox");
const output = document.getElementById("output");
inputBox.addEventListener("input", () => {
    output.textContent = inputBox.value;
});

console.log("--------------------------------------------------------------------------------------------------------------------------------");


// 12 Timers
// Concepts: setInterval

// Assignments
// Create a countdown timer using setInterval.
//Answer : 
function countdown(seconds) {
    const timer = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
