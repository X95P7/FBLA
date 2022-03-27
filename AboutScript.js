var windowPXLength = window.innerWidth;
var windowPXHeight = window.innerHeight;
var canvas;
var ctx; 
var Tris = [];
var tick = 0;
var elements;
var timer = setInterval(next, 5000);

console.log(windowPXHeight , windowPXLength);

//pixle to precentage 
function pTp(pres, w){ //wanted precentage vaule, width(t) of height(f);
	var val;
	pres = pres /100;
		if(w == true || w == "w"){
		val = pres * windowPXLength;
		}
		else{
			val = pres * (windowPXLength * 0.4); //0.4 is for a ratio to be kept
		}
	return val;
}


//Title Canvas Home

//Resizes for format changes
function resizeCanvas(){
	windowPXLength = window.innerWidth;
    windowPXHeight = window.innerHeight;
	
	var margins = ((.03 * windowPXLength) / 2) + "px";
	
	canvas.width =  windowPXLength;
	canvas.height = .4 *  windowPXLength;
	//document.getElementById("title").style.padding = margins;
	
	var elements = document.querySelectorAll('.Bs');
	console.log(elements);
		for(var i =0; i< elements.length; i++){
			var element = elements[i];
			element.style.width =  (0.02* windowPXLength) + "px";
			element.style.height =  (0.02* windowPXLength) + "px";
		}
	
	console.log(windowPXHeight , windowPXLength, margins);

}
	
function getTriColor(){ //returns 1 of 4 colors ith minor variation in an array of3 rgb colors 
	var which = Math.floor(Math.random()*4);
	if(which === 0){
		
		return [23 + Math.floor(Math.random()*20) - 10, 95 + Math.floor(Math.random()*20) - 10, 163 + Math.floor(Math.random()*20) - 10];     //take "core" color(s) and add +/- 20   buenaas noches yo o/
	} 
	else if(which === 1){
		
		return [26 + Math.floor(Math.random()*20) - 10, 104 + Math.floor(Math.random()*20) - 10, 152 + Math.floor(Math.random()*20) - 10];
	}//26, 104, 152 
	else if(which === 2){
		
		return [10 + Math.floor(Math.random()*20) - 10, 92 + Math.floor(Math.random()*20) - 10, 31 + Math.floor(Math.random()*20) - 10];
	}
	else{		
		return [24 + Math.floor(Math.random()*20) - 10, 15 + Math.floor(Math.random()*20) - 10, 153 + Math.floor(Math.random()*20) - 10];
	}
}

 function declareTris(){
	 
	 
	 //first Tri top
	 Tris[Tris.length] = [
			[0,0],   //Point 1 [x%,y%]
			[21,0],	//Point 2 [x,y]
			[[11,Math.random()*6.28],[10 + Math.random()*10,Math.random()*6.28]],	//Point 3 [x,y]
			getTriColor()
			];
	 
	 for(var i= 0; i < 12; i++){ //Upper Row Triangles
		var x1 = Tris[i][0][0] + Math.random()*7 + 5;
		var x2 = x1 + Math.random()*20 + 10;
		var x3 = ((x1 + x2) / 2) + (Math.random()*6 - 3);
	 
			Tris[Tris.length] = [
			[x1,0],   //Point 1 [x%,y%]
			[x2,0],	//Point 2 [x,y]
			[[x3,Math.random()*6.28],[10 + Math.random()*10,Math.random()*6.28]],	//Point 3 [x,y]
			getTriColor()
			]; 
	 }
	 //first Tri bottom
	 Tris[Tris.length] = [
			[0,100],   //Point 1 [x%,y%]
			[21,100],	//Point 2 [x,y]
			[[11,Math.random()*6.28],[90 -  Math.random()*10,Math.random()*6.28]],	//Point 3 [x,y]
			getTriColor()
			];


	 for(var i= 0; i < 12; i++){ //Upper Row Triangles
		var x1 = Tris[Tris.length - 1][0][0] + Math.random()*7 + 5;
		var x2 = x1 + Math.random()*20 + 10;
		var x3 = ((x1 + x2) / 2) + (Math.random()*6 - 3);
	 
			Tris[Tris.length] = [
			[x1,100],   //Point 1 [x%,y%]
			[x2,100],	//Point 2 [x,y]
			[[x3,Math.random()*6.28],[90 - Math.random()*10,Math.random()*6.28]],	//Point 3 [x,y]
			getTriColor()
			]; 
	 }		

	 //first Tri left 
	 Tris[Tris.length] = [
			[0,2],   //Point 1 [x%,y%]
			[0,25],	//Point 2 [x,y]
			[[6 + Math.random()*4,Math.random()*6.28],[13.5,Math.random()*6.28],],	//Point 3 [x,y]
			getTriColor()
			];


	 for(var i= 0; i < 6; i++){ //Upper Row Triangles
		var y1 = Tris[Tris.length - 1][0][1] + (Math.random()*10) + 12;
		var y2 = y1 + Math.random()*35 + 20;
		var y3 = ((y1 +y2) / 2) + (Math.random()*6 - 3);
	 
			Tris[Tris.length] = [
			[0,y1],   //Point 1 [x%,y%]
			[0,y2],	//Point 2 [x,y]
			[[6 + Math.random()*4,Math.random()*6.28],[y3,Math.random()*6.28]],	//Point 3 [x,y]
			getTriColor()
			]; 
	 }		

	 //first Tri right 
	 Tris[Tris.length] = [
			[100,2],   //Point 1 [x%,y%]
			[100,21],	//Point 2 [x,y]
			[[94 - Math.random()*4,Math.random()*6.28],[13.5,Math.random()*6.28],],	//Point 3 [x,y]
			getTriColor()
			];


	 for(var i= 0; i < 6; i++){ //Upper Row Triangles
		var y1 = Tris[Tris.length - 1][0][1] + (Math.random()*10) + 12;
		var y2 = y1 + Math.random()*35 + 20;
		var y3 = ((y1 +y2) / 2) + (Math.random()*6 - 3);
	 
			Tris[Tris.length] = [
			[100,y1],   //Point 1 [x%,y%]
			[100,y2],	//Point 2 [x,y]
			[[94 - Math.random()*4,Math.random()*6.28],[y3,Math.random()*6.28]],	//Point 3 [x,y]
			getTriColor()
			]; 
	 }		 	 
	 
	 
	 
	 console.log(Tris);
	 setInterval(canvasDraw, 25);
 }
