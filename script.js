setInterval(function() {
    var tempscroll = $(window).scrollTop();
    setTimeout(function() {
    if (tempscroll == $(window).scrollTop()) {
        $(document.body).removeClass("scrolling");
    } else {
        $(document.body).addClass("scrolling");
    }
    }, 75);

}, 100);

// initialise ScrollMagic controller
var controller = new ScrollMagic.Controller();

// create Tween
var tween = TweenMax.to("#js-animation", 2.0, {
	backgroundPosition: "0 100%",
	ease: SteppedEase.config(31)
})

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#js-animation"})
	.triggerHook("onLeave")
	.setTween(tween)
	.addTo(controller);



///triggering CSS animation
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle("#animate1", "zap")
					.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);
