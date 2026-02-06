// Menu toggle
function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

// Contact form submit
document.getElementById("contactForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    alert("Message sent successfully!");
    e.target.reset();
  }
});

// Scroll-trigger animation for cards
const slideUpElements = document.querySelectorAll(".slide-up");

function checkSlide() {
  const triggerBottom = window.innerHeight * 0.9;
  slideUpElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", checkSlide);
window.addEventListener("load", checkSlide);
