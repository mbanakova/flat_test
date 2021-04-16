"use strict";

(function () {
  function splitPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  let priceSpan = document.querySelectorAll(".js-formatted-price");
  priceSpan.forEach(span => {
    span.textContent = splitPrice(span.textContent);
  });
})();
//# sourceMappingURL=script.js.map
