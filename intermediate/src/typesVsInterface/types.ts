// extract change handler
// code awal
// export type InputProps = {
//   type: "text" | "email";
//   value: string;
//   onChange: (newValue: string) => void;
// };

// hasil extract
type InputOnChange = (newValue: string) => void;
type InputValue = string;
type InputType = "text" | "email";

export type InputProps = {
  type: InputType;
  value: InputValue;
  onChange: InputOnChange;
};

//! Note : interface tidak support seperti code diatas
//karena ini adalah feature dari type

// type feature :
// 1. Unions
// 2. Intersections (&)
// 3. Primitives
// 4. Shorthand Functions
// 5. Advanced Type Functions
