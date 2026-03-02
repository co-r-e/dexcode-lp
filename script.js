document.addEventListener('DOMContentLoaded', () => {
    // Generate Hero Background Slides
    const heroBg = document.getElementById('hero-background');
    if (heroBg) {
        let slideWidth = 132;
        let gapX = 28;
        let gapY = 22;

        if (window.innerWidth <= 600) {
            slideWidth = 92;
            gapX = 14;
            gapY = 12;
        } else if (window.innerWidth <= 960) {
            slideWidth = 108;
            gapX = 20;
            gapY = 16;
        }

        const slideHeight = Math.round((slideWidth * 9) / 16);
        const coveragePadding = 200;

        heroBg.textContent = '';
        heroBg.style.setProperty('--slide-width', `${slideWidth}px`);
        heroBg.style.setProperty('--slide-height', `${slideHeight}px`);
        heroBg.style.setProperty('--slide-gap-x', `${gapX}px`);
        heroBg.style.setProperty('--slide-gap-y', `${gapY}px`);
        
        // Add extra rows/columns because the background grid is slightly rotated.
        const cols = Math.ceil((window.innerWidth + coveragePadding) / (slideWidth + gapX)) + 4;
        const rows = Math.ceil((window.innerHeight + coveragePadding) / (slideHeight + gapY)) + 4;
        const totalSlides = cols * rows;

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < totalSlides; i++) {
            const slide = document.createElement('div');
            slide.classList.add('slide-thumbnail');
            
            // "AI First" gradient variants - Vibrant Tech Colors
            const gradients = [
                ['#2563eb', '#06b6d4'], // Blue -> Cyan
                ['#7c3aed', '#d946ef'], // Violet -> Fuchsia
                ['#4f46e5', '#9333ea'], // Indigo -> Purple
                ['#059669', '#2dd4bf'], // Emerald -> Teal
                ['#ea580c', '#e11d48'], // Orange -> Rose
                ['#facc15', '#f97316'], // Yellow -> Orange
                ['#84cc16', '#10b981'], // Lime -> Emerald
                ['#f472b6', '#ef4444'], // Pink -> Red
                ['#06b6d4', '#3b82f6'], // Cyan -> Blue
                ['#e879f9', '#a855f7'], // Fuchsia -> Purple
            ];

            const variant = gradients[Math.floor(Math.random() * gradients.length)];
            const angle = Math.floor(Math.random() * 360);
            
            slide.style.background = `linear-gradient(${angle}deg, ${variant[0]}, ${variant[1]})`;
            
            // Random layout type
            const types = ['type-title', 'type-list', 'type-chart', 'type-split', 'type-code'];
            slide.classList.add(types[Math.floor(Math.random() * types.length)]);

            fragment.appendChild(slide);
        }
        
        heroBg.appendChild(fragment);
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Mobile Navigation (Future enhancement placeholder)
    // const menuToggle = document.querySelector('.menu-toggle');
    // if (menuToggle) {
    //     menuToggle.addEventListener('click', () => {
    //         document.querySelector('.nav-list').classList.toggle('active');
    //     });
    // }
});
