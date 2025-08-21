document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle - Fixed Implementation
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    menuToggle.addEventListener('click', () => {
        // Toggle menu visibility
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Toggle body scroll
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Product Data
    const products = [
        {
            id: 1,
            name: "Custom Keychain",
            description: "Premium custom keychains made from upcycled acrylic materials. Choose from our designs or request your own custom creation.",
            price: "3.500-5.000",
            image: "images/key.jpg",
            highlight: true
        },
        {
            id: 2,
            name: "Eco Bag",
            description: "Stylish bags crafted from recycled plastics and fabrics. Each piece is unique and carries a story of sustainability.",
            price: "200.000",
            image: "images/tas.jpg",
            highlight: false
        },
        {
            id: 3,
            name: "Eco Pins",
            description: "Elegant brooches made from repurposed materials. Perfect for adding a sustainable touch to any outfit.",
            price: "5.000",
            image: "images/pin.jpg",
            highlight: false
        },
        {
            id: 4,
            name: "Eco Tissue Box",
            description: "Beautiful tissue box covers made from upcycled materials. Functional art for your home.",
            price: "65.000",
            image: "images/tisu.jpg",
            highlight: false
        }
    ];

    // Generate Product Cards
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${product.highlight ? 'highlight' : ''}`;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">
                    <span>Rp${product.price}</span>
                    <a href="https://wa.me/6283876717125?text=I'm%20interested%20in%20your%20${encodeURIComponent(product.name)}%20(product%20ID:%20${product.id})" class="whatsapp-product" target="_blank" aria-label="Contact about ${product.name}">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
                ${product.highlight ? `
                <a href="designs.html" class="btn btn-secondary" style="margin-top: 1rem; display: inline-block; width: 100%; text-align: center;">
                    View Designs
                </a>
                ` : ''}
            </div>
        `;

        productGrid.appendChild(productCard);
    });

    // Animated Counter
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    function animateCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounter, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        });
    }

    // Enhanced Parallax Effect
function setupParallax() {
    const heroSection = document.querySelector('.hero');
    const parallaxWrapper = document.querySelector('.parallax-wrapper');
    const parallaxBg = document.querySelector('.parallax-bg');
    
    if (!heroSection || !parallaxWrapper || !parallaxBg) return;
    
    let requestId = null;
    let lastScroll = 0;
    const parallaxIntensity = 0.2;
    const smoothness = 0.1;
    
    function updateParallax() {
        const heroRect = heroSection.getBoundingClientRect();
        const scrollY = window.scrollY;
        
        // Only animate when hero is in view
        if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
            // Smooth the scroll value for more fluid motion
            const smoothedScroll = lastScroll + (scrollY - lastScroll) * smoothness;
            lastScroll = smoothedScroll;
            
            // Calculate parallax position with easing
            const parallaxOffset = smoothedScroll * parallaxIntensity;
            const scale = 1 + (smoothedScroll * 0.0003);
            const opacity = 1 - (smoothedScroll * 0.0015);
            
            // Apply transforms
            parallaxWrapper.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
            parallaxBg.style.transform = `translateZ(-1px) scale(${Math.max(1.1, scale)})`;
            parallaxBg.style.opacity = `${Math.max(0.6, opacity)}`;
        }
        
        requestId = requestAnimationFrame(updateParallax);
    }
    
    // Start the animation
    updateParallax();
    
    // Cleanup on scroll
    window.addEventListener('scroll', () => {
        if (!requestId) {
            updateParallax();
        }
    });
    
    // Pause when tab is inactive
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(requestId);
            requestId = null;
        } else {
            updateParallax();
        }
    });
}

// Call this in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    setupParallax();
    // ... rest of your existing code
});

    // Start counter when element is in view
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Form Submissions
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    // if (contactForm) {
    //     contactForm.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         // Here you would typically send the form data to a server
    //         alert('Thank you for your message! We will get back to you soon.');
    //         contactForm.reset();
    //     });
    // }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.glass-nav');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Parallax Effect for Hero Background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg');
        
        if (heroBg) {
            heroBg.style.transform = `scale(${1 + scrollPosition * 0.0005})`;
            heroBg.style.opacity = `${1 - scrollPosition * 0.002}`;
        }
    });

    // Initialize all animations when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('aos-animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});