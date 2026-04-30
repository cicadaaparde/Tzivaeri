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




//λειτουργία , αυτοματο γεμισμα ημερομηνίας!

const dateSelect = document.getElementById("datePicker");
const today = new Date();

for (let i = 0; i < 60; i++) {
  const d = new Date(today);
  d.setDate(today.getDate() + i);
  
  const option = document.createElement("option");
  option.value = d.toISOString().split("T")[0]; // "2026-04-24"
  option.textContent = d.toLocaleDateString("el-GR", {
    weekday: "short", day: "2-digit", month: "2-digit"
  }); // "Παρ. 24 Απρ."
  
  dateSelect.appendChild(option);
}





const timeSelect = document.getElementById("timePicker");
const times = [];

for (let h = 13; h <= 23; h++) {
  ["00", "30"].forEach(m => times.push(`${h}:${m}`));
}

times.forEach(t => {
  const option = document.createElement("option");
  option.value = t;
  option.textContent = t;
  timeSelect.appendChild(option);
});


 /* <!-- νεο σιιτ /  εξωτερικα-εσωτερικα -->

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  const date = document.getElementById("datePicker").value;
  const time = document.getElementById("timePicker").value;

  if (!date || !time) {
    e.preventDefault();
    alert("Please select Date and Time for your reservation");
  }
});

efyge, θα ειναι λειτουργικο μονο με πληρωμενο συστημα που θα λειτουργει με γνωμονα την χωριτικοτητα του μαγαζιου*/


