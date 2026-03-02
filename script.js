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
            
            // Warm pop gradients - Yellow, Orange, Red, Coral
            const gradients = [
                ['#facc15', '#f59e0b'], // Yellow -> Amber
                ['#fbbf24', '#f97316'], // Amber -> Orange
                ['#f97316', '#ef4444'], // Orange -> Red
                ['#fb923c', '#f43f5e'], // Light Orange -> Rose
                ['#fde047', '#fb923c'], // Light Yellow -> Orange
                ['#ef4444', '#dc2626'], // Red -> Dark Red
                ['#f59e0b', '#ea580c'], // Amber -> Deep Orange
                ['#fcd34d', '#f87171'], // Pale Yellow -> Light Red
                ['#f43f5e', '#e11d48'], // Rose -> Crimson
                ['#fbbf24', '#ef4444'], // Amber -> Red
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
