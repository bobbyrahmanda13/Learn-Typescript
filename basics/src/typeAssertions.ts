function load(): unknown {
  return;
}
let helloAssertions = load();

// cara unknown
// if (typeof helloAssertions === "string") {
//   const trimmed = helloAssertions.trim();
// }

// cara type assertions
const trimmed = (helloAssertions as string).trim();
