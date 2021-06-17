let rSide = document.getElementById("rSide");
let lSide = document.getElementById("lSide");
let midLine = document.getElementById("midLine");
let lClick = document.getElementById("lClick");
let rClick = document.getElementById("rClick");





midLine.style.width = window.innerWidth * 0.002 + "px";
midLine.style.height = window.innerHeight + "px";
midLine.style.left = window.innerWidth * 0.499 + "px";


lClick.style.width = window.innerWidth * 0.4 + "px";
lClick.style.left = "0px";
lClick.style.height = window.innerHeight + "px";

lSide.style.width = window.innerWidth * 0.499 + "px";
lSide.style.height = window.innerHeight + "px";



rClick.style.width = window.innerWidth * 0.4 + "px";
rClick.style.right = "0px";
rClick.style.height = window.innerHeight + "px";

rSide.style.width = window.innerWidth * 0.499 + "px";
rSide.style.height = window.innerHeight + "px";
rSide.style.left = window.innerWidth * 0.501 + "px";



let ww = window.innerWidth;
let mlPos = window.innerWidth * 0.499;
let lCol = [120, 50, 50];
let rCol = [0, 50, 50];
let rPos = window.innerWidth * 0.501;
let rWidth = window.innerWidth * 0.499;
let lWidth = window.innerWidth * 0.499;


lClick.onclick = function(){
	if(mlPos < window.innerWidth * 0.95){
		rPos += window.innerWidth * 0.005;
		mlPos += window.innerWidth * 0.005;
		lCol[1] += window.innerWidth * 0.00015;
		rCol[1] -= window.innerWidth * 0.00015;
		rWidth -= window.innerWidth * 0.005;
		lWidth += window.innerWidth * 0.005;
	}
	lSide.style.width = lWidth + "px";
	rSide.style.width = rWidth + "px";
	lSide.style.background = "hsl(" + lCol[0] + "," + lCol[1] + "%," + lCol[2] +"%)";
	rSide.style.left = rPos + "px";
	rSide.style.background = "hsl(" + rCol[0] + "," + rCol[1] + "%," + rCol[2] +"%)";
	midLine.style.left = mlPos + "px";
}


rClick.onclick = function(){
	if(mlPos > window.innerWidth * 0.05){
		rPos -= window.innerWidth * 0.005;
		mlPos -= window.innerWidth * 0.005;
		lCol[1] -= window.innerWidth * 0.00015;
		rCol[1] += window.innerWidth * 0.00015;
		rWidth += window.innerWidth * 0.005;
		lWidth -= window.innerWidth * 0.005;
	}
	lSide.style.width = lWidth + "px";
	rSide.style.width = rWidth + "px";
	lSide.style.background = "hsl(" + lCol[0] + "," + lCol[1] + "%," + lCol[2] +"%)";
	rSide.style.left = rPos + "px";
	rSide.style.background = "hsl(" + rCol[0] + "," + rCol[1] + "%," + rCol[2] +"%)";
	midLine.style.left = mlPos + "px";
}



