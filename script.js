(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-delay]').forEach(el => {
    el.style.setProperty('--delay', `${el.dataset.delay}ms`);
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    revealItems.forEach(el => observer.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('visible'));
  }

  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector('#contact-form');
  if (form) {
    const alertBox = document.querySelector('#form-alert');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const button = form.querySelector('.submit-btn');
      const original = button.innerHTML;
      button.disabled = true;
      button.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending…';
      alertBox.className = 'form-alert';
      alertBox.textContent = '';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (!response.ok) throw new Error('Form submission failed');
        form.reset();
        alertBox.className = 'form-alert success';
        alertBox.textContent = 'Thanks — your message was sent successfully.';
      } catch (error) {
        alertBox.className = 'form-alert error';
        alertBox.innerHTML = 'The form could not send right now. Please email <a href="mailto:redarreda8@gmail.com">redarreda8@gmail.com</a>.';
      } finally {
        button.disabled = false;
        button.innerHTML = original;
      }
    });
  }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const galleryItems = document.querySelectorAll('[data-category]');
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const selected = button.dataset.filter;
        galleryItems.forEach(item => {
          item.classList.toggle('hidden', selected !== 'all' && item.dataset.category !== selected);
        });
      });
    });
  }
})();
