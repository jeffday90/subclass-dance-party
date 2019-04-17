var makeHumanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = this.$node.addClass('hordeProp');
  this.$node.prepend($("<img src='https://i.imgur.com/TML2JFD.png' width='75' height='75'>"));

};
  
makeHumanDancer.prototype = Object.create(makeDancer.prototype);
makeHumanDancer.prototype.constructor = makeHumanDancer;

makeHumanDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this)
  //debugger;
  //this.oldStep = makeDancer.step;
    this.$node.toggle();
}

