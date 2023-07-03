// contoh 1
// Express Base
export interface Request {
  body: any;
}

// Express Json
export interface Request {
  json: any;
}

// Our App
function handleRequest(req: Request) {
  req.body;
  req.json;
}
//! note: iJadi, jika Anda bekerja dengan API yang memerlukan ekstensi struktural yang mulus, Anda harus melakukannya menggunakan interface
