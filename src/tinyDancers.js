var TinyDancers = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).addClass('tinydancer');

};

TinyDancers.prototype = Object.create(Dancer.prototype);
TinyDancers.prototype.constuctor = TinyDancers;

TinyDancers.prototype.step = function() {


  Dancer.prototype.step.call(this);

  this.$node.fadeIn().fadeOut();
};
