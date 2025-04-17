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