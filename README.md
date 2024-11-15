# Modern Animated Button Library

A comprehensive collection of beautifully animated buttons for modern web interfaces. This library includes 14 different button types with smooth animations, hover effects, and interactive feedback.

![Button Library Preview](preview.gif)

## Features

### Button Types
1. **Primary Button**
   - Main call-to-action
   - Pulse animation
   - Ripple effect on click

2. **Secondary Button**
   - Support actions
   - Shake animation
   - Gradient transition

3. **Tertiary Button**
   - Subtle actions
   - Sliding underline
   - Smooth color transition

4. **Icon Button**
   - Compact circular design
   - Rotation animation
   - Color transition

5. **Toggle Button**
   - State switching
   - Smooth slide animation
   - Color feedback

6. **Floating Action Button (FAB)**
   - Fixed position
   - Bounce animation
   - Gradient background

7. **Dropdown Button**
   - Expandable options
   - Glow effect
   - Smooth transition

8. **Submit Button**
   - Form submission
   - Ripple animation
   - Loading state

9. **Ghost Button**
   - Outlined style
   - Pulse animation
   - Fill effect

10. **CTA Group Button**
    - Button combinations
    - Coordinated animations
    - Unified styling

11. **Loading Button**
    - Progress indication
    - Spinner animation
    - State feedback

12. **Social Media Button**
    - Platform-specific colors
    - Scale animation
    - Hover effects

13. **Sticky Button**
    - Fixed positioning
    - Entrance animation
    - Scroll-aware

14. **Close Button**
    - Dismissal actions
    - Rotation animation
    - Color transition

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-button-library.git
```

2. Include the required files in your HTML:
```html
<link rel="stylesheet" href="styles.css">
<script src="script.js" defer></script>
```

3. Add Font Awesome for icons:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

## Usage

### Basic Button
```html
<button class="btn btn-primary">Click Me</button>
```

### Icon Button
```html
<button class="btn btn-icon">
    <i class="fas fa-search"></i>
</button>
```

### Toggle Button
```html
<label class="btn btn-toggle">
    <input type="checkbox" class="toggle-input">
    <span class="toggle-label">Dark Mode</span>
    <span class="toggle-slider"></span>
</label>
```

### Loading Button
```html
<button class="btn btn-loading">
    <span class="spinner"></span>
    Loading...
</button>
```

## Customization

### Colors
Modify the CSS variables in `styles.css` to match your brand colors:
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
}
```

### Animations
Each button type has its own animation settings that can be customized in the CSS file.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Font Awesome for icons
- Inspired by modern UI/UX practices
- Built with vanilla JavaScript and CSS

## Author

Your Name - [Your Website](https://yourwebsite.com)

## Support

If you find this project helpful, please give it a ⭐️!
