
// Footer year
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// Focus cards ("För dig som")
document.querySelectorAll('.focus-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.focus-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id.length < 2) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
