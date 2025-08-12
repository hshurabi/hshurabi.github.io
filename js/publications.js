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

// Export citation functionality
function exportCitation(publicationTitle, format = 'bibtex') {
    // This would typically generate proper citations
    const sampleBibTeX = `@article{hamed2024neural,
  title={Advanced Neural Architectures for Real-time Medical Image Analysis},
  author={Hamed, A. and Johnson, M. and Smith, R. and Chen, L.},
  journal={Nature Machine Intelligence},
  volume={15},
  pages={234--248},
  year={2024},
  publisher={Nature Publishing Group}
}`;

    // Copy to clipboard
    navigator.clipboard.writeText(sampleBibTeX).then(() => {
        // Show success message
        const notification = document.createElement('div');
        notification.innerHTML = '<i class="fas fa-check"></i> Citation copied to clipboard!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--success-color);
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    });
}

// Add export buttons to publications (optional enhancement)
function addExportButtons() {
    const publicationActions = document.querySelectorAll('.publication-actions');
    
    publicationActions.forEach(actions => {
        const exportBtn = document.createElement('button');
        exportBtn.innerHTML = '<i class="fas fa-quote-right"></i> Cite';
        exportBtn.className = 'pub-link';
        exportBtn.style.background = 'none';
        exportBtn.style.border = 'none';
        exportBtn.style.cursor = 'pointer';
        
        exportBtn.addEventListener('click', () => {
            const publicationTitle = actions.parentElement.querySelector('h3').textContent;
            exportCitation(publicationTitle);
        });
        
        actions.appendChild(exportBtn);
    });
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