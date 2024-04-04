<?php

class DataKaryawan {
  public $nama,
  $lamakerja,
  $jabatan;
  public function input($manajer, $staff) {
    echo "masukkan nama : ";
    $this->nama = trim(fgets(STDIN));
    echo "masukkan lama kerja : ";
    $this->lamakerja = trim(fgets(STDIN));
    echo "masukkan jabatan : ";
    $this->jabatan = trim(fgets(STDIN));
    $hitung = ($this->jabatan === "manager") ? $manajer : $staff;
    $tambah = $this->lamakerja > 5 ? 1000000 : 500000;
    $total = $hitung + $tambah;
    echo "====================================== \n";
    echo "========= HITUNG PENGHASILAN ========= \n";
    echo "=========   & BIAYA PAJAK    ========= \n";
    echo "====================================== \n";
    echo " === gaji sebelum di potong pajak". number_format($total) . PHP_EOL;
    echo PHP_EOL;
    return $total;
  }
  public function getNama() {
    return $this->nama;
  }
}

class Totalgaji {
  public $staff = 4000000,
  $manajer = 12000000;

  public function totalgaji() {
    $data = new DataKaryawan();
    $pajak = new Pajak();
    $pajak->hitungpajak($data->input($this->manajer, $this->staff), $data->getNama());

  }
}


class Pajak {
  public $pajak = 45;

  public function hitungpajak($gaji, $nama) {
    $totalpajak = ($gaji / 100) * $this->pajak;
    $totalsemua = $gaji - $totalpajak;
    echo "=============== PAJAK ================ \n";
    echo " === ". strtoupper($nama) ." di kenai pajak $this->pajak % \n";
    echo " === maka total pajak yang harus kamu bayar \n";
    echo ' === Rp . ' . number_format($totalpajak). PHP_EOL;
    echo PHP_EOL;
    echo " === gaji sesudah di potong pajak ". number_format($totalsemua);
  }
}