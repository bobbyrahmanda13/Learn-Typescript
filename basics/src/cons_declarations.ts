type Points = { x: number; y: number };

const point: Points = { x: 0, y: 0 };

// Error => Cannot assign to 'point' because it is a constant. [2588]
point = { x: 1, y: 1 }; // Error

// All other behaviours are  the same as `let`
point.x = 123;
point.y = 456;
