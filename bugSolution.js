The solution involves consistently using strict equality (===) when checking for null and undefined values.  Additionally, explicitly checking for undefined is recommended for more robust error handling.

```javascript
function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

function bar(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null values
  }
  return a + b;
}

function baz(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null and undefined values
  }
  return a + b;
}
```
By using strict equality and checking for both null and undefined, we achieve the desired behavior and prevent unexpected results.