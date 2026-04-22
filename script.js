document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer for smooth entry
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));

    // Header transparency change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            header.style.background = 'rgba(248, 249, 253, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(248, 249, 253, 0.8)';
        }
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // CV Modal Logic
    const cvModal = document.getElementById('cv-modal');
    const openCvBtn = document.querySelector('.cv-image-thumb'); // Changed to match new card structure
    const closeCvBtn = document.getElementById('close-cv');

    if (openCvBtn && cvModal) {
        openCvBtn.addEventListener('click', () => {
            cvModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; 
        });
    }

    if (closeCvBtn && cvModal) {
        closeCvBtn.addEventListener('click', () => {
            cvModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scroll
        });
    }

    // Close modal on click outside
    window.addEventListener('click', (event) => {
        if (event.target === cvModal) {
            cvModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    console.log('%c Portfolio Updated: Content Refreshed ', 'background: #7B61FF; color: #fff; font-size: 16px; font-weight: bold;');
});
