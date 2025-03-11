/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav__menu");
const navToggle = document.getElementById("nav__toggle");
const navClose = document.getElementById("nav__close");

// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  console.log("clicked!", event.target.textContent);
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Close menu when clicking anywhere on the viewport
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
    navMenu.classList.remove("show-menu");
  }
});

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // add class if the bottom effect is greater than 50 of viewport
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER POPULAR ===============*/

const swiperPopular = new Swiper(".popular__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scrollup class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        `.nav__menu a[href*="${sectionId}"]`
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      if (sectionsClass) sectionsClass.classList.add("active-link");
    } else {
      if (sectionsClass) sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // reset:true , //Animation repeat
});
sr.reveal(`.home__data, .popular__container, .footer`);
sr.reveal(`.home__board`, { delay: 700, distance: "100px", origin: "right" });
sr.reveal(`.home__pizza`, {
  delay: 1400,
  distance: "100px",
  origin: "botton",
  rotate: { z: -90 },
});
sr.reveal(`.home__ingredient`, {
  delay: 2000,
  interval: 100,
});
sr.reveal(`.about__data, .recipe__list, .contact__data`, {
  origin: "right",
});

sr.reveal(`.about__img , .recipe__img , .contact__image`, {
  origin: "left",
});
sr.reveal(`.product__card`, {
  interval: 100,
});
