var g1;
var g2;

var timer1;
var pr = 0;

var timer2;
var pr2 = 0;

var Imlazy =true;
var Imlazy2 =true;

var windowPXLength = window.innerWidth;
var windowPXHeight = window.innerHeight;


//Resizes for format changes
function pTpG(pres, w){ //wanted precentage vaule, width(t) of height(f);
	var val;
	pres = pres /100;
		if(w == true || w == "w"){
		val = pres * (0.4* windowPXLength);
		}
		else{
			val = pres * (windowPXLength * 0.25); 
		}
	return val;
}

function resizeCanvasG(){
	windowPXLength = window.innerWidth;
    windowPXHeight = window.innerHeight;
	
	g1.width =  0.4 * windowPXLength;
	g1.height = .25 *  windowPXLength;
	
	g2.width =  0.4 * windowPXLength;
	g2.height = .25 *  windowPXLength;

	//document.getElementById("title").style.padding = margins;
	
	drawG1();
	drawG2();
}


function prT(){
if(pr >= 100){
	clearInterval(timer1);
}	
else{
	pr = pr + 2;
	drawG1();
}
}

function prT2(){
if(pr2 >= 100){
	clearInterval(timer2);
}	
else{
	pr2 = pr2 + 2;
	drawG2();
}
}


			

function drawG1(){			

			grid("2,000","2021",10,7,"Google's Market Cap", "Billions of $", "2014, 0", g1);
			drawLines(7,10,[[0,1.8,"359B"],[1,2.64,"528B"],[2,2.7,"539B"],[3,3.65,"729B"],[4,3.65,"723B"],[5,4.6,"921"],[6,5.92,"1.18T"],[7,9.58,"1.91T"]],g1,pr/100);		
		}
		
function drawG2(){			
			grid("1800","$2011",10,10,"Total CS Jobs","Thousands", "2011, 0", g2);
			drawLines(10,10,[[0,2.2,"409,000"],[1,2.5,"444,000"],[2,2.95,"531,000"],[3,3.9,"701,000"],[4,5.4,"974,000"],[5,6.9,"1,254,000"],[6,6.4,"1,152,000"],[7,6.4,"1,148,000"],[8,7.1,"1,284,000"],[9,8,"1,439,000"],[10,8.5,"1,530,000"]],g2,pr2/100);	
		}


	
function grid(maxX, maxY, freqX, freqY, tX, tY, og, object, arr){
	var ctx = object.getContext("2d");
	
		ctx.fillStyle = "#f0f0f0";
ctx.fillRect(0, 0, object.width, object.height);

//write text
//Y 

ctx.font = pTpG(5,"w") + "px Oswald";
				ctx.fillStyle = "black";
				
				var adjust = ctx.measureText(tY).width;
				ctx.translate(pTpG(7,"w"), pTpG(100,"h") / 2 + (adjust / 2));
				ctx.rotate(-90*(Math.PI/180));
				ctx.fillText(tY, 0,0);

				ctx.setTransform(1, 0, 0, 1, 0, 0);
		
//X		
				var adjust = ctx.measureText(tX).width;
				ctx.fillText(tX, (pTpG(100,"w") / 2) - (adjust / 2),pTpG(95,"h"));
				
//Bounding box is  from X: 10-90 Y: 10-80 hf				
//draw Y lines
	var cx = 10;
		ctx.lineWidth = pTp(0.2,"h");
		ctx.strokeStyle = '#d6d6d6';
		
	
	for(var i = 0; i < freqY + 1; i++){
		ctx.moveTo(pTpG(cx,"w"),pTpG(80,"h"));
		ctx.lineTo(pTpG(cx,"w"),pTpG(10,"h"));
		
		ctx.stroke();
		
		cx += 80/freqY;
	}


//Draw X lines
		var cy = 80;

	for(var i = 0; i < freqX + 1; i++){
		ctx.moveTo(pTpG(10,"w"),pTpG(cy,"h"));
		ctx.lineTo(pTpG(90,"w"),pTpG(cy,"h"));
		
		ctx.stroke();
		
		cy -= 70/freqX;
	}
	
//max and min text
		ctx.font = pTpG(2,"w") + "px Oswald";
		ctx.fillStyle = "#b5b5b5";
	//max X	
		ctx.fillText(maxX, pTpG(5,"w"),pTpG(12,"h"));
	//max Y
		ctx.fillText(maxY, pTpG(90,"w"),pTpG(85,"h"));
	//Orgin
		ctx.fillText(og, pTpG(5,"w"),pTpG(85,"h"));
}

function initA(){
	window.addEventListener('resize', resizeCanvasG, false);
 window.addEventListener('orientationchange', resizeCanvasG, false);
 
 g1 = document.getElementById("g1");
ctx1 = g1.getContext("2d");

g2 = document.getElementById("g2");
ctx2 = g2.getContext("2d");

	window.addEventListener('scroll', checkGPosition);
}

function checkGPosition() {
	if(Imlazy ){

      var element = document.getElementById("g1");
      var positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
		  resizeCanvasG();
         timer1 = setInterval(prT, 25);
        element.classList.remove('open');
		Imlazy = false;    
      }
    }
	if(Imlazy2){

      var element = document.getElementById("g2");
      var positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
		  resizeCanvasG();
         timer2 = setInterval(prT2, 25);
        element.classList.remove('open');
		Imlazy2 = false;    
      }
    }
	}
  

function drawLines(maxX, maxY, arr, obj, percent){  //Bounding box is  from X: 10-90 Y: 10-80 hf	80 + 10 // 70 + 10

	var ctx = obj.getContext("2d");
		

	for(var i = 0; i < arr.length; i++){
		//find x cord on canvas
		var x = (pTpG(80,"w")  / maxX) * i + pTpG(10,"w");
		//y cord * percentage
		var y =  pTpG(70,"h")  * ((maxY - (percent * arr[i][1])) / maxY) + pTpG(10,"h");    
	
		arr[i][0] = x;
		arr[i][1] = y;
	}
	
	//connect
	
	ctx.beginPath();
	ctx.moveTo(arr[0][0],arr[0][1])
	ctx.lineWidth = pTpG(1,"h");
	ctx.strokeStyle = "#3E559A";
				
		for(var i = 1; i < arr.length; i++){			
			ctx.lineTo(arr[i][0],arr[i][1]);
			ctx.stroke();
		}
		ctx.closePath();
		
	//circle
	ctx.strokeStyle = "#3E559A";
	ctx.lineWidth = pTpG(2,"h");
	for(var i = 0; i < arr.length; i++){
ctx.beginPath();		
		ctx.arc(arr[i][0],arr[i][1], pTpG(3,"h"),0, Math.PI * 2);
		ctx.fillStyle = "rgb(125,125,125,0.5)";
		ctx.fill();
		ctx.closePath;
	}
	ctx.font = pTpG(2,"w") + "px Oswald";
	ctx.fillStyle = "black";
	for(var i = 0; i < arr.length; i++){
			ctx.moveTo(arr[i][0],arr[i][1]);
			ctx.beginPath();				
				ctx.fillText(arr[i][2],arr[i][0] -  pTpG(1,"w"),arr[i][1] - pTpG(6,"h"));
			ctx.closePath;
	}
}
