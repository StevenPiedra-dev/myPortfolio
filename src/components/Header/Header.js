// Adds a short pressed animation and scroll behavior for the header.
(function () {
  // Small helper: add pressed class on click and remove after short time
  function initSocialButtons() {
    const buttons = document.querySelectorAll('.social-link');
    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // add 'pressed' to ensure visual returns to baseline, also add pulse for feedback
        btn.classList.add('pressed', 'pulse');
        // remove after animation/timeout
        setTimeout(() => {
          btn.classList.remove('pressed');
        }, 180);

        // clean up pulse class after animation
        setTimeout(() => {
          btn.classList.remove('pulse');
        }, 460);
      });

      // ensure keyboard users see press and it doesn't stay lifted
      btn.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          btn.classList.add('pressed', 'pulse');
          setTimeout(() => btn.classList.remove('pressed'), 180);
          setTimeout(() => btn.classList.remove('pulse'), 460);
        }
      });
    });
  }

  // Header shrink on scroll (polish)
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const sc = window.scrollY;
      if (sc > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = sc;
    }, { passive: true });
  }

  // init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initSocialButtons(); initHeaderScroll(); });
  } else {
    initSocialButtons(); initHeaderScroll();
  }
})();
