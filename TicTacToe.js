var player_turn = 1;
var player_results = []
var button_results = []
var button_clicks = 0

function clickBtn(btn){

	if(player_turn == 1){
		document.getElementById(btn).value = "X";
		player_turn -= 1;
	
	} else {
		document.getElementById(btn).value = "O"
		player_turn += 1;

	}
	document.getElementById(btn).disable = "disabled";
	winner();
	tie();
	alert("You clicked a button. Congrats.");
}

alert("Player 1: Your Turn!")

function winner(){
if(
(document.getElementById("btn1").value == "X" &&
document.getElementById("btn2").value == "X" &&
document.getElementById("btn3").value == "X") || 

(document.getElementById("btn4").value == "X" &&
document.getElementById("btn5").value == "X" &&
document.getElementById("btn6").value == "X") || 

(document.getElementById("btn7").value == "X" &&
document.getElementById("btn8").value == "X" &&
document.getElementById("btn9").value == "X") ||

(document.getElementById("btn1").value == "X" &&
document.getElementById("btn4").value == "X" &&
document.getElementById("btn7").value == "X") || 

(document.getElementById("btn2").value == "X" &&
document.getElementById("btn5").value == "X" &&
document.getElementById("btn8").value == "X") || 

(document.getElementById("btn3").value == "X" &&
document.getElementById("btn6").value == "X" &&
document.getElementById("btn9").value == "X") ||

(document.getElementById("btn1").value == "X" &&
document.getElementById("btn5").value == "X" &&
document.getElementById("btn9").value == "X") || 

(document.getElementById("btn3").value == "X" &&
document.getElementById("btn5").value == "X" &&
document.getElementById("btn7").value == "X") 
){
alert("Woo Woo! The Winner Is X!")
reset();
}else if(
(document.getElementById("btn1").value == "O" &&
document.getElementById("btn2").value == "O" &&
document.getElementById("btn3").value == "O") || 

(document.getElementById("btn4").value == "O" &&
document.getElementById("btn5").value == "O" &&
document.getElementById("btn6").value == "O") || 

(document.getElementById("btn7").value == "O" &&
document.getElementById("btn8").value == "O" &&
document.getElementById("btn9").value == "O") ||

(document.getElementById("btn1").value == "O" &&
document.getElementById("btn4").value == "O" &&
document.getElementById("btn7").value == "O") || 

(document.getElementById("btn2").value == "O" &&
document.getElementById("btn5").value == "O" &&
document.getElementById("btn8").value == "O") || 

(document.getElementById("btn3").value == "O" &&
document.getElementById("btn6").value == "O" &&
document.getElementById("btn9").value == "O") ||

(document.getElementById("btn1").value == "O" &&
document.getElementById("btn5").value == "O" &&
document.getElementById("btn9").value == "O") || 

(document.getElementById("btn3").value == "O" &&
document.getElementById("btn5").value == "O" &&
document.getElementById("btn7").value == "O") 
){
alert("Woo Woo! The Winner Is O!")
reset();
}
}

function reset(){
document.getElementById("btn1").value = "";
document.getElementById("btn2").value = "";
document.getElementById("btn3").value = "";
document.getElementById("btn4").value = "";
document.getElementById("btn5").value = "";
document.getElementById("btn6").value = "";
document.getElementById("btn7").value = "";
document.getElementById("btn8").value = "";
document.getElementById("btn9").value = "";
}



