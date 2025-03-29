// Select the menu toggle input, menu icon, and navigation menu
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector(".nav-menu");


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
// Sample course data array
const courses = [
  { id: 1, name: "Web Development", category: "tech", credits: 3, completed: true },
  { id: 2, name: "Data Structures", category: "cs", credits: 4, completed: false },
  { id: 3, name: "UI/UX Design", category: "design", credits: 2, completed: true },
  { id: 4, name: "Database Systems", category: "cs", credits: 3, completed: false },
  { id: 5, name: "Cyber Security", category: "tech", credits: 3, completed: false }
];
const courseContainer = document.getElementById("course-list");
const creditDisplay = document.getElementById("total-credits");
// Function to render courses dynamically
function renderCourses(filter = "all") {
  courseContainer.innerHTML = ""; // Clear existing courses
  let filteredCourses = courses.filter(course => filter === "all" || course.category === filter);
  ilteredCourses.forEach(course => {
    let courseElement = document.createElement("div");
    courseElement.classList.add("course", course.category);
    if (course.completed) courseElement.classList.add("completed");

    courseElement.innerHTML = `
      <h3>${course.name}</h3>
      <p>Credits: ${course.credits}</p>
      <p>${course.completed ? "✅ Completed" : "❌ In Progress"}</p>
    `;
    courseContainer.appendChild(courseElement);
  });

  updateTotalCredits();
}

// Function to update total credits using reduce()
function updateTotalCredits() {
  let total = courses.reduce((sum, course) => sum + course.credits, 0);
  creditDisplay.textContent = `Total Credits: ${total}`;
}


document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
