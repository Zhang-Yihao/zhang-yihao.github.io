/* ==========================================================================
   Zhang Yihao — Dark Neon Theme interactions
   Particle background, typewriter, scroll reveal, nav scroll-spy and
   smooth anchor scrolling with sticky-nav offset.
   ========================================================================== */

(function () {
  'use strict';

  function initParticles() {
    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) return;
    if (document.getElementById('particles')) return;

    var canvas = document.createElement('canvas');
    canvas.id = 'particles';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var W = 0, H = 0, particles = [];
    var COLORS = ['34,211,238', '139,92,246', '232,121,249'];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function make() {
      var count = Math.min(80, Math.floor(window.innerWidth / 16));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 0.5,
          c: COLORS[Math.floor(Math.random() * COLORS.length)]
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.c + ',0.55)';
        ctx.fill();
      }
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = 'rgba(34,211,238,' + (0.08 * (1 - d / 120)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }

    resize();
    make();
    draw();
    window.addEventListener('resize', function () {
      resize();
      make();
    });
  }

  function initReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  function initTyped() {
    var el = document.querySelector('.typed');
    if (!el) return;
    var words;
    try {
      words = JSON.parse(el.getAttribute('data-typed'));
    } catch (e) {
      return;
    }
    if (!words || !words.length) return;

    var i = 0, j = 0, deleting = false;

    function tick() {
      var word = words[i];
      if (deleting) {
        j--;
        el.textContent = word.substring(0, j);
        if (j === 0) {
          deleting = false;
          i = (i + 1) % words.length;
        }
        setTimeout(tick, 35);
      } else {
        j++;
        el.textContent = word.substring(0, j);
        if (j === word.length) {
          setTimeout(function () {
            deleting = true;
            tick();
          }, 1700);
        } else {
          setTimeout(tick, 55);
        }
      }
    }

    tick();
  }

  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('#site-nav .visible-links a[href*="#"]')
    );
    var sections = [];
    links.forEach(function (a) {
      var hash = a.getAttribute('href').split('#')[1];
      if (!hash) return;
      var el = document.getElementById(decodeURIComponent(hash));
      if (el) sections.push({ a: a, el: el });
    });
    if (!sections.length) return;

    var ticking = false;
    function update() {
      var pos = window.scrollY + 130;
      var current = sections[0];
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].el.offsetTop <= pos) current = sections[i];
      }
      sections.forEach(function (s) {
        s.a.classList.toggle('active', s === current);
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    });
    update();
  }

  function initTagToggle() {
    var tags = document.querySelectorAll('.hero__tags .tag');
    if (!tags.length) return;
    Array.prototype.forEach.call(tags, function (tag) {
      tag.addEventListener('click', function () {
        tag.classList.toggle('is-active');
      });
    });
  }

  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var target = e.target;
      var a = target.closest ? target.closest('a') : null;
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href) return;
      var isAnchor = href.charAt(0) === '#' || href.indexOf('/#') === 0;
      if (!isAnchor) return;

      var id = href.split('#')[1] || '';
      e.preventDefault();
      e.stopPropagation();
      if (!id) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      var el = document.getElementById(decodeURIComponent(id));
      if (!el) return;
      var top = el.getBoundingClientRect().top + window.pageYOffset - 84;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }, true);
  }

  function initThemeToggle() {
    var root = document.documentElement;
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) {}
    var theme = stored === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    btn.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      var next = cur === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    function safe(fn) { try { fn(); } catch (e) {} }
    safe(initThemeToggle);
    safe(initParticles);
    safe(initReveal);
    safe(initTyped);
    safe(initScrollSpy);
    safe(initTagToggle);
    safe(initSmoothScroll);
  });
})();
