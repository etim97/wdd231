document.addEventListener("DOMContentLoaded", function () {
    fetchMembers(); // Fetch members when the page loads

    //  Hamburger Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navul = document.querySelector(".nav ul"); // Ensure this is correct in HTML

    if (menuToggle && navbar) {
        menuToggle.addEventListener("change", function () {
            navbar.classList.toggle("open", this.checked);
        });
    } else {
        console.error("Error: Menu toggle or navbar not found!");
    }

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
});

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

//  Function to display members
function displayMembers(members) {
    const membersContainer = document.getElementById("members");

    if (!membersContainer) {
        console.error("Error: #members container not found!");
        return;
    }

    membersContainer.innerHTML = ""; // Clear previous content

    members.forEach(member => {
        const memberCard = document.createElement("section");
        memberCard.classList.add("member-card");

        // Assign membership levels
        let membershipClass = "";
        if (member.membership === 1) membershipClass = "member";
        else if (member.membership === 2) membershipClass = "silver";
        else if (member.membership === 3) membershipClass = "gold";

        memberCard.classList.add(membershipClass);

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Industry:</strong> ${member.industry}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership:</strong> ${membershipClass.toUpperCase()}</p>
        `;

        membersContainer.appendChild(memberCard);
    });
}
