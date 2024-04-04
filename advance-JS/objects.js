// OBJECT LITERAL
let mahasiswa = {
  nama: "abror",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`halo ${this.nama} selamat makan`);
  },
};

// FUNCTION DECLARATION
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`energi ada bertambah ${porsi}`);
  };
  return mahasiswa;
}
let Huda = Mahasiswa("abror", 20);

// CONSTRUCTOR FUNCTION
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`energi anda bertambah ${porsi}`);
  };
  this.main = function (jam) {
    this.energi -= jam;
    console.log(`energi anda berkurang ${jam}`);
  };
}
let moh = new Mahasiswa("abror", 23);

// OBJECT CREATE
const methodMaha = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`energi ada bertambah ${porsi}`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log("selamat tidur");
  }
};
function maHasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMaha);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}
let Abror = maHasiswa("abror", 20);
