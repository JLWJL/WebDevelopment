// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = 800;
var height = canvas.height = 600;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

//Ball object

function Ball(){
	this.x= random(0,width);
	this.y= random(0,height);
	this.velX = random(0,5);
	this.velY = random(0,5);
	this.color = "rgb(" + random(0,255) + "," + random(0,255) 
				+ "," + random(0,255)+")";
	this.size = random(10,20);
}

//Draw method of Ball
Ball.prototype.draw = function (){
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	ctx.fill();
}


//Ball moving
Ball.prototype.update=function(){
	if((this.x+this.size>=width)||
		(this.x-this.size<=0)){

		this.velX=-(this.velX);
	}

	if((this.y+this.size>=height)||
		(this.y-this.size<=0)){
		this.velY= -(this.velY);
	}

	this.x += this.velX;
	this.y += this.velY;
}

Ball.prototype.collisionDetect = function(){
	//var self = this;
	balls.forEach(function(bl){
		
		if(!(this.x===bl.x&&this.y==bl.y
			&&this.velX===bl.velX&&this.velY===bl.velY)){
			var dx = this.x-bl.x;
			var dy = this.y-bl.y;
			var distance = Math.sqrt(dx*dx+dy*dy);

			if(distance<this.size+bl.size){
				bl.color = this.color = "rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")";
			}
		}
	},this);
}

var balls=[];

//Loop the update for animation
//NOTE: Each line will be repeated in each loop
//??????????????????????
//Are there simpler ways to make it
//??????????????????????
function loop(){
	ctx.fillStyle='rgb(255,200,124,.35)'; //Use this colour to cover previous 
	ctx.fillRect(0,0,width,height);	//frame otherwise there are all moving tracks of balls

	while(balls.length<15){
		var ball = new Ball();
		balls.push(ball);
	}

	balls.forEach(function(b){
		b.draw();
		b.update();
		b.collisionDetect(b);
	});

	requestAnimationFrame(loop);
}

//Call function 'loop'
loop();