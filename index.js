//toggle icon nav bar
// scroll section

window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};// Function to toggle the navbar visibility on mobile
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const closeButton = document.querySelector('.close-btn');
    navbar.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    
    // When menu is active, show the close button
    if (navbar.classList.contains('active')) {
        closeButton.style.display = 'block';
    } else {
        closeButton.style.display = 'none';
    }
}

// Function to close the menu when a link is clicked
function closeMenu() {
    const navbar = document.querySelector('.navbar');
    const closeButton = document.querySelector('.close-btn');
    navbar.classList.remove('active'); // Remove 'active' class to hide the menu
    closeButton.style.display = 'none'; // Hide the close button when the menu is closed
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Use scrollIntoView to smoothly scroll to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
