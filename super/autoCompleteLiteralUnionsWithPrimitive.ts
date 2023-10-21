// type Padding unions type
// type Padding = 'small'|'normal'|'large'| string

// type Padding using autocomplete literal unions with primitive
type Padding = 'small' | 'normal' | 'large' | (string & {})

function getPadding(padding: Padding): string {
  if (padding === 'small') return '12px'
  if (padding === 'normal') return '16px'
  if (padding === 'large') return '24px'
  return padding
}

let padding: Padding
padding = 'small' // 12px
padding = '8px' // 8px
padding = 'large' // 24px
padding = 'normal' // 16px

// note
// type Padding = 'small'|'normal'|'large'| string
// pada type padding jika dihapus unions type string maka 
// padding='8px' akan error karena tidak ada pada pada type Padding karena pada type Padding itu hanya terdapat normal small and large jika ingin ditambahkan maka lanjutkan dengna unions type string
