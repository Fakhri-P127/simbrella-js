const btnBar = document.querySelector("#btnBar");
const hiddenDiv = document.querySelector("#hiddenDiv");
const btnClose = document.querySelector("#btnClose");

console.log(hiddenDiv);
// const overlay = document.querySelector("#overlay--clas");
btnBar.addEventListener("click", function () {
  document.querySelector("nav").classList.add("btnAll");
  hiddenDiv.classList.remove("hidden--div");
  hiddenDiv.classList.add("flexs");
  btnBar.classList.add("make-hidden");
  btnClose.classList.remove("make-hidden");
});

btnClose.addEventListener("click", function () {
  document.querySelector("nav").classList.remove("btnAll");
  hiddenDiv.classList.add("hidden--div");
  hiddenDiv.classList.remove("flexs");
  btnBar.classList.remove("make-hidden");
  btnClose.classList.add("make-hidden");
});
