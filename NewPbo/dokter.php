<?php

class Dokter {
  public $nama, 
         $spesialis = false;
         
         
  public function infoDokter() {
    echo "$this->nama  siap mmenangani";
  }
}