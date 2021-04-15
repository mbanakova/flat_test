(function () {
  let hotPrice = document.querySelector(".flat__value");
  let developerPrice = document.querySelector(".flat__developer-value");

  function splitPrice(elem) {
    return elem.innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  hotPrice.innerHTML = splitPrice(hotPrice);
  developerPrice.innerHTML = splitPrice(developerPrice);
})();
