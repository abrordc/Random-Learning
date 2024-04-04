//spread Operator
//memecah iterabel menjadi singel element
// const mhs = ["arya","fauzi","pitung"];
// console.log(...mhs[0]);

//mengabungkan dua Array
// const mhs = ["arya","fauzi","pitung"];
// const dosen = ["samsoon","rizki","maulana"];
//const orang = [... mhs,... dosen];
//const Dborang = mhs.concat(dosen);
//console.log(Dborang)

//meng-copy Array
// const game = ["free fire", "mobile legend", " pubg"];
// const game = ["free fire", "mobile legend", " pubg"];
// const game = ["free fire", "mobile legend", " pubg"];
// const Cgame = [... game];
// Cgame[0] = "siqma";
// console.log(game)
// console.log(Cgame)

//ambil data dari html
//const LiMhs = document.querySelectorAll("li");
// const tampung = []
// for(let i = 0; i < LiMhs.length; i++){
//   tampung.push(LiMhs[i].textContent);
//}

// const tampung = [...LiMhs].map(d => d.textContent)
// console.log(tampung)

//latian spread operator
//animation
//const nama = document.querySelector(".nama");

// one line 
const nama = document.querySelector(".nama");
nama.innerHTML = [...nama.textContent].map(a => `<span>${a}</span>`).join("");
//let anima = [...nama.textContent];
//console.log(anima);
//nama.innerHTML = anima;
