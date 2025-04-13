document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".story");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Галерея
  let currentIndex = 0;
  const images = document.querySelectorAll(".gallery img");

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  setInterval(showNextImage, 3000);
});
