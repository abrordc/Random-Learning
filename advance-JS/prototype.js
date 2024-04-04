//PROTOTYPE
function Mahasiswa(nama, kelas) {
  this.nama = nama;
  this.kelas = kelas;
  this.jam = 11;
  this.makan = 2;
}

Mahasiswa.prototype.Jam = function (jam) {
  this.jam -= jam;
  return `jam kamu di kurangi ${jam}`;
};
Mahasiswa.prototype.Makan = function (porsi) {
  this.makan += porsi;
  return `makan kamu di tambah ${porsi}`;
};

let hhh = new Mahasiswa("abror", 3);

//Versi class

class mhs {
  construktor(nama, kelas) {
    this.nama = nama;
    this.kelas = kelas;
    this.jam = 11;
    this.makan = 2;
  }
  Jam(jam) {
    this.jam -= jam;
    return `jam kamu di kurangi ${jam}`;
  }
  Makan(porsi) {
    this.makan += porsi;
    return `jatah makan anda di tambah ${porsi}`;
  }
}

let sapi = new mhs("dul", 2);
