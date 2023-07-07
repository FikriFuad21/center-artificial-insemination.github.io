// Navbar Change Color When Scrolling
const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle
    ("scrolling-active", windowPosition);
});

// Textillate
