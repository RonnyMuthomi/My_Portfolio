// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href").trim());
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Show More Projects
document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.getElementById("showMoreProjects");
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", function() {
            document.querySelectorAll(".project-card.hidden").forEach(card => {
                card.classList.remove("hidden");
            });
            this.style.display = "none";
        });
    }
});