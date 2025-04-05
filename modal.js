document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("course-modal");
    const closeModalBtn = document.getElementById("close-modal");

    document.querySelectorAll(".view-details").forEach(button => {
        button.addEventListener("click", function () {
            const courseCard = this.closest(".course-card");
            
            document.getElementById("modal-title").textContent = courseCard.dataset.title;
            document.getElementById("modal-number").textContent = courseCard.dataset.number;
            document.getElementById("modal-credits").textContent = courseCard.dataset.credits;
            document.getElementById("modal-description").textContent = courseCard.dataset.description;
            document.getElementById("modal-certificate").textContent = courseCard.dataset.certificate;
            document.getElementById("modal-stack").textContent = courseCard.dataset.stack;
            
            modal.showModal();
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modal.close();
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});
