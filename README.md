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
