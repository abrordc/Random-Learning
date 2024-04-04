function hitungPendapatan(jmlpensil, jmlbolpen, jmlpenghapus) {
  const totalPensil = jmlpensil * h.hargaPensil;
  const totalBolpen = jmlbolpen * h.hargaBolpen;
  const totalPenghapus = jmlpenghapus * h.hargaPenghapus;
  const jumlahtotal = totalPensil + totalBolpen + totalPenghapus;
  return jumlahtotal;
}
class HargaBarang {
  hargaPensil;
  hargaBolpen;
  hargaPenghapus;
 
  constructor(hargaPensil, hargaBolpen, hargaPenghapus) {
    this.hargaPensil = hargaPensil;
    this.hargaBolpen = hargaBolpen;
    this.hargaPenghapus = hargaPenghapus;
  }
}
const h = new HargaBarang(1000, 2000, 500);
const pensil = 10;
const bolpen = 10;
const penghapus = 20;
const execut = hitungPendapatan(pensil, bolpen, penghapus);
let number_string = execut.toString(),
  sisa = number_string.length % 3,
  rupiah = number_string.substr(0, sisa),
  ribuan = number_string.substr(sisa).match(/\d{3}/g);

if (ribuan) {
  separator = sisa ? "." : "";
  rupiah += separator + ribuan.join(".");
}
console.log(`total pendapatan saya adalah Rp. ${rupiah} rupiah`);