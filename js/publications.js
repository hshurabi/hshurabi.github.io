// Publications page specific functionality
document.addEventListener('DOMContentLoaded', () => {
    initializePublicationFilters();
    initializeLoadMore();
});

function initializePublicationFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationItems = document.querySelectorAll('.publication-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter publications
            publicationItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'list-item';
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 100);
                } else {
                    if (item.classList.contains(filterValue)) {
                        item.style.display = 'list-item';
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 200);
                    }
                }
            });
        });
    });
}

function initializeLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more .btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // Simulate loading more publications
            loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            setTimeout(() => {
                // In a real application, this would load more publications from an API
                loadMoreBtn.innerHTML = '<i class="fas fa-check"></i> All publications loaded';
                loadMoreBtn.disabled = true;
                loadMoreBtn.style.opacity = '0.6';
                loadMoreBtn.style.cursor = 'not-allowed';
            }, 1000);
        });
    }
}
// CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);