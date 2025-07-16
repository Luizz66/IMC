const m = document.querySelector("#m");
const w = document.querySelector("#w");

m.addEventListener("click", () => {
  m.classList.add("m-active");
  w.classList.remove("w-active");
});

w.addEventListener("click", () => {
  w.classList.add("w-active");
  m.classList.remove("m-active");
});
