
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 250) {
            navbar.classList.add('blurred');
        } else {
            navbar.classList.remove('blurred');
        }
    });

// Select the link with ID 'mod'
document.getElementById('mod').addEventListener('click', function(event) {
    // Prevent the default link behavior
    event.preventDefault();
    
    // Select the target section
    const targetSection = document.querySelector('.about-section.fade-in');
    
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

// Add event listener for the hamburger menu
document.getElementById('hamburger-menu').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show'); // Toggle the 'show' class
});

