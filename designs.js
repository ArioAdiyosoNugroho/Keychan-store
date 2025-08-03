// Tab Filter Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const designCards = document.querySelectorAll('.design-card');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.dataset.category;
        
        // Filter designs
        designCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Design Newsletter Form
const designNewsletterForm = document.getElementById('designNewsletterForm');

if (designNewsletterForm) {
    designNewsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our design updates!');
        designNewsletterForm.reset();
    });
}

// View Details Button Functionality (can be expanded)
// const viewButtons = document.querySelectorAll('.view-btn');

// viewButtons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         // Here you would typically show a modal with more details
//         alert('This would show more details about the design in a modal or separate page.');
//     });
// });

