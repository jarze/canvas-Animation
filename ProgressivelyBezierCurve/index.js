$(window).ready(function () {
	var quantity = 30, //number of dots
		duration = 3, //duration (in seconds)
		path = [
			{ x: 0, y: 0 },
			{ x: 50, y: 100 },
			{ x: 300, y: 20 },
			{ x: 400, y: 200 },
			{ x: 500, y: 0 },
		], //points on the path (BezierPlugin will plot a Bezier through these). Adjust however you please.
		position = { x: path[0].x, y: [path[0].y] }, //tracks the current position, so we set it initially to the first node in the path. It's the target of the tween.
		tween = TweenMax.to(position, quantity, {
			bezier: path,
			ease: Linear.easeNone,
		}), //this does all the work of figuring out the positions over time.
		tl = new TimelineMax({ repeat: -1, yoyo: true }), //we'll use a TimelineMax to schedule things. You can then have total control of playback. pause(), resume(), reverse(), whatever.
		i,
		dot;
	console.log(tween);
	//we can remove the first point on the path because the position is already there and we want to draw the Bezier from there through the other points
	path.shift();

	for (i = 0; i < quantity; i++) {
		tween.time(i); //jumps to the appropriate time in the tween, causing position.x and position.y to be updated accordingly.
		dot = $('<div />', { id: 'dot' + i })
			.addClass('dot')
			.css({ left: position.x + 'px', top: position.y + 'px' })
			.appendTo('body'); //create a new dot, add the .dot class, set the position, and add it to the body.
		tl.set(dot, { visibility: 'visible' }, i * (duration / quantity)); //toggle the visibility on at the appropriate time.
	}
});
