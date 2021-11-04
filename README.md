# Study-JS-WaysToDeclareFunctions

## Function Hoisting

---

- Functions can be called before declaration when initialized that way:

```javascript
function MyFunction() {
  console.log("Action");
}
```

Ex:

```javascript
MyFunction();
function MyFunction() {
  console.log("Action");
}
```

## First-class objects

---

## Function Expression

- Function is assigned to variable.
- Function can be passed as parameter to another function.

```javascript
const MyFunction = function () {
  console.log("Action");
};

MyFunction();
```

Ex:

```javascript
const MyFunction = function () {
  console.log("Action");
};

function executesFunctions(auxFunction) {
  auxFunction();
}

executesFunctions();
```

## Arrow Function

---

```javascript
const MyArrowFunction = () => {
  console.log("Action");
};
```

## As an Object Method

```javascript
const obj = {
  method() {
    console.log("Action");
  },
};
```
