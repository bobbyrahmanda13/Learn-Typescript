enum LoginMode {
  email,
  social
}

console.log(LoginMode.email); // 0
console.log(LoginMode.social); // 1

// jika kita tambah kan "app"
enum LoginMode2 {
  app,
  email,
  social
}
console.log(LoginMode2.email); // 0  // ini akan error
console.log(LoginMode2.social); // 1 // ini akan error 
// penjelasan : karena app di letak kan di atas email maka app akan jadi 0 email = 1, dan social = 2 dan ini akan jadi masalah

// cara solved
enum LoginMode3 {
  app = 2,
  email = 0,
  social = 1
}
console.log(LoginMode3.email); // 0  // ini akan error
console.log(LoginMode3.social); // 1 // ini akan error 
// jadi harus di declarasikan number pada enum nya agar bisa digunakan jujur ini kayak index pada array saja

// gunakan function 
function initiateLogin(mode: LoginMode3) {
  // ...
}

initiateLogin(LoginMode3.app)
initiateLogin(LoginMode3.email)

initiateLogin(0)
initiateLogin(1)
initiateLogin(100) // error karena sesuai yang di enum karena pada enum hanya ada 3 yaitu app=2,email=0,social=1 dgn no index(menurut pendapat pribadi) =1
// pada initiateLogin(100) ini tidak ada dikarenakan hanya 3 saja 


// contoh lainnya
enum LoginMode4 {
  app = 0, email = 1, social = 2
}

//lookup and reverse lookup
console.log(LoginMode4['app']); // 0
console.log(LoginMode4[0]); // 'app'

// javascript nya enum typescript
// var LoginMode
// (function(LoginMode) {
//   LoginMode[LoginMode["app"] = 0] = "app"
//   LoginMode[LoginMode["email"] = 1] = "email"
//   LoginMode[LoginMode["social"] = 2] = "social"
// })(LoginMode || (LoginMode = {}))

// get all the keys
const keys = Object.keys(LoginMode4)

console.log(keys);
// want: ['app','email','social']
// got: ['app','email','social','0','1','2']


// contoh lain;
enum LoginMode5 {
  app = 'app',
  email = 'email',
  social = 'social'
}
// get all the keys
const keys5 = Object.keys(LoginMode5)
console.log(keys);

// Stable over network
console.log(LoginMode5.app); // 'app'
// jika menggunakan function
import { LoginMode5 } from './index'
import { initiateLogin } from './initiateLogin2'

export function initiateLogin2(mode: LoginMode5)
initiateLogin2('app') // error
initiateLogin2(LoginMode5.app)


// alternative enum (dari pada pake enum mending menggunakan type )
type LoginMode6 =
  | 'app'
  | 'email'
  | 'social'

function initiateLogin3(loginMode: LoginMode6) {
  //...
}
initiateLogin3('app')// good

// cara good
export const LoginMode7 = {
  device: 'device',
  email: 'email',
  social: 'social'
} as const

export type LoginMode7 = keyof typeof LoginMode7

export function initiateLogin4(mode: LoginMode7) {
  //...
}

initiateLogin4('device')
initiateLogin4(LoginMode7.device)

Object.keys(LoginMode7) // ['device','email','social']

// end last course udemy
