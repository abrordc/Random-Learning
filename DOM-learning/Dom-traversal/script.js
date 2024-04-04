const Close = document.querySelectorAll(".close");

Close.forEach(function (il) {
  il.addEventListener("click", function (e) {
   e.target.parentElement.style.display = "none";
  });
});
