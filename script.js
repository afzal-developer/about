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

// JavaScript for Pop-up Modal
const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close-modal");
const viewProjectButtons = document.querySelectorAll(".view-project-btn");

// Open Modal
viewProjectButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const alternateImage = button.getAttribute("data-modal-image"); // Get alternate image URL
        modalImage.src = alternateImage; // Set the alternate image in the modal
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
let visibleCount = 0; // Track how many hidden projects have been revealed

showMoreBtn.addEventListener("click", () => {
    // Show the next 3 hidden projects
    for (let i = visibleCount; i < visibleCount + 3 && i < hiddenProjects.length; i++) {
        hiddenProjects[i].style.display = "block";
        setTimeout(() => {
            hiddenProjects[i].classList.add("visible"); // Fade-in animation
        }, 100);
    }

    visibleCount += 3; // Update the count of visible projects

    // Hide the button if all projects are visible
    if (visibleCount >= hiddenProjects.length) {
        showMoreBtn.style.display = "none";
    }
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
