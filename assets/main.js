const btnBar = document.querySelector("#btnBar");
const hiddenDiv = document.querySelector("#hiddenDiv");
const btnClose = document.querySelector("#btnClose");

btnBar.addEventListener("click", function () {
  document.querySelector("nav").classList.add("btnAll");
  hiddenDiv.classList.remove("hidden--div");
  hiddenDiv.classList.add("make-visible");
  btnBar.classList.add("rotate--icons");
  document.querySelector("nav").style.transition = "all 350ms ease-in-out";
  btnBar.classList.add("make-hidden");
  btnClose.classList.remove("make-hidden");
});

btnClose.addEventListener("click", function () {
  document.querySelector("nav").classList.remove("btnAll");
  hiddenDiv.classList.add("hidden--div");
  hiddenDiv.classList.remove("make-visible");
  btnBar.classList.remove("make-hidden");
  btnClose.classList.add("make-hidden");
  btnClose.classList.add("rotate--icons");
  document.querySelector("nav").style.transition = "all 0.5s ease-in-out";
});
