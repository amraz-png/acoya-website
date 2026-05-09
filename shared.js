// Shared nav and footer HTML injected into every page
function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'packages.html', label: 'Packages' },
    { href: 'flight.html', label: 'Flights' },
    { href: 'ship.html', label: 'Cruises' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a href="index.html" class="nav-logo">ACOYA<span> TOURS & TRAVELS</span></a>
      <ul class="nav-links">${links}</ul>
      <a href="contact.html" class="nav-cta">Book Now</a>
      <div class="hamburger" onclick="toggleMobile()">
        <span></span><span></span><span></span>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">${mobileLinks}</div>
  `;
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div>
          <div class="footer-brand">ACOYA TOURS & TRAVELS</div>
          <p class="footer-desc">Crafting unforgettable travel experiences from the shores of Lakshadweep to the world's finest destinations.</p>
        </div>
        <div>
          <div class="footer-heading">Services</div>
          <ul class="footer-links">
            <li><a href="packages.html">Tour Packages</a></li>
            <li><a href="flight.html">Flight Booking</a></li>
            <li><a href="ship.html">Cruise & Ships</a></li>
            <li><a href="contact.html">Custom Tours</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Destinations</div>
          <ul class="footer-links">
            <li><a href="packages.html">Lakshadweep</a></li>
            <li><a href="packages.html">Maldives</a></li>
            <li><a href="packages.html">Kerala</a></li>
            <li><a href="packages.html">Dubai</a></li>
            <li><a href="packages.html">Europe</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Contact</div>
          <ul class="footer-links">
            <li><a href="tel:+919495768129">+91 94957 68129</a></li>
            <li><a href="tel:+919995588169">+91 99955 88169</a></li>
            <li><a href="mailto:acoya.travel@gmail.com">acoya.travel@gmail.com</a></li>
            <li style="color:var(--text-light);font-size:0.85rem;">Agatti Island, Lakshadweep</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2025 ACOYA Tours & Travels LLP. All rights reserved.</div>
        <div class="footer-socials">
          <a class="social-btn" href="#">f</a>
          <a class="social-btn" href="#">in</a>
          <a class="social-btn" href="#">▶</a>
          <a class="social-btn" href="mailto:acoya.travel@gmail.com">✉</a>
        </div>
      </div>
    </footer>
  `;
}

function toggleMobile() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

function handleSubmit(btn, msg = 'Request Sent!') {
  const orig = btn.textContent;
  btn.textContent = '✓ ' + msg;
  btn.style.background = '#1B5E20';
  btn.style.color = '#fff';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.style.color = ''; }, 3000);
}

// Scroll reveal
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'fadeUp 0.7s ease forwards';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}
