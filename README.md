# Frontend Fundamentals Assignment Day 2

## 1. Variables & Data Types
**Concepts:** var, let, const, primitive types

### Assignment
Write a function that accepts different data types and prints their type using `typeof`.

#### Answer
```javascript
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
```

### Assignment
Explain the difference between `null` and `undefined` with code.

#### Answer
```javascript
let y; // variable intentionally set to undefined
console.log(y); // Output: undefined

let obj = { property: null }; // property intentionally set to null
console.log(obj.property); // Output: null

// The main difference between null and undefined is that null is an assignment value (which we intentionally set) and undefined is a default value (which we did not set). The variable is undefined if it has never been assigned a value.
```

---

## 2. Functions
**Concepts:** normal functions, arrow functions

### Assignment
Write a normal function to add two numbers.

#### Answer
```javascript
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));
```

### Assignment
Convert the above function into an arrow function.

#### Answer
```javascript
const add_arrow = (a, b) => {
    return a + b;
}

console.log(add_arrow(1, 2));
```

---

## 3. Strings
**Concepts:** string methods

### Assignment
Difference between `==` and `===` in JavaScript with examples.

#### Answer
```javascript
console.log(1 == "1"); // true
console.log(1 === "1"); // false
// == this checks for value only even if the type is different it will try to typecast it and then try to compare them 
// === this checks for both value and type
```

### Assignment
Convert "hello world" to title case.

#### Answer
```javascript
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

console.log(toTitleCase("hello world"));
```

---

## 4. Objects
**Concepts:** object creation, access, iteration

### Assignment
Create a `user` object with properties `name`, `age`, and `city`.

#### Answer
```javascript
const user = {
    name: "Aviraj",
    age: 22,
    city: "Pune"
}
```

### Assignment
Print all keys and values using `Object.keys`, `Object.values` and `forEach` loop.

#### Answer
```javascript
Object.keys(user).forEach(key => {
  const value = user[key];
  console.log(`${key}: ${value}`);
});

Object.values(user).forEach(value => {
  console.log(value);
});
```

### Assignment
Add new property `mobileNumber` and delete `city` properties dynamically.

#### Answer
```javascript
user.mobileNumber = 1234567890;
console.log(user);

delete user.city;
console.log(user);
```

### Assignment
Convert below array of object group by role.

**Input:**
```javascript
const users = [
  { name: "Pratik", role: "admin" },
  { name: "Amit", role: "user" },
  { name: "Neha", role: "admin" },
  { name: "Ravi", role: "user" },
];
```

**Expected Output:**
```javascript
{
  admin: [
    { name: "Pratik", role: "admin" },
    { name: "Neha", role: "admin" }
  ],
  user: [
    { name: "Amit", role: "user" },
    { name: "Ravi", role: "user" }
  ]
}
```

#### Answer
```javascript
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
```

---

## 5. Array Methods (Important)
**Concepts:** map, filter, reduce

Arguments:
```javascript
const arr = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];
console.log(arr);
```

### Assignment
Use `map` to multiply each array element by 2.

#### Answer
```javascript
const map = arr.map((num) => num * 2);
console.log(map);
```

### Assignment
Use `filter` to find numbers greater than 10.

#### Answer
```javascript
const filter = arr.filter((num) => num > 10);
console.log(filter);
```

### Assignment
Use `reduce` to find the sum of array elements.

#### Answer
```javascript
const reduce = arr.reduce((acc, num) => acc + num, 0);
console.log(reduce);
```

### Assignment
Reverse an array.

#### Answer
```javascript
const reverse = arr.reverse();
console.log(reverse);
```

---

## 6. ES6+ Features
**Concepts:** destructuring, spread, rest

### Assignment
Destructure an object and console name and age from it.

```javascript
const user_d = {
    name: "Akshay",
    age: 25,
    city: "Pune"
};
```

#### Answer
```javascript
const { name, age } = user_d;
console.log(name); // Akshay
console.log(age); // 25
```

### Assignment
Merge two arrays using spread operator.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
```

#### Answer
```javascript
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);
```

### Assignment
Create a function accepting 5 numbers using rest parameters and display sum of all numbers from function.

#### Answer
```javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
```

---

## 7. Closures
**Concepts:** closures, lexical scope

### Assignment
Create a counter function using closure.

#### Answer
```javascript
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
```

### Assignment
Explain how inner functions access outer variables.

#### Answer
In a closure, the inner function maintains a reference to the scope of its outer function, even after the outer function has finished executing.

---

## 8. Callbacks
**Concepts:** callback functions

### Assignment
Create a function that accepts a callback and executes it after 10 seconds.

#### Answer
```javascript
function executeCallback(callback) {
    setTimeout(callback, 10000);
}
executeCallback(() => console.log("Callback executed after 10 seconds"));
```

---

## 9. Promises
**Concepts:** Promise, then, catch

### Assignment
Create a function called `getUserData` that:
* Returns a Promise
* Resolves with user details object contains name, age, city if userId is 1
* Rejects with an error message if userId is 0
* Handles the response using `.then()` and `.catch()`

#### Answer
```javascript
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
```

### Assignment
Guess the execution sequence of below code:

```javascript
console.log("1: Start");
setTimeout(() => {
  console.log("2: setTimeout");
}, 0);
Promise.resolve().then(() => {
  console.log("3: Promise");
});
console.log("4: End");
```

#### Answer
```text
1: Start
2: End
3: Promise
4: setTimeout
```

---

## 10. Async / Await
**Concepts:** async functions, error handling

### Assignment
Convert the question 1 from assignment 9, to async/await with try, catch block.

#### Answer
```javascript
/*
async function getUserData(userId) {
    try {
        if (userId === 1) {
            resolve({ name: "John", age: 30, city: "New York" });
        } else {
            reject("User not found");
        }
    } catch (error) {
        console.log(error);
    }
}
getUserData(1)
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
*/
```

---

## 11. DOM Manipulation
**Concepts:** DOM selection, events

### Assignment
Take one div with some text and change text of an element on button click.
```html
<div id="message">Hello World</div>
<button id="changeBtn">Change Text</button>
```

#### Answer
```javascript
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
    message.textContent = "Text Changed";
});
```

### Assignment
Add a new list item dynamically.
```html
<ul id="list"><li>Item 1</li></ul>
<button id="addItem">Add Item</button>
```

#### Answer
```javascript
const list = document.getElementById("list");
const addItem = document.getElementById("addItem");
addItem.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Item " + (list.children.length + 1);
    list.appendChild(li);
});
```

### Assignment
Remove an element from the DOM.
```html
<p id="removeMe">Remove this text</p>
<button id="removeBtn">Remove</button>
```

#### Answer
```javascript
const removeMe = document.getElementById("removeMe");
const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", () => {
    removeMe.remove();
});
```

### Assignment
Display input value on screen while typing.
```html
<input type="text" id="inputBox" />
<p id="output"></p>
```

#### Answer
```javascript
const inputBox = document.getElementById("inputBox");
const output = document.getElementById("output");
inputBox.addEventListener("input", () => {
    output.textContent = inputBox.value;
});
```

---

## 12. Timers
**Concepts:** setInterval

### Assignment
Create a countdown timer using `setInterval`.

#### Answer
```javascript
function countdown(seconds) {
    const timer = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
```