function reverse(stringOrStringArray: string | string[]) {
  if (typeof stringOrStringArray == "string") {
    return stringOrStringArray.split("").reverse().join("")
  } else {
    return stringOrStringArray.slice().reverse()
  }
}

const hello = reverse("hello") // 'olleh'
const h_e_l_l_o = reverse(["h", "e", "l", "l", "o"]) // ["o", "l", "l", "e", "h"])
