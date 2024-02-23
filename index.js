document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.header-content');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });
});
