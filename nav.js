(function() {
  var nav = document.querySelector('.margin nav');
  if (!nav || window.matchMedia('(max-width: 40rem)').matches) return;

  function positionNav() {
    nav.style.position = '';
    nav.style.top = '';
    nav.style.left = '';
    nav.style.width = '';

    var rect = nav.getBoundingClientRect();
    var absTop = rect.top + window.scrollY;

    nav.style.position = 'fixed';
    nav.style.top = absTop + 'px';
    nav.style.left = rect.left + 'px';
    nav.style.width = rect.width + 'px';
  }

  positionNav();

  window.addEventListener('resize', function() {
    if (window.matchMedia('(max-width: 40rem)').matches) {
      nav.style.position = '';
      nav.style.top = '';
      nav.style.left = '';
      nav.style.width = '';
      return;
    }
    positionNav();
  });
})();
