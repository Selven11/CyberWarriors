gsap.registerPlugin(ScrollTrigger);

// Initial loading animations for navigation
gsap.from(".logo", {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "elastic.out(1, 0.5)"
});

// Animate robot emoji in logo with continuous bounce
gsap.to(".robot", {
    y: -10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Staggered navigation links animation
gsap.from(".nav-links a", {
    duration: 0.8,
    opacity: 0,
    y: -20,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

// Hero section animations
const heroTimeline = gsap.timeline({});
heroTimeline
    .from(".hero h1", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "back.out(1.2)"
    })
    .from(".hero p", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "back.out(1)"
    }, "-=0.5");

// Floating emojis animation in hero section
const emojis = document.querySelectorAll('.emoji');
emojis.forEach((emoji, index) => {
    // Set random starting positions
    gsap.set(emoji, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360
    });

    // Create floating animation
    gsap.to(emoji, {
        duration: "random(4, 6)",
        x: `random(${-window.innerWidth/3}, ${window.innerWidth/3})`,
        y: `random(${-window.innerHeight/3}, ${window.innerHeight/3})`,
        rotation: "random(-180, 180)",
        repeat: -1,
        yoyo: true,
        ease: "none",
        delay: index * 0.3
    });
});

// Adventure cards animations
gsap.utils.toArray(".card").forEach((card, index) => {
    // Card entrance animation
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        scale: 0.5,
        opacity: 0,
        rotation: -15,
        duration: 0.8,
        delay: index * 0.2,
        ease: "back.out(1.7)"
    });

    // Sparkles animation
    const sparkles = card.querySelector('.card-sparkles');
    if (sparkles) {
        // Random position sparkles
        for (let i = 0; i < 3; i++) {
            const sparkle = sparkles.cloneNode(true);
            card.appendChild(sparkle);
            gsap.set(sparkle, {
                x: `random(${-50}, ${50})`,
                y: `random(${-50}, ${50})`
            });
            
            gsap.to(sparkle, {
                opacity: "random(0.3, 1)",
                scale: "random(0.8, 1.2)",
                duration: "random(1, 2)",
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }
    }

    // Hover animations
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            rotation: 0,
            duration: 0.3,
            ease: "power1.out"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power1.in"
        });
    });
});

// Stats counter animation with fun bounce
const statBoxes = document.querySelectorAll('.stat-box');
statBoxes.forEach(box => {
    const numberElement = box.querySelector('.stat-number');
    const targetValue = parseInt(numberElement.dataset.value);

    // Create box entrance animation
    gsap.from(box, {
        scrollTrigger: {
            trigger: box,
            start: "top center+=100",
            toggleActions: "play none none reverse"
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        onComplete: () => {
            // Start counter animation after box appears
            gsap.to(numberElement, {
                duration: 2,
                innerText: targetValue,
                snap: { innerText: 1 },
                ease: "bounce.out"
            });
        }
    });

    // Emoji bounce animation
    const emoji = box.querySelector('.stat-emoji');
    gsap.to(emoji, {
        y: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});

// Community section animations
gsap.from(".friends-container", {
    scrollTrigger: {
        trigger: ".friends-container",
        start: "top center+=100",
        toggleActions: "play none none reverse"
    },
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)"
});

// Animate friend avatars
gsap.utils.toArray(".friend-avatar").forEach((avatar, index) => {
    gsap.to(avatar, {
        y: -15,
        rotation: "random(-5, 5)",
        duration: 1,
        delay: index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});

// Join button pulse animation
gsap.to(".join-button", {
    scale: 1.1,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Contact form animations
const contactTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top center"
    }
});

contactTimeline
    .from(".message-robot", {
        scale: 0,
        rotation: 720,
        duration: 1,
        ease: "back.out(1.7)"
    })
    .from(".contact-form .input-group", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.2)"
    }, "-=0.5")
    .from(".send-button", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
    });

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: target,
                offsetY: 70
            },
            ease: "power2.inOut"
        });
    });
});

// Add confetti explosion on button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevent form submission
        if (button.type !== 'submit') {
            e.preventDefault();
        }
        
        // Create particle explosion effect
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.backgroundColor = ['#4a90e2', '#FFD700', '#FF69B4'][Math.floor(Math.random() * 3)];
            particle.style.borderRadius = '50%';
            button.appendChild(particle);

            gsap.fromTo(particle, 
                {
                    x: 0,
                    y: 0,
                    scale: 1
                },
                {
                    x: `random(-100, 100)`,
                    y: `random(-100, 100)`,
                    scale: 0,
                    duration: 1,
                    ease: "power1.out",
                    onComplete: () => particle.remove()
                }
            );
        }
    });
});