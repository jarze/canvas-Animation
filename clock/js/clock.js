var dom = document.getElementById('clock');
var ctx = dom.getContext('2d')
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;

// 比例
var rem = width/400;

function drawBackground(){
	ctx.save();
	// 重新映射画布上的 (0,0) 位置
	ctx.translate(r,r);
	ctx.beginPath();
	ctx.lineWidth = 10 * rem;
	ctx.arc(0, 0, r - 5*rem, 0, 2*Math.PI, false);
	ctx.stroke();

	var hourNumbers = [3,4,5,6,7,8,9,10,11,12,1,2];
	ctx.font = 40*rem + "px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	hourNumbers.forEach(function(number,i){
		var rad = 2 * Math.PI / 12 * i;
		var x = Math.cos(rad)*(r - 40* rem);
		var y = Math.sin(rad)*(r - 40* rem);
		ctx.fillText(number,x ,y);
	});
	for (var i = 0; i< 60;i++){
		var rad = 2 * Math.PI / 60 * i;
		var x = Math.cos(rad)*(r - 18* rem);
		var y = Math.sin(rad)*(r - 18* rem);
		ctx.beginPath();
		if (i % 5 == 0) {
			ctx.fillStyle = '#000';
		}else{
			ctx.fillStyle = '#ccc';
		}
		ctx.arc(x, y, 3* rem, 0, 2*Math.PI, false);
		ctx.fill();
	}
}

function drawHour(hour,minute) {
	ctx.save();
	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.lineWidth = 10* rem;
	var rad = 2 * Math.PI / 12 * hour;
	var mrad = 2 * Math.PI / 12 * minute / 60;

	ctx.rotate(rad + mrad);
	ctx.moveTo(0, 10* rem);
	ctx.lineTo(0, -r * 2 / 5);
	ctx.stroke();
	ctx.restore();	
}

function drawMinute(minute) {
	ctx.save();
	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.lineWidth = 6* rem;
	ctx.strokeStyle = "#0000ff";
	var rad = 2 * Math.PI / 60 * minute;
	ctx.rotate(rad);
	ctx.moveTo(0, 13* rem);
	ctx.lineTo(0, -r *2/3);
	ctx.stroke();
	ctx.restore();	
}

function drawSecond(second) {
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = "#ff0000";
	var rad = 2 * Math.PI / 60 * second;
	ctx.rotate(rad);
	ctx.moveTo(-4* rem, 18* rem);
	ctx.lineTo(4* rem, 18* rem);
	ctx.lineTo(1* rem, -r + 60* rem);
	ctx.lineTo(-1* rem, -r + 60* rem);
	ctx.fill();
	ctx.restore();	
}

function drawDot() {

	ctx.beginPath();
	ctx.fillStyle = "#fff";
	ctx.arc(0, 0, 6* rem, 0, 2*Math.PI, false);
	ctx.fill();

}


function draw(){

	ctx.clearRect(0, 0, width, height);

	drawBackground();
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	drawHour(hour,minute);
	drawMinute(minute);
	drawSecond(second);
	drawDot();
	ctx.restore();
}
draw();
setInterval(draw,1000);

