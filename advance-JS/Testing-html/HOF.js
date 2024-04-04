// mengambil data
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// filter data
let Javascript = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT"))
  //map data
  // ubah durasi menjadi float
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  //reduce
  .reduce((total, detik) => total + detik);
// jam menit detik
const jam = Math.floor(Javascript / 3600);
Javascript = Javascript - jam * 3600;
const menit = Math.floor(Javascript / 60);
const detik = Javascript - menit * 60;

// tampilkan ke Dom
const pDurasi = document.querySelector(".totalD");
pDurasi.textContent = `${jam} jam : ${menit} menit : ${detik} detik`;

const js = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT")
).length;
const pVideo = document.querySelector(".totalV");
pVideo.textContent = `${js} video`