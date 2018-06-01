var Slider = function (rootElement) {
  this.rootElement = rootElement;
  this.slides = this.rootElement.querySelector('.Gallery-line');
  this.previousArrow = this.rootElement.querySelector('.Slider-arrow--back');
  this.nextArrow = this.rootElement.querySelector('.Slider-arrow--next');
  this.currentSlide = 0;
  this.previous = this.previous.bind(this);
  this.next = this.next.bind(this);
};

Object.defineProperty(Slider.prototype, 'totalSlides', {
  get: function () {
    return this.slides.children.length;
  }
});

Object.defineProperty(Slider.prototype, 'currentSlide', {
  get: function () {
    return this._currentSlide;
  },
  set: function (value) {
    this._currentSlide = (value <= 0) ? 0 : Math.min(value, this.totalSlides - 1);
    this.recalculate();
  }
});

Slider.prototype.previous = function () {
  this.currentSlide--;
  return this;
};

Slider.prototype.next = function () {
  this.currentSlide++;
  return this;
};

Slider.prototype.recalculate = function () {
  this.slides.style.left = [this.currentSlide * -100, '%'].join('');
  return this;
};

Slider.prototype.delegateEvents = function () {
  this.previousArrow.addEventListener('click', this.previous);
  this.nextArrow.addEventListener('click', this.next);
  return this;
};

Slider.prototype.render = function () {
  return this.delegateEvents();
};
