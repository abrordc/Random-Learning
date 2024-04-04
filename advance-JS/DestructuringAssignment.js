// destructuringAssignment Array
let data = ["nama", "saya", "abror"];
// const [a, b, c] = data;
// console.log(a);
// console.log(b);
// console.log(c);

//skip items
// const [a,,c] = data;
// console.log(a)
// console.log(c)

//swop items
// let a = 10;
// let b = 20;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//retun value pada function
// function coba() {
//   return [1, 2];
// }
//
// const [a, b] = coba();
// console.log(a)

//rest parameter
// const [a,...tes] = [1, 2,3,4,2];
// console.log(a)
// console.log(tes)

//distructuring objeck

// const limit = {
//   nama: "pak gali",
//   umur: 30,
// };
// const {nama, umur} = limit;
// console.log(nama)

//distructuring tanpa deklarasi objeck

// ({nama, umur} = {nama: "pak gali",umur: 30,});
// console.log(umur)
//

//assignment ke variabel baru
// const limit = {
//   nama: "pak gali",
//   umur: 30,
// };
// const {nama: a, umur: b} = limit;
// console.log(a)

//memberikan nilai deemail atau menggabungkan assignment ke variabel baru
// const limit = {
//   nama: "pak gali",
//   umur: 30,
//   email: "galih@unira.ac.id"
// };
// const {nama: n, umur: u, email: e = 'email@cadangan.com'} = limit;
// console.log(e)

//rest parameter
// const limit = {
//   nama: "pak gali",
//   umur: 30,
//   email: "galih@hotmail.com",
//   noHp: "0986464",
// };
// const { nama, ...values} = limit;
// console.log(values);


///mengambil field Object. 
// const limit = {
//   id:654, 
//   nama: "pak gali",
//   umur: 30,
//   email: "galih@hotmail.com",
//   noHp: "0986464",
// };
// function getData({id}) {
//   return id
// };
// 
// console.log(getData(limit))