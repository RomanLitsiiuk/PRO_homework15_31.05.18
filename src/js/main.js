var Tab = function (tabElement) {
  this.link = tabElement.querySelector('.SingleTab-title');
  this.link.addEventListener('click', function () {
    this.link.classList.toggle('isActive');
  }.bind(this));
};

var Accordion = function (rootElement) {
  this.rootElement = rootElement;
  this.links = this.rootElement.querySelectorAll('.SingleTab');
  this.links.forEach(function (element) {
    this.element = new Tab(element);
  });
  this.activeTabCheck(rootElement);
};

Accordion.prototype.activeTabCheck = function (block) {
  var selectedElement;
  this.block = block;
  this.block.addEventListener('click', function (event) {
    this.target = event.target;
    while (this.target !== this) {
      if (this.target.classList.contains('isActive')) {
        this.changeActive(this.target);
        return;
      }
      this.target = target.parentNode;
    }
  }.bind(this));
};

Accordion.prototype.changeActive = function (node) {
  if (this.selectedElement) {
    this.selectedElement.classList.remove('isActive');
  }
  this.selectedElement = node;
  this.selectedElement.classList.add('isActive');
};

window.onload = function () {
  var accordion1 = new Accordion(document.getElementById('accordion'));
  var accordion2 = new Accordion(document.getElementById('accordion2'));
  var slider = new Slider(document.getElementById('slider')).render();
  var slider2 = new Slider(document.getElementById('slider2')).render();
  var tab = new Tab(document.getElementById('singleTab'));
};
