const projetos = document.querySelectorAll(".section-projeto");
const description = document.querySelectorAll(".section-descricao");
const sectionFaq = document.querySelectorAll(".section-faq-info dt");
function descriptionActive(id) {
  description.forEach((item) => {
    item.classList.remove("active");
  });
  description[id].classList.add("active");
}
function showDD(id) {
  sectionFaq[id].nextElementSibling.classList.toggle("active");
}

sectionFaq.forEach((item, id) => {
  item.addEventListener("click", () => {
    showDD(id);
  });
});
console.log(sectionFaq);
projetos.forEach((item, id) => {
  item.addEventListener("click", () => {
    let top = item.getBoundingClientRect().top;
    descriptionActive(id);
  });
});
descriptionActive(0);

const broweser = matchMedia("(max-width: 450px)").matches;

console.log(broweser);

const logo = document.querySelector(".logo");
const headercontainer = document.querySelector(".header-container");
if (broweser) {
  logo.addEventListener("click", () => {
    headercontainer.classList.toggle("active");
  });
} else {
  console.log("aa");
}

const menuClickBuguer = document.querySelector(".menuBurguer");
const navMenu = document.querySelector(".menu nav");
navMenu.classList.remove("desactive");
navMenu.classList.remove("active");
menuClickBuguer.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  if (navMenu.classList.contains("active")) {
    console.log("ok");
    menuClickBuguer.addEventListener("click", () => {
      navMenu.classList.toggle("desactive");
    });
  } else {
    navMenu.classList.add("active");
  }
});
