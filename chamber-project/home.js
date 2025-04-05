

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
    

    //  Grid/List View Toggle
    const gridViewBtn = document.getElementById("gridView");
    const listViewBtn = document.getElementById("listView");
    const membersContainer = document.getElementById("members");

    if (gridViewBtn && listViewBtn && membersContainer) {
        gridViewBtn.addEventListener("click", function () {
            membersContainer.classList.add("grid");
            membersContainer.classList.remove("list");
        });

        listViewBtn.addEventListener("click", function () {
            membersContainer.classList.add("list");
            membersContainer.classList.remove("grid");
        });
    } else {
        console.error("Error: Grid/List buttons or members container not found!");
    }

// 📥 Fetch and display members
async function fetchMembers() {
    try {
        const response = await fetch("./data/members.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

// Sample JSON data representing members
  const members = [
    { "name": "John Doe", "membership": "gold", "role": "Web Developer" },
    { "name": "Jane Smith", "membership": "silver", "role": "UI/UX Designer" },
    { "name": "Alice Johnson", "membership": "gold", "role": "Front-End Developer" },
    { "name": "Bob Brown", "membership": "silver", "role": "Back-End Developer" },
    { "name": "Charlie White", "membership": "bronze", "role": "Graphic Designer" }
  ];

  // Function to filter and randomly select members with gold or silver membership
  function getRandomSpotlightMembers() {
    // Filter for gold and silver members
    const goldSilverMembers = members.filter(member => 
      member.membership === "gold" || member.membership === "silver"
    );

    // Shuffle and select 2-3 random members
    const shuffled = goldSilverMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3); // Select up to 3 members
  }

  // Display the selected members in the spotlight
  function displaySpotlightMembers() {
    const spotlightMembers = getRandomSpotlightMembers();
    const container = document.getElementById('members-container');
    container.innerHTML = ""; // Clear any existing content

    spotlightMembers.forEach(member => {
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('member');
      memberDiv.innerHTML = `
        <h3>${member.name}</h3>
        <p>Role: ${member.role}</p>
        <p>Membership Level: ${member.membership.charAt(0).toUpperCase() + member.membership.slice(1)}</p>
      `;
      container.appendChild(memberDiv);
    });
  }

  // Run the function to display the members on page load
  window.onload = displaySpotlightMembers

  // Your OpenWeatherMap API key
  const apiKey = 'YOUR_API_KEY';
  const city = 'London'; // Change this to your desired city
  const units = 'metric'; // Celsius temperature

  // Fetch current weather and forecast
  async function fetchWeather() {
    try {
      const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
      const currentWeatherData = await currentWeatherResponse.json();
      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=3&appid=${apiKey}`);
      const forecastData = await forecastResponse.json();

      displayWeather(currentWeatherData, forecastData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  // Display the weather data
  function displayWeather(current, forecast) {
    const currentWeatherDiv = document.getElementById('current-weather');
    const forecastDiv = document.getElementById('forecast');

    // Current weather
    currentWeatherDiv.innerHTML = `
      <p>Temperature: ${current.main.temp}°C</p>
      <p>Description: ${current.weather[0].description}</p>
    `;

    // 3-day forecast
    forecastDiv.innerHTML = '<h3>3-Day Forecast:</h3>';
    forecast.list.slice(0, 3).forEach((day) => {
      forecastDiv.innerHTML += `
        <p>${new Date(day.dt * 1000).toLocaleDateString()}: ${day.main.temp}°C, ${day.weather[0].description}</p>
      `;
    });
  }

  // Call the function on page load
  window.onload = fetchWeather;



