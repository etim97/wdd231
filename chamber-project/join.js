document.addEventListener("DOMContentLoaded", () => {
    // Set timestamp if the field exists
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
      timestampField.value = new Date().toISOString();
    }
    
    // Modal open handlers: select links with class 'modal-link'
    const modalLinks = document.querySelectorAll(".modal-link");
    modalLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const card = e.target.closest(".card");
        const modalId = card.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.showModal();
        }
      });
    });
    
    // Modal close handlers: select buttons with class 'close-modal'
    const closeButtons = document.querySelectorAll("dialog .close-modal");
    closeButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.target.closest("dialog").close();
      });
    });
  });

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

document.addEventListener("DOMContentLoaded", function () {
    // Create a URLSearchParams object from the query string (GET method)
    const params = new URLSearchParams(window.location.search);
    
    // Retrieve the form values from the URL parameters
    const firstName = params.get("firstName") || "";
    const lastName = params.get("lastName") || "";
    const email = params.get("email") || "";
    const phone = params.get("phone") || "";
    const organization = params.get("organization") || "";
    const timestamp = params.get("timestamp") || "";
    
    // Insert the retrieved values into the placeholders on the page
    document.getElementById("display-firstName").textContent = firstName;
    document.getElementById("display-lastName").textContent = lastName;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-phone").textContent = phone;
    document.getElementById("display-organization").textContent = organization;
    
    // Convert the timestamp to a readable format (if available) and display it
    if (timestamp) {
      const date = new Date(timestamp);
      document.getElementById("display-timestamp").textContent = date.toLocaleString();
    }
  });
  