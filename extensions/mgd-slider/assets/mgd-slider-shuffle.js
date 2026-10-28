/* MGD Slider Shopify-Glue 0.1.0 - Zufall im Browser (Liquid hat keinen), UNGETESTET gegen echten Store
   Muss NACH mgd-slider-model.js und VOR mgd-slider.js laufen (alle defer, Reihenfolge im Markup) */
(function () {
  'use strict';

  // Slides mischen, auf Anzahl kürzen, Nummern neu setzen
  function mix(node) {
    node.setAttribute('data-mgd-shuffled', '1');
    var model = window.MGDSliderModel, track = node.querySelector('.mgd-slider__track');
    if (!model || !track) { return; }
    var keep = parseInt(node.getAttribute('data-mgd-shuffle'), 10) || 0;
    var tpl = node.getAttribute('data-mgd-label') || '';
    var list = model.shuffle(Array.prototype.slice.call(track.children));
    if (keep > 0) { list = list.slice(0, keep); }
    while (track.firstChild) { track.removeChild(track.firstChild); }
    list.forEach(function (slide, i) {
      track.appendChild(slide);
      if (tpl) { slide.setAttribute('aria-label', tpl.split('[[n]]').join(String(i + 1)).split('[[t]]').join(String(list.length))); }
      // erstes Bild sofort, Rest lazy
      var img = slide.querySelector('img');
      if (!img) { return; }
      if (i === 0) { img.setAttribute('loading', 'eager'); img.setAttribute('fetchpriority', 'high'); }
      else { img.setAttribute('loading', 'lazy'); img.removeAttribute('fetchpriority'); }
    });
  }

  function run(scope) {
    Array.prototype.forEach.call(scope.querySelectorAll('[data-mgd-shuffle]:not([data-mgd-shuffled])'), mix);
  }

  run(document);

  // Theme-Editor: Section neu geladen > mischen + Engine starten (Listener nur einmal)
  if (!window.__mgdSliderGlue) {
    window.__mgdSliderGlue = true;
    document.addEventListener('shopify:section:load', function (e) {
      run(e.target);
      if (window.MGDSlider) {
        Array.prototype.forEach.call(e.target.querySelectorAll('[data-mgd-slider]'), window.MGDSlider.init);
      }
    });
  }
})();
