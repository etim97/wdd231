// Data Array with all 8 places
const places = [
    {
      name: "Lekki Conservation Centre",
      address: "KM 19, Lekki - Epe Expressway, Lekki Peninsula II, Lagos",
      description: "Home to Africa’s longest canopy walkway, monkeys, and lush nature trails.",
      image: "Lekki_Conservation_Centre_2.webp",
      url: "https://www.ncfnigeria.org/lekki-conservation-centre"
    },
    {
      name: "Nike Art Gallery",
      address: "2 Elegushi Rd, 3rd Roundabout, Epe Expressway, Lekki, Lagos",
      description: "A vibrant five-story building with over 8,000 artworks from Nigerian artists.",
      image: "https://guardian.ng/wp-content/uploads/2021/06/Nike-Art-Gallery-Lagos.webp",
      url: "https://www.nikeartgallery.com/"
    },
    {
      name: "Tarkwa Bay Beach",
      address: "Accessible via boat from Marina or Victoria Island, Lagos",
      description: "A quiet, sheltered beach ideal for swimming, surfing, and relaxing.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Tarkwa_Bay_Beach_Lagos.webp",
      url: "https://www.tripadvisor.com/Attraction_Review-g304026-d1774870-Reviews-Tarkwa_Bay_Beach-Lagos_Lagos_State.html"
    },
    {
      name: "Terra Kulture",
      address: "1376 Tiamiyu Savage St, Victoria Island, Lagos",
      description: "A cultural hub featuring Nigerian arts, theater, food, and a bookstore.",
      image: "https://terrakulture.com/wp-content/uploads/2020/09/cropped-terra.webp",
      url: "https://terrakulture.com/"
    },
    {
      name: "Freedom Park",
      address: "Old Broad Street, Lagos Island, Lagos",
      description: "A former colonial prison turned into a recreational and cultural space.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Freedom_Park_Lagos_1.jpg",
      url: "https://www.freedompark.ng/"
    },
    {
      name: "Omu Resort",
      address: "1 Asiwaju Bola Tinubu Way, Ibeju, Lekki, Lagos",
      description: "Offers a zoo, wax museum, waterpark, go-karts, and more.",
      image: "https://omuresort.com/wp-content/uploads/2022/02/omu_resort_entrance.jpg",
      url: "https://omuresort.com/"
    },
    {
      name: "National Museum Lagos",
      address: "Awolowo Rd, Ikoyi, Lagos",
      description: "Houses Nigerian artifacts, historical collections, and ancient sculptures.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/National_Museum_Lagos.jpg",
      url: "https://www.tripadvisor.com/Attraction_Review-g304026-d480726-Reviews-National_Museum-Lagos_Lagos_State.html"
    },
    {
      name: "Elegushi Beach",
      address: "Lekki Phase 1, Lekki, Lagos",
      description: "A lively private beach with clubs, horseback rides, and live music.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Elegushi_Beach_Lagos.jpg",
      url: "https://www.tripadvisor.com/Attraction_Review-g304026-d4135815-Reviews-Elegushi_Beach-Lagos_Lagos_State.html"
    }
  ];

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

  // Function to display places
  function displayPlaces() {
    const container = document.getElementById('places-cards');
  
    places.forEach(place => {
      // Create the card div
      const card = document.createElement('div');
      card.classList.add('place-card');
      
      // Create the image element
      const img = document.createElement('img');
      img.src = place.image;
      img.alt = place.name;
  
      // Create the name heading
      const name = document.createElement('h3');
      name.textContent = place.name;
  
      // Create the address paragraph
      const address = document.createElement('p');
      address.textContent = place.address;
  
      // Create the description paragraph
      const description = document.createElement('p');
      description.textContent = place.description;
  
      // Create the link element
      const link = document.createElement('a');
      link.href = place.url;
      link.textContent = 'Visit Website';
      link.target = '_blank'; // Opens in new tab
  
      // Append all elements to the card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(description);
      card.appendChild(link);
  
      // Append the card to the container
      container.appendChild(card);
    }); 
  }
  
  // Call the display function
  displayPlaces();
  
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
  
  displayVisitMessage();

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
  
  setInterval(updateClock, 1000);
  updateClock();
  
  