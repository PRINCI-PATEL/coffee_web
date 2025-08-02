// Testimonial Slider
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  testimonials.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  showSlide(currentSlide);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

showSlide(0); // Show first slide

// Filter Menu
const categoryButtons = document.querySelectorAll(".category-btn");
const menuItems = document.querySelectorAll(".menu-item");

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");
    menuItems.forEach(item => {
      if (item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Show default menu category
document.querySelector('.category-btn.active').click();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".about-image", {
  scrollTrigger: ".about",
  x: -100,
  opacity: 0,
  duration: 1
});

gsap.from(".about-content", {
  scrollTrigger: ".about",
  x: 100,
  opacity: 0,
  duration: 1
});

gsap.from(".menu-items", {
  scrollTrigger: ".menu",
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

gsap.from(".gallery-item", {
  scrollTrigger: ".gallery",
  scale: 0.9,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1
});

gsap.from(".testimonial", {
  scrollTrigger: ".testimonials",
  opacity: 0,
  duration: 1,
  y: 30
});
