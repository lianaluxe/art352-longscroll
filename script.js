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

// var lightsOff = new ScrollMagic.Scene({
// 							triggerElement: "#bookshelf"
// 						})
// 						.setTween(".blackout", 10, {opacity: 1}) // trigger a TweenMax.to tween
// 						.addTo(controller);


var aliceshow = new ScrollMagic.Scene({
								triggerElement: "#alicetrigger"
							})
							.setClassToggle("#alice", "show")
							.addTo(controller);

var alicehide = new ScrollMagic.Scene({
								triggerElement: "#p2", duration: 500
							})
							.setClassToggle("#alice", "hide")
							.addTo(controller);

var alicehide2 = new ScrollMagic.Scene({
								triggerElement: "#p3", duration: 500
							})
							.setClassToggle("#alice", "hide")
							.addTo(controller);

var p1show = new ScrollMagic.Scene({
								triggerElement: "#p1", duration: 1000
							})
							.setClassToggle("#p1", "show")
							.addTo(controller);

var p2show = new ScrollMagic.Scene({
								triggerElement: "#p2", duration: 1000
							})
							.setClassToggle("#p2", "show")
							.addTo(controller);

var p3show = new ScrollMagic.Scene({
								triggerElement: "#p3", duration: 1000
							})
							.setClassToggle("#p3", "show")
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

var tweenDeck = TweenMax.to("#deck", 2.0, {
	y: 10,
});

var sceneDeck = new ScrollMagic.Scene({triggerElement: "#deck", duration: 2000})
	.setTween(tweenBook1)
	.setPin("#deck")
	.addTo(controller);

var tweenCard1 = TweenMax.to("#card1", 2.0, {
	rotation: -25,
	x: -100,
	y: -100,
});

var sceneCard1 = new ScrollMagic.Scene({triggerElement: "#card1", duration: 2000})
	.setTween(tweenCard1)
	.setPin("#card1")
	.addTo(controller);

var tweenCard11 = TweenMax.to("#card11", 2.0, {
	rotation: 25,
	x: 100,
	y: -200,
});

var sceneCard11 = new ScrollMagic.Scene({triggerElement: "#card11", duration: 2000})
	.setTween(tweenCard11)
	.setPin("#card11")
	.addTo(controller);

var tweenCard2 = TweenMax.to("#card2", 2.0, {
	rotation: -25,
	x: -100,
	y: -300,
});

var sceneCard2 = new ScrollMagic.Scene({triggerElement: "#card2", duration: 2000})
	.setTween(tweenCard2)
	.setPin("#card2")
	.addTo(controller);

var tweenCard3 = TweenMax.to("#card3", 2.0, {
	rotation: 25,
	x: 100,
	y: -400,
});

var sceneCard3 = new ScrollMagic.Scene({triggerElement: "#card3", duration: 2000})
	.setTween(tweenCard3)
	.setPin("#card3")
	.addTo(controller);

var tweenCard4 = TweenMax.to("#card4", 2.0, {
	rotation: 15,
	x: -100,
	y: -500,
});

var sceneCard4 = new ScrollMagic.Scene({triggerElement: "#card4", duration: 2000})
	.setTween(tweenCard4)
	.setPin("#card4")
	.addTo(controller);

var tweenCard5 = TweenMax.to("#card5", 2.0, {
	rotation: -15,
	x: 100,
	y: -600,
});

var sceneCard5 = new ScrollMagic.Scene({triggerElement: "#card5", duration: 2000})
	.setTween(tweenCard5)
	.setPin("#card5")
	.addTo(controller);
