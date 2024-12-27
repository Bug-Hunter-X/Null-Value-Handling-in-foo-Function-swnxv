function foo(a, b) {
  a = a || 0; //default a to 0 if null or undefined
  b = b || 0; //default b to 0 if null or undefined
  if (a === null || b === null) {
    console.warn('Null values encountered. Using default values.');
  }
  // ... rest of the function
}