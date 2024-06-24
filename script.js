var player = 1;
var gameOver = false;
var cells = Array.from(document.querySelectorAll(".col"));
var result;
var replayBtn = document.getElementById("reset");
var score1 = 0;
var score2 = 0;
var tie = 0;


function switchPlayer(player){
	if(player===1)
		{
			player=2;
			document.getElementById("message").textContent = "O's turn";
		}
	else{
		player=1;
		document.getElementById("message").textContent = "X's turn";
	}
	return player;
}
document.getElementById("message").textContent = "X's turn";
for(var i=1;i<=9;i++){
	document.getElementById(i).addEventListener("click",function check(){
		if(player===1 && isGameOver(this.id)===false && this.textContent===""){
			this.textContent = "X";
			this.removeEventListener("click",check);
		}
		else if(player===2 && isGameOver(this.id)===false && this.textContent===""){
			this.textContent = "O";
			this.removeEventListener("click",check);
		}
		gameOver = isGameOver(this.id);
		if(gameOver){
			if(res()==="p1"){
				document.getElementById("message").textContent = "X wins";
				document.getElementById("message").style.color="#a62302";
				score1+=1;
				document.getElementById("scorep1").textContent = score1;
			}
			else if(res()==="p2"){
				document.getElementById("message").textContent = "O wins";
				document.getElementById("message").style.color="green";
				score2+=1;
				document.getElementById("scorep2").textContent = score2;
			}
			else if(res()==="tie"){
				document.getElementById("message").textContent = "Tie";
				tie+=1;
				document.getElementById("no-of-tie").textContent = tie;
			}
		}
		if(!gameOver)
		player=switchPlayer(player);

	});
}



function isGameOver(id){
	if (player===1)
{
	if(id%3!==0)
		{
			clickedRow = Math.floor(id/3) + 1;
			clickedCol = id%3;
		}
	else
		{
			clickedRow = id/3;
			clickedCol = 3;
		}
	var x;
	if(clickedRow === 1)
		x = 1;
	else if(clickedRow=== 2)
		x = 4;
	else if(clickedRow === 3)
		x = 7;
	  for(var j=x;j<=x+2;j++)
	{
		if(document.getElementById(j).textContent!=="X")
			break;
	}
	if(j===x+3){
		gameOver = true;
		result="p1";
		return gameOver;
	 }
   for(var i=clickedCol;i<=clickedCol+6;i+=3){
   	if(document.getElementById(i).textContent!=="X")
   		break;
   }
   if(i=== clickedCol+9)
   {
   	gameOver = true;
   	result = "p1";
   	return gameOver;
   }
 			for(var i=1;i<=9;i+=4){
 				if(document.getElementById(i).textContent!=="X")
 					break;
 			}
 			if(i===13)
 			{
 				gameOver = true;
 				result = "p1";
 				return gameOver;
 			}
 			for(var i=3;i<=7;i+=2){
 			   if(document.getElementById(i).textContent!=="X")
 				break;
 			}
 			if(i===9){
 				gameOver = true;
 				result = "p1";
 				return gameOver;
 			}
}
else if (player===2)
{
	if(id%3!==0)
		{
			clickedRow = Math.floor(id/3) + 1;
			clickedCol = id%3;
		}
	else
		{
			clickedRow = id/3;
			clickedCol = 3;
		}
	var x;
	if(clickedRow === 1)
		x = 1;
	else if(clickedRow=== 2)
		x = 4;
	else if(clickedRow === 3)
		x = 7;
	  for(var j=x;j<=x+2;j++)
	{
		if(document.getElementById(j).textContent!=="O")
			break;
	}
	if(j===x+3){
		gameOver = true;
 		result = "p2";
		return gameOver;
	 }

   for(var i=clickedCol;i<=clickedCol+6;i+=3){
   	if(document.getElementById(i).textContent!=="O")
   		break;
   }
   if(i=== clickedCol+9)
   {
   	gameOver = true;
   	result = "p2";
   	return gameOver;
   }
 			for(var i=1;i<=9;i+=4){
 				if(document.getElementById(i).textContent!=="O")
 					break;
 			}
 			if(i===13)
 			{
 				gameOver = true;
 				result = "p2";
 				return gameOver;
 			}
 			for(var i=3;i<=7;i+=2){
 			   if(document.getElementById(i).textContent!=="O")
 				break;
 			}
 			if(i===9){
 				gameOver = true;
 				result = "p2";
 				return gameOver;
 			}
  }
var isFilled = false;
for(var i=1;i<=9;i++)
{
	if(document.getElementById(i).textContent===""){
		break;
	}
}
if(i===10)
{
	gameOver = true;
	result = "tie";
	return gameOver;
}

  return gameOver;
}

function res(){
	return result;
}

replayBtn.addEventListener("click",reset);
function reset(){
	location.reload(false); 
}