const topbar = document.getElementById('topbar');
const year = document.getElementById('year');

if (topbar) {
  const updateHeader = () => topbar.classList.toggle('scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

if (year) year.textContent = new Date().getFullYear();
