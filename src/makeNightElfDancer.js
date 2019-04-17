var makeNightElfDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = this.$node.addClass('hordeProp');
  //add horde image
  this.$node.prepend($("<img src='https://i.imgur.com/uFQB7Uh.png' width='75' height='75'>"));
};
  
makeNightElfDancer.prototype = Object.create(makeDancer.prototype);
makeNightElfDancer.prototype.constructor = makeNightElfDancer;

makeNightElfDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this)
  //debugger;
  //this.oldStep = makeDancer.step;
  // this.$node.animate({
  //   left: "+=500",
  //   height: "toggle"
  // }, 3000, function() {
  //   // Animation complete.
   // });
   // function loop() {
   //    this.$node.css({right:0});
   //      this.$node.animate ({
   //          right: '+=1400',
   //      }, 5000, 'linear', function() {
   //          loop();
   //      });
   //  }
   //  loop();
   
   
   this.$node.animate({left: "+=50"}, 2);
   this.$node.animate({top: "+=30"}, 2);
   this.$node.animate({left: "-=50"}, 2);
   this.$node.animate({top: "-=50"}, 2);
} 
