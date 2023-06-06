// Afficher / cacher le header

const openHeader = document.querySelector("#openHeader");
const header = document.querySelector("header");

openHeader.addEventListener("click", () => {
  //   scrollBy(0, -100);
  header.style.transform = "translateY(0px)";
  header.style.transition = "0.8s";
  //   openHeader.style.display = "none";
  openHeader.style.transform = "translateX(calc(100vw)) translateY(15px)";
  openHeader.style.transition = "0.5s";
});

window.addEventListener("scroll", () => {
  header.style.transform = "translateY(-60px)";
  openHeader.style.transform =
    "translateX(calc(100vw - 80px)) translateY(15px)";
  //   openHeader.style.display = "block";
});
