// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formSuccessMessage = document.getElementById('formSuccessMessage');
    const submitButton = document.getElementById('submitButton');
    const openEmailBtn = document.getElementById('openEmailClient');
    const sendAnotherBtn = document.getElementById('sendAnotherMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (in a real scenario, this would send to a server)
            setTimeout(function() {
                // Hide form and show success message
                contactForm.style.display = 'none';
                formSuccessMessage.style.display = 'block';
                
                // Reset button state
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                
                // Create mailto link with form data
                const serviceText = data.service ? 
                    document.querySelector(`#service option[value="${data.service}"]`).textContent : 
                    'General Inquiry';
                
                const subject = encodeURIComponent(`Contact Form: ${serviceText}`);
                const body = encodeURIComponent(
                    `Name: ${data.name}\n` +
                    `Email: ${data.email}\n` +
                    `Phone: ${data.phone || 'Not provided'}\n` +
                    `Service: ${serviceText}\n\n` +
                    `Message:\n${data.message}`
                );
                
                // Set mailto link on the email button
                const mailtoLink = `mailto:info@bmcareservices.com?subject=${subject}&body=${body}`;
                if (openEmailBtn) {
                    openEmailBtn.href = mailtoLink;
                }
                
                // Scroll to success message
                formSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 500);
        });
        
        // Handle "Send Another Message" button
        if (sendAnotherBtn) {
            sendAnotherBtn.addEventListener('click', function() {
                formSuccessMessage.style.display = 'none';
                contactForm.style.display = 'block';
                contactForm.reset();
                contactForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
        }
    }

    // Smooth scrolling for anchor links
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

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .value-card, .care-service-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
