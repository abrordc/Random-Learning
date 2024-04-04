//gabut
const Hello = document.getElementById("hello");
const p = document.getElementById("p");
const gambar = document.querySelector(".kata");
Hello.addEventListener("click", function () {
  document.body.style.textShadow = "2px 2px 2px black";
  document.body.style.fontSize = "40px";
  document.body.style.transition = "1s";
  setTimeout(function () {
    document.body.style.textShadow = "";
    document.body.style.backgroundColor = "black";
    document.body.style.fontSize = "";
    Hello.innerHTML = "hidup ini memang suram 🤯";
    Hello.style.color = "white";
    setTimeout(function () {
      p.classList.remove("d");
      setTimeout(function () {
        gambar.classList.remove("h");
      }, 1000);
    }, 1500);
  }, 2000);
});
