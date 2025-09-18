// IOA Australia JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact button functionality is now handled by onclick attributes in HTML
    
    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.cause-card, .mission-box, .impact-box, .success-box');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.01)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all glass cards for animation
    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add click interactions for info boxes
    const infoBoxes = document.querySelectorAll('.definition-box, .symptoms-box, .mission-box, .cause-card, .impact-box');
    infoBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Add subtle click feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Video error handling
    const video = document.querySelector('.intro-video');
    if (video) {
        video.addEventListener('error', function() {
            console.log('Video failed to load');
            // Could show alternative content or message
        });
    }
    
    // Title click to scroll to top
    const title = document.querySelector('.title');
    if (title) {
        title.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        title.style.cursor = 'pointer';
    }
    
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Form validation for future contact forms
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Enhanced accessibility
    document.addEventListener('keydown', function(e) {
        // ESC key functionality
        if (e.key === 'Escape') {
            // Could close modals, reset forms, etc.
        }
    });
    
    // Add focus indicators for better accessibility
    const focusableElements = document.querySelectorAll('button, a, input, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--accent-wave)';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    console.log('IOA Australia website initialized successfully');
});