// Smooth Scroll
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ===== Select All Sections =====
const sections = document.querySelectorAll("section");

// ===== Select All Navbar Links =====
const navItems = document.querySelectorAll(".nav-links a");

// ===== Close Mobile Menu After Clicking Link =====
navItems.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// ===== Active Link Highlight on Scroll =====
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const themeToggle = document.getElementById("themeToggle");

const form = document.querySelector("form");
const toast = document.getElementById("toast");

form.addEventListener("submit", function(e) {
    e.preventDefault();   // prevents page reload

    // Show toast
    toast.classList.add("show");

    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    // Optional: reset form
    form.reset();
});
const toggleBtn = document.getElementById("mode-toggle");

// Load saved mode
if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "Light Mode";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) {
        toggleBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
