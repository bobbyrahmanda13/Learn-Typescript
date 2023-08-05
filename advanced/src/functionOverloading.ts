// function overloading
// start
function reverse(string: string): string
function reverse(stringArray: string[]): string[]
// end

// body function
// start
function reverse(stringOrStringArray: string | string[]) {
  if (typeof stringOrStringArray == "string") {
    return stringOrStringArray.split("").reverse().join("")
  } else {
    return stringOrStringArray.slice().reverse()
  }
}
// end

const hello = reverse("hello") // 'olleh'
const h_e_l_l_o = reverse(["h", "e", "l", "l", "o"]) // ["o", "l", "l", "e", "h"])

// contoh lainnya
//function overload
// start
function makeDate(timestamp: number): Date
function makeDate(year: number, month: number, day: number): Date
// end

function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(timestampOrYear, month - 1, day)
  } else {
    return new Date(timestampOrYear)
  }
}

const doomsday = makeDate(2000, 1, 1) // 1 jan 2000
const epoch = makeDate(0) // 1 jun 1970

// const invalid = makeDate(2000, 1 /* Error: ignored */) ==> //No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.ts(2575)
