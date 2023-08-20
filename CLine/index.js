window.requestAnimFrame = (function () {
	return (
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 1000 / 60);
		}
	);
})();

var c = document.getElementById('canv'),
	$ = c.getContext('2d'),
	w = (c.width = window.innerWidth),
	h = (c.height = window.innerHeight);
ŭ = 0;

function bez_it() {
	$.clearRect(0, 0, w, h);
	$.fillStyle = 'hsla(' + ŭ + ',100%, 40%,.9)';
	$.fillRect(0, 0, w, h);
	$.globalCompositeOperation = 'source-over';

	// function draw(sin = 160, lineWidth) {
	// 	$.beginPath();
	// 	$.moveTo(0, h / -90);
	// 	$.bezierCurveTo(
	// 		(w / 2) * 1.2,
	// 		(h / 2) * 1.2 + Math.sin(new Date() / sin) * 300,
	// 		w / 2,
	// 		h / 3 + Math.cos(new Date() / sin) * 300,
	// 		w,
	// 		h
	// 	);
	// 	$.lineWidth = lineWidth;
	// 	$.lineCap = 'round';
	// 	$.strokeStyle = 'hsla(255, 255%, 255%, .9)';
	// 	$.stroke();
	// }

	// [[160, 4.2]].forEach(i => {
	// 	draw(...i);
	// });

	//1
	$.beginPath();
	$.moveTo(0, h / -90);
	// $.bezierCurveTo(
	// 	(w / 2) * 1.2,
	// 	(h / 2) * 1.2 + Math.sin(new Date() / 1600) * 300,
	// 	w / 2,
	// 	h / 3 + Math.cos(new Date() / 1600) * 300,
	// 	w,
	// 	h
	// );
	$.lineWidth = 4.2;
	$.lineCap = 'round';
	$.strokeStyle = 'hsla(255, 255%, 255%, .9)';

	$.arc(
		(w / 2) * 1.2,
		(h / 2) * 1.2 + Math.sin(new Date() / 1600) * 300,
		10,
		0,
		Math.PI
	);

	$.lineTo((w / 2) * 1.2, (h / 2) * 1.2 + Math.sin(new Date() / 1600) * 300);

	$.stroke();
	//2
	// $.beginPath();
	// $.moveTo(0, h / -90);
	// $.bezierCurveTo(
	// 	(w / 2) * 1.5,
	// 	(h / 2) * 2.2 + Math.sin(new Date() / 250) * 310,
	// 	w / 2,
	// 	(h / 3) * 1.5 + Math.cos(new Date() / 250) * 310,
	// 	w,
	// 	h
	// );
	// $.lineWidth = 3;
	// $.lineCap = 'round';
	// $.strokeStyle = 'hsla(0, 0%, 20%, 1)';
	// $.stroke();
	// //3
	// $.beginPath();
	// $.moveTo(0, h / -90);
	// $.bezierCurveTo(
	// 	(w / 2) * 1.8,
	// 	(h / 2) * 0.2 + Math.sin(new Date() / 200) * 300,
	// 	w / 2,
	// 	(h / 4) * 1.2 + Math.cos(new Date() / 200) * 300,
	// 	w,
	// 	h
	// );
	// $.lineWidth = 3;
	// $.lineCap = 'round';
	// $.strokeStyle = 'hsla(0, 0%, 0%, 1)';
	// $.stroke();
	// //4
	// $.beginPath();
	// $.moveTo(0, h / -90);
	// $.bezierCurveTo(
	// 	(w / 2) * 1.5,
	// 	(h / 4) * 1.8 + Math.sin(new Date() / 210) * 100,
	// 	w / 2,
	// 	(h / 2) * 0.5 + Math.cos(new Date() / 210) * 100,
	// 	w,
	// 	h
	// );
	// $.lineWidth = 1;
	// $.lineCap = 'round';
	// $.strokeStyle = 'hsla(0, 15%, 15%, 1)';
	// $.stroke();
	// //5
	// $.beginPath();
	// $.moveTo(0, h / -90);
	// $.bezierCurveTo(
	// 	(w / 2) * 1.1,
	// 	(h / 2) * 1.7 + Math.sin(new Date() / 220) * 270,
	// 	w / 2,
	// 	(h / 2) * 0.6 + Math.cos(new Date() / 220) * 270,
	// 	w,
	// 	h
	// );
	// $.lineWidth = 3;
	// $.lineCap = 'round';
	// $.strokeStyle = 'hsla(236, 5%, 85%, 1)';
	// $.stroke();
	// //6
	// $.beginPath();
	// $.moveTo(0, h / -90);
	// $.bezierCurveTo(
	// 	(w / 3) * 1.5,
	// 	(h / 3) * 1.2 + Math.sin(new Date() / 250) * 270,
	// 	w / 4,
	// 	(h / 3) * 0.9 + Math.cos(new Date() / 250) * 270,
	// 	w,
	// 	h
	// );
	// $.lineWidth = 3;
	// $.lineCap = 'round';
	// $.strokeStyle = 'hsla(236, 5%, 85%, 1)';
	// $.stroke();
	// //7
	// $.beginPath();
	// $.moveTo(0, h / -90);
	// $.bezierCurveTo(
	// 	(w / 2) * 1.1,
	// 	(h / 2) * 1.7 + Math.sin(new Date() / 220) * 270,
	// 	w / 2,
	// 	(h / 2) * 0.6 + Math.cos(new Date() / 220) * 270,
	// 	w,
	// 	h
	// );
	// $.lineWidth = 3;
	// $.lineCap = 'round';
	// $.strokeStyle = 'hsla(236, 5%, 85%, 1)';
	// $.stroke();
	// //8
	// $.beginPath();
	// $.moveTo(0, h / -90);
	// $.bezierCurveTo(
	// 	(w / 4) * 1.1,
	// 	(h / 3) * 0.5 + Math.sin(new Date() / 330) * 250,
	// 	w / 3,
	// 	(h / 3) * 1.6 + Math.cos(new Date() / 330) * 250,
	// 	w,
	// 	h
	// );
	// $.lineWidth = 2;
	// $.lineCap = 'round';
	// $.strokeStyle = 'hsla(255, 5%, 85%, 1)';
	// $.stroke();
	// //9
	// $.beginPath();
	// $.moveTo(0, h / -90);
	// $.bezierCurveTo(
	// 	(w / 4) * 0.3,
	// 	(h / 3) * 0.5 + Math.sin(new Date() / 190) * 150,
	// 	w / 3,
	// 	(h / 2) * 1.2 + Math.cos(new Date() / 190) * 150,
	// 	w,
	// 	h
	// );
	// $.lineWidth = 1.5;
	// $.lineCap = 'round';
	// $.strokeStyle = 'hsla(0, 5%, 85%, 1)';
	// $.stroke();
	// //10
	// $.beginPath();
	// $.moveTo(0, h / -90);
	// $.bezierCurveTo(
	// 	(w / 2) * 0.5,
	// 	(h / 4) * 0.5 + Math.sin(new Date() / 100) * 150,
	// 	w / 2,
	// 	(h / 4) * 0.8 + Math.cos(new Date() / 100) * 150,
	// 	w,
	// 	h
	// );
	// $.lineWidth = 1.5;
	// $.lineCap = 'round';
	// $.strokeStyle = 'hsla(0, 5%, 85%, 1)';
	// $.stroke();
}

(function run() {
	window.requestAnimFrame(run);
	bez_it();
	ŭ -= 0.5;
})();

window.addEventListener('load', resize);
window.addEventListener('resize', resize, false);

function resize() {
	c.width = w = window.innerWidth;
	c.height = h = window.innerHeight;
}
