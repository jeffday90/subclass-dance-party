// Creates and returns a new dancer object that can step
var makeDancer = function (top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.$node = $('<span class="dancer"></span>');
  
  //console.log(this, this.top);
  this.step();
  this.setPosition(top, left);
}


makeDancer.prototype.step = function (){
  var instance = this;
  setTimeout(instance.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left){
  var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
}

//maybe make some dancers lineup top (this function)
  //maybe some others we can line up
makeDancer.prototype.lineUp = function(){
  this.$node.css({'top': 50});
}
