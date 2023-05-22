/**
 * @param input a command or an array of commands
 * @return a single trimmed string
 */

// CONTOH 1
// function formatCommandLine(input: any) {
// function formatCommandLine(input: string | string[]) {
//   // ini bisa di gunakan dengan union type untuk function formatCommandLine ini
//   let line = "";
//   if (typeof input === "string") {
//     line = input.trim();
//   } else {
//     line = input.map((x) => x.trim()).join("");
//   }
//   return line;
// }
//
// console.log(formatCommandLine("hello")); // hello
// console.log(formatCommandLine(["hello", "world"])); // hello world
// console.log(formatCommandLine(1337)); // Error

// CONTOH 2
type Padding = number | string;
/**
 * Takes a string and adds 'padding' to the left
 * if 'padding' is a number, then that number of spaces is added to the left
 * if 'padding' is a string, then 'padding' is appended   to the left
 */

// function padLeft(value: string, padding: unknown) {
function padLeft(value: string, padding: Padding) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected number or string, got '${padding}'.`);
}

padLeft("Hello World", 4); //'    Hello World'
padLeft("Hello World", " "); //' Hello World'
padLeft("Hello World", "---"); //'---Hello World'
padLeft("Hello World", false); // Error
