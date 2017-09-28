var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

//making the canvas full screen
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
	c.height = window.innerHeight;
	c.width = window.innerWidth;
	//Drawings need to be inside this function otherwise they will be reset when you resize the browser window and the canvas goes will be cleared.
	drawStuff();
}
resizeCanvas();

function drawStuff() {
	// drawing goes here
	//change boolean below to draw different charset
	var booolean = "F O N T E V A";
	//converting the string into an array of single characters
	chinese = booolean.split("");

	var font_size = 15;
	var columns = c.width / font_size; //number of columns for the rain
	//an array of drops - one per column
	var drops = [];
	//x below is the x coordinate
	//1 = y coordinate of the drop(same for every drop initially)
	for (var x = 0; x < columns; x++)
		drops[x] = 1;

	//drawing the characters
	function draw() {
		//Black BG for the canvas
		//translucent BG to show trail
		ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
		ctx.fillRect(0, 0, c.width, c.height);



		// use #00a1e0 for Salesforce blue and #fca400 for Fonteva Orange falling binary 
		ctx.fillStyle = "#00a1e0"; //colored text
		ctx.font = font_size + "px courier";
		//looping over drops
		for (var i = 0; i < drops.length; i++) {
			//a random chinese character to print
			var text = chinese[Math.floor(Math.random() * chinese.length)];
			//x = i*font_size, y = value of drops[i]*font_size
			ctx.fillText(text, i * font_size, drops[i] * font_size);

			//sending the drop back to the top randomly after it has crossed the screen
			//adding a randomness to the reset to make the drops scattered on the Y axis
			if (drops[i] * font_size > c.height && Math.random() > 0.975)
				drops[i] = 0;

			//incrementing Y coordinate
			drops[i]++;
		}
	}
//set callback speed and draw - higher number will redraw faster
//optimal redraw is 35
	setInterval(draw, 35)
};
