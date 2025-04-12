import { places } from "../data/places-data.js";

const container = document.getElementById("places-cards");

places.forEach((place, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.gridArea = `card${index + 1}`; // card1, card2, ...

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <a href="${place.url}" target="_blank">
      <button>Learn More</button>
    </a>
  `;

  container.appendChild(card);
});
