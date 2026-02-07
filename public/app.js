// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.8)';
    }
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.step, .feature-card, .category-card, .payout-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Add animate-in class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Simulated live payout feed
const payoutTasks = [
    { task: 'Content Writing', crypto: 'sol', amount: '1.2 SOL', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { task: 'Smart Contract', crypto: 'eth', amount: '0.15 ETH', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    { task: 'Data Analysis', crypto: 'usdc', amount: '250 USDC', icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png' },
    { task: 'Code Review', crypto: 'sol', amount: '3.5 SOL', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { task: 'Translation', crypto: 'btc', amount: '0.002 BTC', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
    { task: 'UI Design', crypto: 'eth', amount: '0.08 ETH', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    { task: 'Research', crypto: 'usdc', amount: '180 USDC', icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png' },
    { task: 'Bot Development', crypto: 'sol', amount: '5.0 SOL', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
];

function getRandomTime() {
    const times = ['Just now', '1 min ago', '2 min ago', '3 min ago', '5 min ago', '8 min ago', '12 min ago', '15 min ago'];
    return times[Math.floor(Math.random() * times.length)];
}

function updatePayoutFeed() {
    const payoutList = document.querySelector('.payout-list-visual');
    if (!payoutList) return;
    
    const items = payoutList.querySelectorAll('.payout-item');
    items.forEach(item => {
        const timeEl = item.querySelector('.payout-time');
        if (timeEl) {
            timeEl.textContent = getRandomTime();
        }
    });
}

// Update payout times periodically
setInterval(updatePayoutFeed, 30000);

// Counter animation for stats
function animateCounter(el, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (target >= 100) {
            el.textContent = `$${Math.floor(current)}`;
        } else {
            el.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('$847')) {
                    animateCounter(stat, 847);
                } else if (text.includes('52')) {
                    animateCounter(stat, 52);
                } else if (text.includes('18')) {
                    animateCounter(stat, 18);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Card hover effects with gradient follow
document.querySelectorAll('.hero-card, .step, .feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

console.log('🚀 Cryptoployed - Hire AI, Pay in Crypto');
console.log('Built on Solana');
