// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// JavaScript for Pop-up Modal
const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close-modal");
const viewProjectButtons = document.querySelectorAll(".view-project-btn");

// Open Modal
viewProjectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectImage = button.parentElement.querySelector(".project-image").src;
    modalImage.src = projectImage;
    modal.style.display = "flex";
  });
});

// Close Modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close Modal when clicking outside the image
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// JavaScript for Show More Button
const showMoreBtn = document.getElementById("show-more-btn");
const hiddenProjects = document.querySelectorAll(".project.hidden");

showMoreBtn.addEventListener("click", () => {
  hiddenProjects.forEach((project) => {
    project.style.display = "block";
  });
  showMoreBtn.style.display = "none"; // Hide the button after showing all projects
});
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
