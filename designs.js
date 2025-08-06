document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Product Data
    const products = [
        {
            id: "SP01",
            name: "Spotify Keychain",
            description: "Custom Spotify keychain with your favorite song and photo",
            price: "5.000",
            image: "images/1.jpg",
            category: "spotify"
        },
        {
            id: "SP02",
            name: "Spotify Keychain",
            description: "Custom Spotify keychain with your favorite song and photo",
            price: "5.000",
            image: "images/2.jpg",
            category: "spotify"
        },
        {
            id: "SP03",
            name: "Spotify Keychain",
            description: "Custom Spotify keychain with your favorite song and photo",
            price: "5.000",
            image: "images/3.jpg",
            category: "spotify"
        },
        {
            id: "SP04",
            name: "Spotify Keychain",
            description: "Custom Spotify keychain with your favorite song and photo",
            price: "5.000",
            image: "images/4.jpg",
            category: "spotify"
        },
        {
            id: "AN05",
            name: "Anime Keychain",
            description: "Custom anime character keychain",
            price: "5.000",
            image: "images/5.jpg",
            category: "anime"
        },
        {
            id: "AN06",
            name: "Anime Keychain",
            description: "Custom anime character keychain",
            price: "5.000",
            image: "images/6.jpg",
            category: "anime"
        },
        {
            id: "AN07",
            name: "Anime Keychain",
            description: "Custom anime character keychain",
            price: "5.000",
            image: "images/7.jpg",
            category: "anime"
        },
        {
            id: "AN08",
            name: "Anime Keychain",
            description: "Custom anime character keychain",
            price: "5.000",
            image: "images/8.jpg",
            category: "anime"
        },
        {
            id: "CT09",
            name: "Custom Keychain",
            description: "Fully custom design based on your request",
            price: "5.000",
            image: "images/9.jpg",
            category: "custom"
        },
        {
            id: "CT10",
            name: "Custom Keychain",
            description: "Fully custom design based on your request",
            price: "5.000",
            image: "images/10.jpg",
            category: "custom"
        },
        {
            id: "AN11",
            name: "Anime Keychain",
            description: "Custom anime character keychain",
            price: "5.000",
            image: "images/11.jpg",
            category: "anime"
        },
        {
            id: "AN12",
            name: "Anime Keychain",
            description: "Custom anime character keychain",
            price: "5.000",
            image: "images/12.jpg",
            category: "anime"
        },
        {
            id: "CT13",
            name: "Custom Keychain",
            description: "Fully custom design based on your request",
            price: "5.000",
            image: "images/13.jpg",
            category: "custom"
        }
    ];
    
    // Generate Product Cards
    const productGrid = document.querySelector('.design-grid');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    function generateProductCards(filter = 'all') {
        productGrid.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'design-card';
            productCard.dataset.category = product.category;
            
            productCard.innerHTML = `
                <div class="design-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="design-overlay">
                        <button class="view-btn">View Details</button>
                    </div>
                </div>
                <div class="design-info">
                    <h3>${product.name}</h3>
                    <p class="design-code">${product.id}</p>
                    <p>${product.description}</p>
                    <div class="product-price">
                        <span>Rp${product.price}</span>
                        <a href="https://wa.me/6283876717125?text=I'm%20interested%20in%20your%20${encodeURIComponent(product.name)}%20(Design%20Code:%20${product.id})" class="whatsapp-design" target="_blank">
                            <i class="fab fa-whatsapp"></i> Order Now
                        </a>
                    </div>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
        
        // Initialize view buttons for the modal
        document.querySelectorAll('.view-btn').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                const image = this.closest('.design-card').querySelector('img').src;
                document.getElementById('modalImage').src = image;
                const modal = new bootstrap.Modal(document.getElementById('imageModal'));
                modal.show();
            });
        });
    }
    
    // Initialize with all products
    generateProductCards();
    
    // Tab filtering functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter products
            generateProductCards(this.dataset.category);
        });
    });
    
    // Custom Guide Modal
    const customGuideBtn = document.getElementById('custom-guide-btn');
    if (customGuideBtn) {
        customGuideBtn.addEventListener('click', function() {
            const modal = new bootstrap.Modal(document.getElementById('customGuideModal'));
            modal.show();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});