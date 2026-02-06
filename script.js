// Hamburger menu
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    var navLinkItems = navLinks.querySelectorAll('a');
    for (var i = 0; i < navLinkItems.length; i++) {
        navLinkItems[i].addEventListener('click', function () {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId !== '#') {
            e.preventDefault();
            var target = document.querySelector(targetId);
            if (target) {
                var navHeight = document.querySelector('nav').offsetHeight;
                var targetPosition = target.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Contact form submission
var contactForm = document.getElementById('contact-form');
var formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value;

        // In production, this would send to a backend or email service
        formSuccess.textContent = 'Thank you, ' + name + '! I\'ll be in touch within 1-2 business days.';
        formSuccess.style.display = 'block';

        contactForm.reset();

        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

// Add scroll effect to navigation
var nav = document.querySelector('nav');
var scrollThreshold = 50;

window.addEventListener('scroll', function() {
    if (window.scrollY > scrollThreshold) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});
