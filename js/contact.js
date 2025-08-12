// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeContactForm();
    initializeFormValidation();
});

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
}

function handleFormSubmission(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');

    // Validate form
    if (!validateForm(form)) {
        return;
    }

    // Show loading state
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            clearValidationStates(form);
        } else {
            showNotification('There was an error sending your message. Please try again.', 'error');
        }
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }).catch(() => {
        showNotification('There was an error sending your message. Please try again.', 'error');
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    });
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else {
            clearFieldError(field);
            
            // Specific validation for email
            if (field.type === 'email' && !isValidEmail(field.value)) {
                showFieldError(field, 'Please enter a valid email address');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = 'var(--error-color)';
    field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: var(--error-color);
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
    `;
    
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    field.style.boxShadow = '';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function clearValidationStates(form) {
    const fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(field => {
        clearFieldError(field);
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = 'fas fa-info-circle';
    let backgroundColor = 'var(--primary-color)';
    
    switch (type) {
        case 'success':
            icon = 'fas fa-check-circle';
            backgroundColor = 'var(--success-color)';
            break;
        case 'error':
            icon = 'fas fa-exclamation-circle';
            backgroundColor = 'var(--error-color)';
            break;
        case 'warning':
            icon = 'fas fa-exclamation-triangle';
            backgroundColor = 'var(--warning-color)';
            break;
    }
    
    notification.innerHTML = `<i class="${icon}"></i> ${message}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 400px;
        animation: slideInNotification 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Allow manual close
    notification.addEventListener('click', () => {
        notification.remove();
    });
}

function initializeFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Real-time validation
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    fields.forEach(field => {
        field.addEventListener('blur', () => {
            if (field.value.trim()) {
                if (field.type === 'email' && !isValidEmail(field.value)) {
                    showFieldError(field, 'Please enter a valid email address');
                } else {
                    clearFieldError(field);
                }
            }
        });
        
        field.addEventListener('input', () => {
            if (field.parentNode.querySelector('.field-error')) {
                clearFieldError(field);
            }
        });
    });
}

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInNotification {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutNotification {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .notification {
        cursor: pointer;
        transition: var(--transition);
    }
    
    .notification:hover {
        transform: translateY(-2px);
    }
`;
document.head.appendChild(notificationStyles);

// Initialize office hours calendar (placeholder)
function initializeCalendar() {
    const calendarContainer = document.createElement('div');
    calendarContainer.id = 'office-hours-calendar';
    calendarContainer.innerHTML = `
        <h4 style="margin-bottom: 1rem;">Available Office Hours This Week</h4>
        <div class="calendar-grid" style="display: grid; gap: 0.5rem;">
            <div class="time-slot" style="padding: 0.75rem; background: var(--bg-secondary); border-radius: 0.5rem; border: 1px solid var(--border-color);">
                <strong>Tuesday, Dec 10</strong><br>
                <span style="color: var(--text-secondary);">2:00 PM - 4:00 PM</span>
                <button style="float: right; background: var(--primary-color); color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem; cursor: pointer;">Book</button>
            </div>
            <div class="time-slot" style="padding: 0.75rem; background: var(--bg-secondary); border-radius: 0.5rem; border: 1px solid var(--border-color);">
                <strong>Thursday, Dec 12</strong><br>
                <span style="color: var(--text-secondary);">2:00 PM - 4:00 PM</span>
                <button style="float: right; background: var(--primary-color); color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem; cursor: pointer;">Book</button>
            </div>
        </div>
    `;
    
    // Find a good place to insert the calendar (after office hours info)
    const officeHoursSection = document.querySelector('.contact-details');
    if (officeHoursSection) {
        officeHoursSection.appendChild(calendarContainer);
    }
}

// Auto-fill form based on URL parameters (for external links)
function checkURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    const message = urlParams.get('message');
    
    if (subject) {
        const subjectField = document.getElementById('subject');
        if (subjectField) {
            // Find matching option value
            const options = subjectField.querySelectorAll('option');
            options.forEach(option => {
                if (option.value === subject || option.textContent.toLowerCase().includes(subject.toLowerCase())) {
                    option.selected = true;
                }
            });
        }
    }
    
    if (message) {
        const messageField = document.getElementById('message');
        if (messageField) {
            messageField.value = decodeURIComponent(message);
        }
    }
}

// Initialize URL parameter checking
document.addEventListener('DOMContentLoaded', checkURLParameters);