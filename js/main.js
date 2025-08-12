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
    // Get all publication and research items
    const publicationItems = document.querySelectorAll('.publication-item');
    const researchAreas = document.querySelectorAll('.area-card');

    let found = false;

    // Hide all items first
    publicationItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(query.toLowerCase())) {
            item.style.display = 'list-item';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    researchAreas.forEach(area => {
        if (area.textContent.toLowerCase().includes(query.toLowerCase())) {
            area.style.display = '';
            found = true;
        } else {
            area.style.display = 'none';
        }
    });

    // Show a message if nothing found
    if (!found) {
        searchResults.innerHTML = '<p style="padding: 1rem; color: var(--text-secondary); text-align: center;">No results found.</p>';
    } else {
        searchResults.innerHTML = '';
    }
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

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburgerMenu');
  const navMenu = document.querySelector('.nav-menu ul');
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});