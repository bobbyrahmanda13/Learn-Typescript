/**
 * @return true if the input string is a palindrome
 */
export function isPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}

// next
// pnpm publish
// pnpm add createNpmPackage
// and import seperti module biasa dan bisa digunakan
