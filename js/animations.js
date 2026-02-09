// Sign Bridge - Minimal Animations

// Reveal animations for timeline
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.5s ease';
        timelineObserver.observe(item);
    });

    // Gentle hover effect for flow steps
    const flowSteps = document.querySelectorAll('.flow-step');
    flowSteps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        step.addEventListener('mouseleave', () => {
            step.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Stat counter animation (soft)
    const statBoxes = document.querySelectorAll('.stat-box');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1)';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.5 });

    statBoxes.forEach(box => {
        box.style.transform = 'scale(0.9)';
        box.style.opacity = '0';
        box.style.transition = 'all 0.4s ease';
        statObserver.observe(box);
    });
});
