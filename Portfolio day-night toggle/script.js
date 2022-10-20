function toggleTheme() {
  const body = document.body;
  const first = document.querySelector("#first");
  const second = document.querySelector("#second");
  body.classList.toggle("transform-active");
  first.classList.toggle("first-active");
  second.classList.toggle("second-active");
  const night = document.querySelectorAll(".night");
  night.forEach((item) => item.classList.toggle("day"));
  console.log("night", night);
}
