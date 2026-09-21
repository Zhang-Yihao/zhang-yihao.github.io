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
  document.addEventListener('DOMContentLoaded', function () { initTheme(); initReveal(); initNavigation(); });
}());
