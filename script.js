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

var tweenBookshelf = TweenMax.to("#bookshelf", 2.0, {
	rotation: 5,
	y: 50,
});

var sceneBookshelf = new ScrollMagic.Scene({triggerElement: "#bookshelf", triggerHook: .2, duration: 2000})
	.setTween(tweenBookshelf)
	.setPin("#bookshelf")
	.addTo(controller);

///triggering CSS animations
var lightsOn = new ScrollMagic.Scene({
							triggerElement: "#lamp"
						})
						.setTween(".blackout", 0.1, {opacity: 0}) // trigger a TweenMax.to tween
						.addTo(controller);

var lightsOff = new ScrollMagic.Scene({
							triggerElement: "#bookshelf"
						})
						.setTween(".blackout", 10, {opacity: 1}) // trigger a TweenMax.to tween
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

var tweenBook1 = TweenMax.to("#book1", 2.0, {
	rotation: -25,
	y: 40,
});

var sceneBook1 = new ScrollMagic.Scene({triggerElement: "#book1", triggerHook: .2, duration: 2000})
	.setTween(tweenBook1)
	.setPin("#book1")
	.addTo(controller);

var tweenBook2 = TweenMax.to("#book2", 2.0, {
	rotation: -45,
	y: 80,
	x: 30,
});

var sceneBook2 = new ScrollMagic.Scene({triggerElement: "#book1", triggerHook: .2, duration: 2000})
	.setTween(tweenBook2)
	.setPin("#book2")
	.addTo(controller);

var tweenBook3 = TweenMax.to("#book3", 2.0, {
	rotation: 25,
	y: 30,
});

var sceneBook3 = new ScrollMagic.Scene({triggerElement: "#book1", triggerHook: .2, duration: 2000})
	.setTween(tweenBook3)
	.setPin("#book3")
	.addTo(controller);

var tweenBook4 = TweenMax.to("#book4", 2.0, {
		rotation: -25,
		y: 30,
	});

var sceneBook4 = new ScrollMagic.Scene({triggerElement: "#book1", triggerHook: .2, duration: 2000})
		.setTween(tweenBook4)
		.setPin("#book4")
		.addTo(controller);
