// ===== Mobile menu toggle =====
const toggle = document.getElementById('mobile-toggle');
const navList = document.querySelector('.navbar ul');

toggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// ===== Active link highlighting =====
const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    navList.classList.remove('show'); // close menu on mobile
  });
});

// ===== Contact form behavior =====
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  alert(`Thank you, ${name || 'friend'}! Your message has been sent successfully.`);
  e.target.reset();
});
