const Data = ["number", "tremo", 1, 4, 5, true, " gg", false, 9];
// function Filter(data) {
//   let tam = [];
//   for (let i = 0; i < data.length; i++) {
//     tam.push(data[i]);
//   }
//   console.log(tam)
// }
// Filter(data);
//console.log(Filter(data))

//filter
// function byFilter(type, ...isi) {
//   return isi.filter((i) => typeof i === type);
// }
// const type = "boolean";
// console.log(byFilter(type, "tremo", 1, 4, 5, true, "gg", false, 9));

// array
// const team = ["abror","hasbul","pitung","haikal","kiki"];
// const [ketua, wakil,...anggota] = team;
// console.log(ketua)

//Object
const Team = {
  pm: "abror",
  frondend1: "hasbul",
  frondend2: "haikal",
  backend1: "arya",
  backend2: "zaki",
  ui: "hendra",
  ux: "dian",
  devOs: "arya",
};
const {pm,...team} = Team;
let Arr = [];
for(n in team){
  Arr.push(team[n])
}
console.log(`produk manager ${pm} dan team  ${Arr}`);