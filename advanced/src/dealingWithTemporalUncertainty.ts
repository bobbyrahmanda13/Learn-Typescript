let suffix: string | null = getSuffix()
if (suffix != null) {
  const suffixLocal = suffix // solved
  let array1 = ["jane", "john"]
  let exampleOne: string = "jane" + suffixLocal.toUpperCase()

  array1.forEach((name) => {
    let exampleTwo: string = name + suffixLocal.toUpperCase()
  })
}

let contoh: string | null = forContoh()
if (contoh != null) {
  const exampleLocal = contoh // solved
  const exampleUppercase = () => {
    console.log(exampleLocal.toUpperCase())
  }
  setTimeout(() => {
    exampleUppercase()
  }, 2000)
  console.log(exampleLocal.toUpperCase())
}
