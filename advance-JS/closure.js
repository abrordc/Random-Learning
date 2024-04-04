//LEXICAL SCOPE
function init() {
  let nama = "abror"; //local variable
  function tampilkanNama() {
    //inner function (closure*)
    console.log(nama); // aksess ke parent variable
  }
  //console.dir(tampilkanNama); untuk cek closure
  tampilkanNama();
}
init();

//versi lebih ringkas
function init() {
  return function (nama) {
    console.log(nama);
  };
}
tampilNama = init();
tampilNama("abror");

/* ALASAN KENAPA MENGGUNAKAN CLOSURE
   1. untuk membuat function factories
   2. untuk membuat private method
*/

//Ce2ONTOH FUNCTION FACTORIES
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`selamat ${waktu}, ${nama} 👍`);
  };
}
let pagi = ucapkanSalam("pagi");
let siang = ucapkanSalam("siang");
let sore = ucapkanSalam("sore");
let malam = ucapkanSalam("malam");

sore("abror");

/*  DIBAWAH ADALAH CODE MENGGUNAKAN KONSEP CLOSURE, UNTUK PRIVATE METHOD*/

//example untuk no private method
let Conter = 0;
let Add = function Add() {
  return ++Conter;
};
Conter = 10;
console.log(Add());


//EMEDIATLI INFO FUNCTION
let add = (function add() {
  let conter = 0;
  return function () {
    return ++conter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
