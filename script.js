document.getElementById('yr').textContent = new Date().getFullYear();

// Contact form
const btn = document.querySelector('.btn-submit');
btn.addEventListener('click', () => {
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg = document.getElementById('cf-msg').value.trim();
  if (!name || !email || !msg) {
    btn.textContent = 'Fill all fields ✕';
    setTimeout(() => btn.textContent = 'Send Dispatch →', 2000);
    return;
  }
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#2a4a1e';
  setTimeout(() => {
    btn.textContent = 'Send Dispatch →';
    btn.style.background = '';
    document.getElementById('cf-name').value = '';
    document.getElementById('cf-email').value = '';
    document.getElementById('cf-msg').value = '';
  }, 2500);
});

// Hamburger menu
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});
