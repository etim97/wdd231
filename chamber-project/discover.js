import { places } from './datas/data.js';

document.addEventListener("DOMContentLoaded", function () {
  // Menu toggle for mobile navigation
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("change", function () {
    if (this.checked) {
      navLinks.classList.add("open");
    } else {
      navLinks.classList.remove("open");
    }
  });

  // Function to display places
  function displayPlaces() {
    const container = document.getElementById('places-cards');
    if (!container) return; // Ensure the container exists

    places.forEach(place => {
      const card = document.createElement('div');
      card.classList.add('place-card');
      card.innerHTML = `
        <h2>${place.name}</h2>
        <img src="${place.image}" alt="${place.name}" />
        <p><strong>Address:</strong> ${place.address}</p>
        <p>${place.description}</p>
        <a href="${place.url}" target="_blank">Visit Website</a>
      `;
      container.appendChild(card);
    });
  }

  // Function to display visit message
  function displayVisitMessage() {
    const messageContainer = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date();
    const today = now.toISOString();

    if (!lastVisit) {
      messageContainer.textContent = "Welcome! This is your first visit.";
    } else {
      const lastDate = new Date(lastVisit);
      const timeDiff = now - lastDate;
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      if (daysDiff < 1) {
        messageContainer.textContent = "Welcome back! You last visited today.";
      } else if (daysDiff === 1) {
        messageContainer.textContent = "Welcome back! It’s been 1 day since your last visit.";
      } else {
        messageContainer.textContent = `Welcome back! It’s been ${daysDiff} days since your last visit.`;
      }
    }

    localStorage.setItem("lastVisit", today);
  }

  // Update clock every second
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const clockElement = document.getElementById("clock");
    if (clockElement) {
      clockElement.textContent = timeString;
    }
  }

  // Initialize functions
  displayPlaces();
  displayVisitMessage();
  setInterval(updateClock, 1000);
  updateClock(); // Run immediately once
});