//Move Tri Vertexes

function movement(){
	for(var i = 0; i < Tris.length; i++){
		Tris[i][2][0][0] = Tris[i][2][0][0] + (0.03 * Math.sin(tick + Tris[i][2][0][1]));
		Tris[i][2][1][0] = Tris[i][2][1][0] + (0.03 * Math.sin(tick + Tris[i][2][1][1]));
	}
	tick = tick + 0.05;
}


//basic setup
function canvasInit(){
	 canvas = document.getElementById("homeCanvas");
	 ctx = canvas.getContext("2d");
	
 window.addEventListener('resize', resizeCanvas, false);
 window.addEventListener('orientationchange', resizeCanvas, false);
 declareTris(); 
 resizeCanvas();
}

//draws canvas
function canvasDraw(){
		movement();
		//clear
		ctx.fillStyle = "#e6e6e6";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		//test line
		
		/*ctx.moveTo(0, 0);
		ctx.lineTo(pTp(100,"w"), pTp(100,"h"));
		ctx.stroke();
		*/
		
		//tris
		for(var i=0; i < Tris.length; i++){
			
			/*   //circle on vertex
			ctx.beginPath();
			ctx.strokeStyle = "green";
			ctx.arc(pTp(Tris[i][2][0][0],"w"),pTp(Tris[i][2][1][0],"h"),10,0,2*Math.PI);
			ctx.stroke();
			*/
			
			
			ctx.beginPath();
				ctx.moveTo(pTp(Tris[i][0][0],"w"),pTp(Tris[i][0][1],"h"));
				ctx.lineTo(pTp(Tris[i][1][0],"w"),pTp(Tris[i][1][1],"h"));
				ctx.lineTo(pTp(Tris[i][2][0][0],"w"),pTp(Tris[i][2][1][0],"h"));
				ctx.closePath();

				// the outline
				ctx.lineWidth = pTp(0.3,"h");
				ctx.strokeStyle = '#666666';
				ctx.stroke();
				
				//fill
				ctx.fillStyle = "rgb(" + Tris[i][3] + ",0.7)";
				ctx.fill();
		}
				//Text
				ctx.font = pTp(5,"w") + "px Oswald";
				ctx.fillStyle = "black";
				var adjust = ctx.measureText("Bob's Computer Club").width;
				ctx.fillText("Bob's Computer Club", (pTp(100,"w") / 2) - (adjust / 2),pTp(50,"h"));
				ctx.font = pTp(3,"w") + "px Arial";
				adjust = ctx.measureText("About").width;
				ctx.fillText("About", (pTp(100,"w") / 2) - (adjust / 2),pTp(60,"h"));
			
		
}

function checkPosition() {
	elements = document.querySelectorAll('.Fadein');
    windowHeight = window.innerHeight;
	
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('run');
        element.classList.remove('Fadein');
      }
    }
  }



function init(){
	window.addEventListener('scroll', checkPosition);
	elements = document.querySelectorAll('.Fadein');
	canvasInit();
}

function next(){
	var active = (parseInt(document.querySelectorAll('.active')[0].id.replace(/\D+/g,''))+1) % 4;	
	hideAll(document.getElementById("button" + active));
}

function hideAll(c){
	var elements = document.querySelectorAll('.active');
	
	for(var i=0; i < elements.length; i++){
		var elementC = elements[i].classList;
		elementC.add('wait');
		elementC.remove('active');
	}
	
	c.classList.add('active');
	c.classList.remove('wait');
	
	var c2 = document.getElementById(c.id + "T").classList;
	c2.remove('wait');
	c2.add('active');
	clearInterval(timer);
	timer = setInterval(next, 5000);
}

