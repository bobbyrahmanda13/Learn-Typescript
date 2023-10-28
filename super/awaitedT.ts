main()
async function main() {
  const single: Promise<string> = new Promise(res => res('l4d135'))
  const triple: Promise<Promise<Promise<string>>> =
    new Promise<Promise<Promise<string>>>(res =>
      res(
        new Promise<Promise<string>>(res =>
          res(
            new Promise<string>(res => {
              res('Vin Diesel')
            })
          ))
      ))

  const singleResult = await single
  console.log((singleResult)); // l4d135

  const tripleResult = await triple
  console.log((tripleResult)); // Vin Diesel

}

// contoh 2
type WrappedInDeep = Promise<Promise<Promise<Promise<Promise<string>>>>>
type AwaitedResult = Awaited<WrappedInDeep>

// contoh 3
async function exampleAwaited<T>(input: T) {
  // const output: Awaited<T> = await input
  const output = await input
}
