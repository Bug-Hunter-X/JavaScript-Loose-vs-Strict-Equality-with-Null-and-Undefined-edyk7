function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));    // Output: 10

function bar(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(bar(null, 5)); // Output: 0
console.log(bar(5, null)); // Output: 0
console.log(bar(5, 5));    // Output: 10

function baz(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null and undefined values
  }
  return a + b;
}

console.log(baz(null, 5)); // Output: 0
console.log(baz(5, null)); // Output: 0
console.log(baz(undefined, 5)); // Output: 0
console.log(baz(5, undefined)); // Output: 0
console.log(baz(5, 5));    // Output: 10