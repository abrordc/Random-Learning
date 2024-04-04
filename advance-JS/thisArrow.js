//cunstractor function
// let Data = function () {
//   this.nama = "moh.abror";
//   this.umur = 100;
//   this.hello = function () {
//     return `hay perkenalan nama saya ${this.nama} umur ${this.umur} tahun`;
//   };
// };
// let abror = new Data();
/* cobak gimana cara kita merubah function di atas menjadi arrow function */
//menggunakan arrow function untuk data umur jika menggunakan function EXPRESION maka nilai akan undefined
// let Hay = function () {
//   this.nama = "huda";
//   this.umur = 22;
//   this.hello = function () {
//     return "hay";
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// let abror = new Hay();
//

//contoh lebih jelas tentang Arrow yang akan di hubungan ke file this.html

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  console.log("tekan")
  let satu = "size";
  let dua = "caption";
 
  if(this.classList.contains(satu)){
//     let temp;      // jika ingin mengganti data tapi di
//     temp = satu;   // js versi baru gak perlu kayak 
//     satu = dua ;    //gini
//     dua = temp;
// menukar data js 
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu)
  setTimeout(() => {
    this.classList.toggle(dua)
  }, 100);
});
