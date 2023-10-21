// contoh 1
// type PersonsRecord = Record<string, { name: string, role: string }>

// const personsRecord: PersonsRecord = {}
// personsRecord['00'] = { name: 'John', role: 'admin' }
// personsRecord['11'] = { name: 'Jane', role: 'owner' }

// personsRecord['222'] = { name: 'Jane' } // Error : Missing property `role`

// Syntax Format Tpescript Record<K,V> => type PersonsVerbose = { [key: string]: { name: string, role: string } }

// contoh 2 
// type Roles = 'admin' | 'owner' // union type

// let peopleWithRoles: Record<Roles, string[]> = {
//   'owner': ['Jane', 'June'],
//   'admin': ['John']
// }
// peopleWithRoles = {
//   'owner': ['Jane', 'June'] // Error: 'admin' is missing
// }

// const admins: string[] = peopleWithRoles['admin'] // safe


// contoh 3
// untuk type object yang simple 

// Syntax 
// type PointContoh3 = Record<'x' | 'y', number>

// usecase

// cara lama yang tidak menggunakan record

// start
// type PageInfo = {
//   id: string, title: string
// }

// type PagesVerbose = {
//   home: PageInfo,
//   services: PageInfo,
//   about: PageInfo,
//   contact: PageInfo
// }

// end

// usecase untuk penggunaan type Record<K,V>
type Pages = Record<'home' | 'services' | 'about' | 'contact', { id: string, title: string }>
