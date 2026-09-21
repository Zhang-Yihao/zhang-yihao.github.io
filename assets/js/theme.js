/* Purposeful interaction only: reading mode, section context, gentle reveals. */
(function () {
  'use strict';
  function initTheme() {
    var root = document.documentElement, button = document.getElementById('theme-toggle'), saved;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    if (saved === 'dark') root.setAttribute('data-theme', 'dark');
    if (!button) return;
    button.addEventListener('click', function () {
      var isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) { root.removeAttribute('data-theme'); try { localStorage.setItem('theme', 'light'); } catch (e) {} }
      else { root.setAttribute('data-theme', 'dark'); try { localStorage.setItem('theme', 'dark'); } catch (e) {} }
    });
  }
  function initReveal() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window)) { nodes.forEach(function (node) { node.classList.add('in'); }); return; }
    var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); } }); }, { threshold: .08 });
    nodes.forEach(function (node) { observer.observe(node); });
  }
  function initNavigation() {
    var links = Array.prototype.slice.call(document.querySelectorAll('#site-nav a[href*="#"]'));
    var sections = links.map(function (link) { var id = link.getAttribute('href').split('#')[1], node = id && document.getElementById(decodeURIComponent(id)); return node ? { link: link, node: node } : null; }).filter(Boolean);
    if (!sections.length) return;
    window.addEventListener('scroll', function () { var current = sections[0]; sections.forEach(function (item) { if (item.node.getBoundingClientRect().top < 115) current = item; }); sections.forEach(function (item) { item.link.classList.toggle('active', item === current); }); }, { passive: true });
  }
  function initTypewriter() {
    var node = document.querySelector('.typed');
    if (!node) return;
    var words; try { words = JSON.parse(node.getAttribute('data-typed')); } catch (e) { return; }
    if (!words || !words.length) return;
    var index = 0, cursor = 0, removing = false;
    function tick() {
      var word = words[index];
      cursor += removing ? -1 : 1;
      node.textContent = word.slice(0, cursor);
      if (!removing && cursor === word.length) { removing = true; window.setTimeout(tick, 1500); return; }
      if (removing && cursor === 0) { removing = false; index = (index + 1) % words.length; }
      window.setTimeout(tick, removing ? 24 : 45);
    }
    tick();
  }
  document.addEventListener('DOMContentLoaded', function () {
    /* Keep the research ticker independent from optional page enhancements. */
    try { initTypewriter(); } catch (e) {}
    try { initTheme(); } catch (e) {}
    try { initReveal(); } catch (e) {}
    try { initNavigation(); } catch (e) {}
  });
}());
