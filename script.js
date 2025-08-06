// Mobile Menu Toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Product Data
const products = [
    {
        id: 1,
        name: "Custom Keychain",
        description: "Custom Gantungan kunci, dengan bahan akrilik dan juga dengan desain yang bisa di pilih atau request melalui WhatsApp, klik disini untuk melihat desain..",
        price: "3.500-5.000",
        image: "images/key.jpg"
    },
    {
        id: 2,
        name: "Eco Bag",
        description: "Tas yang berasal dari barang barang bekas seperti plastik dengan desain kekinian dan juga tetap stylelish",
        price: "200.000",
        image: "images/tas.jpg"
    },
    {
        id: 3,
        name: "Eco Pins",
        description: "Bros yang terbuat dari bahan bekas yang indah dan menarik, cocok untuk menambah gaya fashion kamu",
        price: "5.000",
        image: "images/pin.jpg"
    },
    {
        id: 4,
        name: "Eco Tissue Box",
        description: "Wadah tisu untuk kamu yang terbuat dari barang bekas yang ramah lingkungan, dengan desain yang unik dan menarik",
        price: "65.000",
        image: "images/tisu.jpg"
    }
];

// Generate Product Cards
const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    let productCard;

// Jika produk adalah Recycled Keychain, bungkus dengan <a>
if (product.name === "Custom Keychain") {
    productCard = document.createElement('a');
    productCard.href = 'designs.html'; 
    productCard.className = 'product-card';
    productCard.style.textDecoration = 'none'; // hilangkan underline default link
} else {
    productCard = document.createElement('div');
    productCard.className = 'product-card';
}

productCard.innerHTML = `
    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-price">
            <span>Rp${product.price}</span>
            <a href="https://wa.me/6283876717125?text=I'm%20interested%20in%20your%20${encodeURIComponent(product.name)}%20(product%20ID:%20${product.id})" class="whatsapp-product" target="_blank">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
    </div>
`;

productGrid.appendChild(productCard);

});

// Animate Stats Counter
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 20);
}

function checkStatsInView() {
    statNumbers.forEach(stat => {
        const rect = stat.getBoundingClientRect();
        if (rect.top < window.innerHeight && !stat.dataset.animated) {
            stat.dataset.animated = true;
            animateCounter(stat, parseInt(stat.dataset.count));
        }
    });
}

window.addEventListener('scroll', checkStatsInView);
checkStatsInView(); // Check on load

// Form Submissions
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

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
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});