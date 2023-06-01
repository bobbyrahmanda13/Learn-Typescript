// contoh 1
function padleft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected number or string, got '${padding}'.`);
}

padleft("Hello world", 4); // '    Hello world'
padleft("Hello world", "  "); // '  Hello world'
padleft("Hello world", "----"); // '----Hello world'
padleft("Hello world", 4); // '    Hello world'
