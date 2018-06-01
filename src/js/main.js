var Accordion = function (rootElement, className) {
  this.rootElement = rootElement;
  this.className = className;
  this.elementsList = rootElement.querySelectorAll('.accordion-title');
  this.changeActiveClass(this.elementsList, this.className);
};

Accordion.prototype.changeActiveClass = function (elementsList, activeClass) {
  elementsList.forEach(function (element) {
    element.addEventListener('click', function () {
      if (!(element.classList.contains(activeClass))) {
        elementsList.forEach(function (element) {
          element.classList.remove(activeClass);
        });
        this.classList.add(activeClass);
      }
    })
  });
};

var accordion1 = new Accordion(document.getElementById('accordion'), 'active');
