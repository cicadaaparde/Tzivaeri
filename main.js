const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};





const cats = document.querySelectorAll(".cat");
const sections = document.querySelectorAll(".menu-section");

cats.forEach(cat => {
  cat.addEventListener("click", () => {
    const target = cat.dataset.target;

    // κρύψε όλα
    sections.forEach(sec => sec.classList.remove("active"));

    // βγάλε active από όλες τις κατηγορίες
    cats.forEach(c => c.classList.remove("active-cat"));

    // δείξε το σωστό
    document.getElementById(target).classList.add("active");

    // highlight category
    cat.classList.add("active-cat");
  });
});


