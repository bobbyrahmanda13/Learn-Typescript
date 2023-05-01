//! note any and unknown adalah universal supe typed in typescript
let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = 123;
exampleAny = "hellow";

// unknown
exampleUnknown = 123;
exampleUnknown = "world";

// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;

// unknown
if (typeof exampleUnknown == "string") {
  exampleUnknown.trim();
}
if (typeof exampleUnknown == "boolean") {
  let unknownSetBool: boolean = exampleUnknown;
}
