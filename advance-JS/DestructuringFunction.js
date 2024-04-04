// array function
// function kalkulasi(a, b) {
//   return[a+b, a-b, a*b, a/b];
// }
// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(tambah)

//jika mau nama variabel tidak berurut
// function kalkulasi(a, b) {
//   return {
//     tambah: a+b,
//     kurang: a-b,
//     bagi: a/b,
//     kali: a*b
//   }
// }
// const {kali, bagi, kurang, tambah} = kalkulasi(2, 3);
// console.log(kali)

//objeck kompleks

const mahasiswa = {
  nama: "moh.abroril huda",
  nim: 2022520045,
  umur: 24,
  nilai: {
    tugas: 80,
    uts: 90,
    uas: 100,
    kalkulasiAbjad: {
      ipk: 4,
      ips: "A+",
    },
  },
};
function cetak({
  nama,
  nim,
  umur,
  nilai: {
    uts,
    uas,
    tugas,
    kalkulasiAbjad: { ipk, ips },
  },
}) {
  return `hay nama saya ${nama} nim ${nim} umur saya ${umur} tahun nilai uts saya ${uts} dan uas ${uas} dan tugas ${tugas} akumulasi dari semuanya adalah ipk ${ipk} dan ips ${ips}`;
}
console.log(cetak(mahasiswa));
