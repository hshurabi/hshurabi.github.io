// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Initialize icon
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Sample search data
const searchData = [
    {
        title: "Advanced Neural Architectures for Real-time Medical Image Analysis",
        type: "publication",
        year: "2024",
        description: "Research on neural networks for medical imaging applications",
        url: "publications.html"
    },
    {
        title: "Quantum-Enhanced Optimization Algorithms",
        type: "publication",
        year: "2024",
        description: "Novel quantum computing approaches for optimization",
        url: "publications.html"
    },
    {
        title: "Advanced Machine Learning for Healthcare",
        type: "research",
        description: "Current research project on ML applications in healthcare",
        url: "research.html"
    },
    {
        title: "Scalable Data Analytics Platform",
        type: "research",
        description: "Distributed computing framework for large-scale data processing",
        url: "research.html"
    }
];

function openSearchModal() {
    searchModal.classList.add('active');
    searchInput.focus();
    document.body.style.overflow = 'hidden';
}

function closeSearchModal() {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
    document.body.style.overflow = '';
}

function performSearch(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '<p style="padding: 1rem; color: var(--text-secondary); text-align: center;">Start typing to search...</p>';
        return;
    }

    const results = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length === 0) {
        searchResults.innerHTML = '<p style="padding: 1rem; color: var(--text-secondary); text-align: center;">No results found.</p>';
        return;
    }

    const resultsHTML = results.map(item => `
        <div class="search-result-item" style="padding: 1rem; border-bottom: 1px solid var(--border-color); cursor: pointer;" onclick="window.location.href='${item.url}'">
            <h4 style="margin-bottom: 0.5rem; color: var(--primary-color);">${item.title}</h4>
            <p style="margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;">${item.description}</p>
            <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted);">
                <span style="background: var(--bg-tertiary); padding: 0.25rem 0.5rem; border-radius: 0.25rem;">${item.type}</span>
                ${item.year ? `<span>${item.year}</span>` : ''}
            </div>
        </div>
    `).join('');

    searchResults.innerHTML = resultsHTML;
}

// Event listeners
searchBtn.addEventListener('click', openSearchModal);
searchClose.addEventListener('click', closeSearchModal);

searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        closeSearchModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        closeSearchModal();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearchModal();
    }
});

// Debounced search
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch(e.target.value);
    }, 300);
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Loading animation for page transitions
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease-in-out';
        document.body.style.opacity = '1';
    }, 50);
});