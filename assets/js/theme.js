const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const searchInput = document.getElementById('search-input');

// Theme toggle functionality
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Search functionality
let posts = [];

// Fetch posts data
fetch('/search.json')
  .then(response => response.json())
  .then(data => {
    posts = data;
  });

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const searchResults = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm)
  );

  // Update UI with search results
  const postsContainer = document.querySelector('.posts-container');
  if (postsContainer) {
    postsContainer.innerHTML = searchResults.map(post => `
      <article class="post-card">
        <h2><a href="${post.url}">${post.title}</a></h2>
        <p class="post-meta">${post.date}</p>
        <p class="post-excerpt">${post.excerpt}</p>
      </article>
    `).join('');
  }
});