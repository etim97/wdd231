document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    menuToggle.addEventListener("change", function () {
        if (this.checked) {
            navLinks.classList.add("open");
        } else {
            navLinks.classList.remove("open");
        }
    });
});


// Fetch the JSON data from 'service.json'
fetch('./data/services.json')
  .then(response => response.json())
  .then(services => {
    displayServices(services);
  })
  .catch(error => {
    console.error('Error fetching services:', error);
  });

function displayServices(services) {
  const container = document.getElementById('services-container');
  
  services.forEach(service => {
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add('service');

    const serviceTitle = document.createElement('h3');
    serviceTitle.textContent = service.title;
    
    const serviceDesc = document.createElement('p');
    serviceDesc.textContent = service.description;

    serviceDiv.appendChild(serviceTitle);
    serviceDiv.appendChild(serviceDesc);

    if (service.img) {
      const serviceImg = document.createElement('img');
      serviceImg.src = service.img;
      serviceDiv.appendChild(serviceImg);
    }

    container.appendChild(serviceDiv);
  });
}



document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();
    
    if (!name || !email || !service || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Feedback (simulate submission)
    alert('Thank you for reaching out! We’ll get back to you soon.');

    // Optional: Reset form after submission
    form.reset();
  });
});


 document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("services-preview");
  
    fetch("data/services.json")
      .then(response => response.json())
      .then(services => {
        services.forEach(service => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
            <img src="${service.img}" alt="${service.title}" class="place-img" loading="lazy">
            <h2>${service.title}</h2>
            <p>${service.description}</p>
          `;
          container.appendChild(card);
        });
      })
      .catch(error => console.error("Failed to load services:", error));
  });
  
  // Set last modified date
  document.getElementById("lastUpdated").textContent = document.lastModified;

  // Set current time
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    document.getElementById("currentTime").textContent = timeString;
  }

  updateTime();
  setInterval(updateTime, 1000); // Update every second

  // Visit message using localStorage
const visitMessage = document.getElementById("visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
const now = new Date();

if (lastVisit) {
    const diffTime = now.getTime() - new Date(lastVisit).getTime();
    const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
    visitMessage.textContent = `Welcome back! It's been ${diffDays} day(s) since your last visit.`;
} else {
    visitMessage.textContent = "Welcome! This is your first visit.";
}
localStorage.setItem("lastVisit", now);

// Modal dialog functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalExtra = document.getElementById("modalExtra");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});
