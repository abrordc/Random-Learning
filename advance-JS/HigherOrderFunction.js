/* contoh Higher Order Function :
     + Array.prototype.map()
     + Array.prototype.filter()
     + Array.prototype.reduce() */

let angka = [1, 2, -1, 6, 8, 5, -5, 9, 8, 4];
//cobak kita ambil nilai >=4
//pertama tama kita menggunakan for
//contoh for
// const NewAngka = [];
// for(let i = 0; i < angka.length; i++){
//   if(angka[i] >= 4){
//     NewAngka.push(angka[i]);
// }
// }
// console.log(NewAngka);

//contoh filter menggunakan function
// 6, 8, 5, 9, 8, 4
// const NewAngka = angka.filter(function (a) {
//   return a >= 4;
// });
// console.log(NewAngka);

//filter menggunakan Arrow Function
// const NewAngka = angka.filter(a => a >= 4);
// console.log(NewAngka)
//jika menggunakan Arrow function akan lebih ringakas

//map
//saya ingin semua nilai array di atas di kali dua dan saya ingin menggunakan Arrow function
// const KaliAngka = angka.map(a => a * 2);
// console.log(angka)
// console.log(KaliAngka)
//map adalah memetakkan nilai ke array baru dan tidak merubah array sebelum nya

//reduce
//menggabung kan semua nilai angka di atas
// const gaAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(gaAngka)  //37

//method chaining
// carikan angka >= 5
// kalikan 3
// jumlahkan
const hasil = angka
  .filter(a => a >= 5) // 6,8,5,9,8
  .map(a => a * 3) // 18,24,15,27,24
  .reduce((acc, cur) => acc + cur);//108
console.log(hasil);