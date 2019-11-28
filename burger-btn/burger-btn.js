'use strict';

(function () {
  var BURGER_CLASS = 'burger-btn';
  var BURGER_CLOSE_CLASS = 'burger-btn--close';

  var burgerButtonElements = document.querySelectorAll('.' + BURGER_CLASS);

  if (burgerButtonElements) {
    var burgerClickHandler = function (evt) {
      var target = evt.currentTarget;

      target.classList.toggle(BURGER_CLOSE_CLASS);

      if (target.classList.contains(BURGER_CLOSE_CLASS)) {
        target.setAttribute('aria-label', 'Закрыть меню');
      } else {
        target.setAttribute('aria-label', 'Открыть меню');
      }
    };

    [].forEach.call(burgerButtonElements, function (item) {
      item.addEventListener('click', burgerClickHandler, {passive: true});
    });
  }
})();
