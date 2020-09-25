# OverfuncJS
Function overloading in Javascript
<hr>
How to use -

```javascript
function x() {
  args(arguments, [(x) => !isNaN(x)], function() {
    console.log('number')
  })(arguments, [(x) => typeof x === 'string'], function() {
    console.log('string')
  })
}

x(4)
x('a string')
```

Output -

```javascript
"number"
"string"
```


The first parameter of the `args()` function has to be the `arguments` object available in functions. The second parameter should be an array filled with functions that return either `true` or `false` depending on the input passed. The third parameter is a function to be executed when the required arguments match.

The function returns itself, so the following code:

```javascript
args(arguments, [(x) => !isNaN(x)], function() {
  console.log('number')
})

args(arguments, [(x) => typeof x === 'string'], function() {
  console.log('string')
})
```

can be shortened to:

```javascript
args(arguments, [(x) => !isNaN(x)], function() {
  console.log('number')
})(arguments, [(x) => typeof x === 'string'], function() {
  console.log('string')
})
```
