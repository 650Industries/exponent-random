# @exponent/random
For picking random numbers and choosing random things from lists

Usage:
```js

var random = require('@exponent/random');

// Picking a random integer between 0 and n, but not including n
random(n)

// Picking a random choice from a list of things
random.choice(['list', 'of', 'things'])

// Picking a random integer between 0 and n inclusive
random(n, {inclusive: true})

// Picking a random integer between k and n, including k but not including n
random(k, n)

// Picking a random integer between k and n, including k and n
random(k, n, {inclusive: true})

// Picking a real number between 0 and r
random(r, {real: true})

// Picking a real number beteween j and r
random(j, r, {real: true})
```
