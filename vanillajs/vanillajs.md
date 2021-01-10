# Variables

`var` was originally used to set new variables but in JS ES6 `let` and `const` were introduced

- `var` variables are globally **scoped** or accessible

> This means when they are declared outside a function they are accessible throughout your file or window

- `let` and `const` have **blocked scope**
    - When they are declared inside a function/block of code they can't be accessed outside of it
- `var` variables can be reassigned and updated easily
    - `let` can be updated but not re-assigned
    - `const` is constant

    https://www.notion.so/skinetics/Javascript-NPM-f06b26e1725f4a2c9b4a4a96a01eec36?p=6bc8849243cf459eab9216ec4ebf13f9

```jsx
//Var can be re-assigned
var name = 'Jane Tracy 👩‍💻';
var name = 'Luke Wilsey 🎥';
console.log(name);
//output => Luke wilsey 🎥 

//var can be updated too
var name = 'Spencer 👩‍💻';
name = 'Tom🍄';
console.log(name);
//output => Tom🍄

//let can’t be re-assigned
let name = 'Jane Tracy 👩‍💻';
let name = 'Luke Wilsey 🎥 ';
console.log(name);
//output => Syntax error: the name has already been declared

// let can be updated
let name = 'Spencer 👩‍💻';
name = 'Tom🍄';
console.log(name);
//output => Tom🍄

//const can’t be re-assigned
const name = 'Jane Tracy 👩‍💻';
const name = 'Luke Wilsey 🎥 ';
console.log(name);
//output => Syntax error: the name has already been declared

//const object properties or array values can be changed
const friends = [{
    name: 'Bob 🥽',
    age: 22,
    hobby: 'golf🏌',
    music: 'rock 🎸'
  }

];

const result = friends.age = 23;
console.log(result);
//output => 23

// const object can't be re-assigned 
const friends = [{
    name: 'Bob 🥽',
    age: 22,
    hobby: 'golf🏌',
    music: 'rock 🎸'
  }

];

friends = [{
  name: 'Jane 🥽',
  age: 24,
  hobby: 'golf🏌',
  music: 'Pop 🎸'
}];

console.log(friends);
//output => Uncaught TypeError: Assignment to constant variable.
```

# Arrow functions

Named functions without arguments:

```jsx
//old function syntax 
function name() {
  console.log("Tracy 🚠");
}
name();

// arrow function
const name = () => {
  console.log("Tracy 🚠");
};
name();
//or you can even make it shorter by removing writing

const name = () => console.log("Tracy 🚠");
name();
```

Named functions with arguments:

```jsx
function add(a, b) {
  return a + b;
}
console.log(add(3, 5));

//arrow function
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 5));

//you can also shorten if it returns one thing
const add = (a, b) => a + b;
console.log(add(3, 5));
```