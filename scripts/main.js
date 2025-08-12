
// --- Site-wide Search Functionality ---
let searchIndex = [];
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Load the search index
fetch('scripts/search-index.json')
  .then(response => response.json())
  .then(data => {
    searchIndex = data;
  });

// Perform search and show results
function performSearch(query) {
  if (!searchIndex.length) {
    searchResults.innerHTML = '<p style="padding: 1rem; color: var(--text-secondary); text-align: center;">Loading search index...</p>';
    return;
  }
  const results = searchIndex.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.snippet.toLowerCase().includes(query.toLowerCase())
  );
  if (results.length === 0) {
    searchResults.innerHTML = '<p style="padding: 1rem; color: var(--text-secondary); text-align: center;">No results found.</p>';
    return;
  }
  searchResults.innerHTML = results.map(item => `
    <a href="${item.url}" class="search-result-item">
      <strong>${item.title}</strong>
      <div style="font-size:0.95em;color:var(--text-secondary);">${item.snippet}</div>
    </a>
  `).join('');
}

// Listen for input in the search box
if (searchInput) {
  searchInput.addEventListener('input', function(e) {
    performSearch(e.target.value);
  });
}

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
