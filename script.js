document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });

    // Fecha o menu automaticamente ao clicar em um link
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // ---------------------------------------------------------
  // Filtro dos sensores por categoria (página Sensores)
  // ---------------------------------------------------------
  var filtros = document.querySelectorAll('.filtro');
  var cards = document.querySelectorAll('.sensor-card');

  filtros.forEach(function (filtro) {
    filtro.addEventListener('click', function () {
      filtros.forEach(function (f) { f.classList.remove('active'); });
      filtro.classList.add('active');

      var categoria = filtro.getAttribute('data-filtro');

      cards.forEach(function (card) {
        var pertence = categoria === 'todos' || card.getAttribute('data-categoria') === categoria;
        card.classList.toggle('hidden', !pertence);
      });
    });
  });
});
