// Typing Script JS
// Define the Typed instances
var typedEffect = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80,
    onComplete: function(self) {
        self.reset(); // Reset the typing animation to ensure it continues indefinitely
    }
});

var typed = new Typed(".typing-2",{
    strings: ["Web Developer", "Web Designer", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80,
    onComplete: function(self) {
        self.reset(); // Reset the typing animation to ensure it continues indefinitely
    }
});



// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }

    })
})

//Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})
document.addEventListener("DOMContentLoaded", function() {
    const darkModeIcon = document.getElementById("dark-mode-icon");
    const body = document.body;
    let isDarkMode = true; // Initially set dark mode to true

    // Function to toggle dark mode
    function toggleDarkMode() {
        isDarkMode = !isDarkMode; // Invert the dark mode state

        if (isDarkMode) {
            // Apply dark mode styles
            body.classList.add("dark-mode");
        } else {
            // Remove dark mode styles
            body.classList.remove("dark-mode");
        }

        localStorage.setItem("darkMode", isDarkMode); // Store the updated state
    }

    // Set initial dark mode state
    if (localStorage.getItem("darkMode") !== null) {
        isDarkMode = localStorage.getItem("darkMode") === "true";
    }

    // Toggle dark mode initially based on the stored state
    toggleDarkMode();

    // Dark mode toggle event
    darkModeIcon.addEventListener("click", toggleDarkMode);

    // Prevent default behavior of the dark mode icon to avoid any potential issues
    darkModeIcon.addEventListener("mousemove", function(event) {
        event.preventDefault();
    });
});








