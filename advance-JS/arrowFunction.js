//FUNCTION EXPRESION
function hallo(nama) {
  return `hallo, ${nama}`;
}
console.log(hallo("abror"));

//ARROW FUNCTION
const Hallo = (nama) => {
  return `hallo, ${nama}`;
};
console.log(Hallo("anjai"));

/* ARROW Function versi lebih singkat jika memiliki satu parameter, dan tanpa menggunakan return
 */
const Hai = (nama) => `hai , ${nama}`;
console.log(Hai("holil"));

//contoh 2 parameter
const game = (nama, waktu) => {
  return `selamat ${waktu}, ${nama}`;
};
console.log(game("moh", "malam"));

/* Function Map untuk memetak kan data menggunak function EXPRESION dan arrow Function*/

let data = ["Moh.Abroril Huda", "HolilurRohman", "Badrun"];
let dataKelola = data.map(function (nama) {
  return nama.length;
});
console.log(dataKelola);

//arrow function
let dataKelolaArrow = data.map((nama) => nama.length);
console.log(dataKelolaArrow);

//merubah data menjadi Object
let dataObject = data.map((nama) => ({ nama: nama, berapaHuruf : nama.length }));
//biar rapih kita rubah log menjadi table
console.table(dataObject);
//console.log(dataObject);
