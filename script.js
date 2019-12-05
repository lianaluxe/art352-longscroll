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

// CNC
var tween = TweenMax.to(".cnc", 2.0, {
	backgroundPosition: "0 100%",
	ease: SteppedEase.config(31)
})

// build scene
var cnc = new ScrollMagic.Scene({triggerElement: "#js-pinned", duration: 400})
	.setTween(tween)
	.addTo(controller);



///triggering CSS animations
var lightsOn = new ScrollMagic.Scene({
							triggerElement: "#lamp"
						})
						.setTween(".blackout", 0.1, {opacity: 0}) // trigger a TweenMax.to tween
						.addTo(controller);


var aliceshow = new ScrollMagic.Scene({
								triggerElement: "#alicetrigger"
							})
							.setClassToggle("#alice", "show")
							.addTo(controller);

var p1show = new ScrollMagic.Scene({
								triggerElement: "#p1", duration: 1000
							})
							.setClassToggle("#p1", "show")
							.addTo(controller);

var lamp = new ScrollMagic.Scene({
								triggerElement: "#lamp"
							})
							.setClassToggle("#lamp", "lampOn")
							.addTo(controller);
