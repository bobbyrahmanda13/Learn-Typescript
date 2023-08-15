// Array
let arrays: number[] = [1, 2, 3];

// Usage
array = [1];
array = [1, 2, 3, 4, 5];
array = ["hello"]; // Error =>  Type 'string' is not assignable to type 'number'. [2322]

// Tuple
let tuple: [number, number] = [0, 0];

// Usage
tuple = [1, 1];
tuple = [2, 6];

// Error => Type '[number]' is not assignable to type '[number, number]'. Source has 1 element(s) but target requires 2. [2322]
tuple = [5]; // Error: must be 2 items

// Error => Type '[number, number, number]' is not assignable to type '[number, number]'. Source has 3 element(s) but target allows only 2. [2322]
tuple = [5, 4, 3]; // Error: must be 2 items

// Error => Type 'string' is not assignable to type 'number'. [2322]
tuple = ["elite", 1337]; // Error: must be number
