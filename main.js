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
    const target = cat.getAttribute("data-target");
    const section = document.getElementById(target);

   
    sections.forEach(sec => sec.classList.remove("active"));
    cats.forEach(c => c.classList.remove("active-cat"));

  
    section.classList.add("active");
    cat.classList.add("active-cat");

 
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});



/*    date&time issue!
flatpickr("#date", {
  dateFormat: "Y-m-d"
});

flatpickr("#time", {
  enableTime: true,
  noCalendar: true,
  time_24hr: true,
  dateFormat: "H:i"
}); */
