// Toggle Button functionality
document.querySelectorAll('.toggle-input').forEach(input => {
    input.addEventListener('change', function() {
        // You can add additional functionality here
        console.log('Toggle state:', this.checked);
    });
});

// Dropdown functionality
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('.btn-dropdown');
    const content = dropdown.querySelector('.dropdown-content');

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            content.style.display = 'none';
        }
    });

    // Toggle dropdown on button click
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = content.style.display === 'block';
        content.style.display = isVisible ? 'none' : 'block';
    });
});

// Loading Button Demo
document.querySelectorAll('.btn-loading').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.disabled = true;
        
        // Simulate loading
        setTimeout(() => {
            this.disabled = false;
            this.textContent = originalText;
        }, 2000);
    });
});

// Social Media Button interactions
document.querySelectorAll('.btn-social').forEach(button => {
    button.addEventListener('click', function() {
        // Add a quick scale animation on click
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Sticky Button visibility
const stickyButton = document.querySelector('.btn-sticky');
if (stickyButton) {
    // Initially hide the button
    stickyButton.style.display = 'none';
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 200) {
            stickyButton.classList.add('visible');
        } else {
            stickyButton.classList.remove('visible');
        }
    });

    // Optional: Add click handler
    stickyButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Close Button animation
document.querySelectorAll('.btn-close').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'rotate(90deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 300);
    });
});
