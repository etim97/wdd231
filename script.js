// Select the menu toggle input, menu icon, and navigation menu
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');


menuIcon.addEventListener('click', () => {
  if (menuToggle.checked) {
   
    navMenu.style.display = 'flex';
    menuIcon.style.transform = 'rotate(90deg)'; 
  } else {
   
    navMenu.style.display = 'none';
    menuIcon.style.transform = 'rotate(0deg)'; // Reset rotation
  }
});
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      menuToggle.checked = false;
      navMenu.style.display = 'none';
      menuIcon.style.transform = 'rotate(0deg)';
    }
  });
});
// filter courses//
function filterCourses(category) {
    let courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        if (category === "all") {
            course.style.display = "block";
        } else if (course.classList.contains(category)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}

document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
