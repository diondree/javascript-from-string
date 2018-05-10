<h2 align="center">Javascript From String</h2>

<p align="center">A simple package to convert valid Javascript found in a string to Javascript</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-material-tabs">
    <img alt="npm version" src="https://img.shields.io/npm/v/javascript-from-string.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/react-native-material-tabs">
    <img alt="npm downloads" src="https://img.shields.io/npm/dm/javascript-from-string.svg?style=flat-square">
  </a>
</p>

## Getting Started

#### Step 1

Install the dependency
```bash
npm i --save javascript-from-string
```
Or if you prefer yarn
```bash
yarn add javascript-from-string
```

### Step 2 
Import it in your script
```js
const jsConvert = require('javascript-from-string');
```

### Step 3
Call the Conversion promise
```js
const jsString = '{ prop: "value" }';

jsConvert.convert(jsString)
    .then(jsObject => {
        console.log(jsObject);
    })
    .catch(err => {
        console.log(err);
    })
```

Or if you prefer to use Async Await
```js
const jsString = '{ prop: "value" }';

async function getObject(jsString) {
    const jsObject = await jsConvert.convert(jsString);
    return jsObject;
}

getObject(jsString).then(obj => console.log(obj));
```