var makeHordeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = this.$node.addClass('hordeProp');
  //add horde image
  this.$node.prepend($("<img src='https://i.imgur.com/XEPGqbD.png' width='75' height='75'>"));
};
  
makeHordeDancer.prototype = Object.create(makeDancer.prototype);
makeHordeDancer.prototype.constructor = makeHordeDancer;

makeHordeDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this)
  //debugger;
  //this.oldStep = makeDancer.step;
  this.$node.toggle();
} 
