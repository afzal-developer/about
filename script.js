// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// JavaScript for Fade-In Animation
const projects = document.querySelectorAll(".project");

const fadeInProjects = () => {
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add("visible");
        }, index * 200); // Delay each project's animation
    });
};

window.addEventListener("load", fadeInProjects);

// Add a ripple effect to the button
document.querySelector('.cta-button').addEventListener('click', function (e) {
  const button = e.target;
  const ripple = document.createElement('span');
  ripple.classList.add('ripple-effect');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  button.appendChild(ripple);

  // Remove the ripple element after the animation ends
  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
});
