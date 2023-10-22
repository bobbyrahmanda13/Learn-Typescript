type Color = ColorString | ColorRGB
type ColorString = 'red' | 'blue' | 'yellow' | 'purple'
type ColorRGB = [red: number, green: number, blue: number]

type Theme = Record<string, Color>

// before using satisfies
// const theme: Theme = {
//   primary: 'red',
//   secondary: [0, 255, 0],
//   tertiary: 'purpel', // error: karena typo yang harus nya purple tapi yang dibuat adalah purpel
// }

// after using satisfies
const theme = {
  primary: 'red',
  secondary: [0, 255, 0],
  tertiary: 'purple',
}

const [r, g, b] = theme.secondary
