var attempts = 0;
var buttons = document.getElementsByClassName("btn-primary");


function press_num_key(num){
	document.getElementById("phoneNum").value += num;
    document.getElementById("phoneNum").classList.add("no_error");
    document.getElementById("phoneNum").classList.remove("error_box");
}

function backspace(){
    text = document.getElementById("phoneNum").value
    document.getElementById("phoneNum").value = text.slice(0,-1);
    document.getElementById("phoneNum").classList.add("no_error");
    document.getElementById("phoneNum").classList.remove("error_box");
}

function call_911(){
	var number = document.getElementById("phoneNum").value;
	if(number != '911'){
		badInput();	
		attempts++;
		if(attempts ==3){
			adviceModal();
			recolorButtons();
		}
		if(attempts == 6){
			buttonsBounce();
		}
		if(attempts == 9){
			disableButtons()
			buttonsBounce();
		}
		if(attempts == 13){
			buttonsBounce();
			attempts = 10;
			
		}
	}
	else{
		window.location.href = '../call_session/call_session.html';
	}
	
}

function disableButtons(){
	var disabled = document.getElementsByClassName("btn-secondary");
	for(var i = 0; i<disabled.length; i++){
		disabled[i].disabled = true;
		attempts = 10
	}
}

function recolorButtons(){
	for(var i = 0; i<buttons.length; i++){
		//buttons[i].classList.remove("btn-primary");
		buttons[i].classList.add("btn-secondary");
	}
	document.getElementById("help-btn").classList.remove("btn-secondary");
	document.getElementById("1").classList.remove("btn-secondary");
	document.getElementById("9").classList.remove("btn-secondary");
	document.getElementById("1").classList.add("btn-info");
	document.getElementById("9").classList.add("btn-info");
	document.getElementById("help-btn").classList.add("btn-info");
}

function adviceModal(){
	document.getElementById("modal_content").removeAttribute('height');
	document.getElementById("myModal").style.display = "block";
	document.getElementById("advice").innerHTML = "Having trouble? Thats okay! " + "<br>" +
			"These markers will help. " + "<br>" +
			"Remember, we want to dial 9-1-1. " + "<br>" +
			"Good luck!";
}

function badInput(){
	document.getElementById("phoneNum").classList.add("shake");
	setTimeout(function(){ document.getElementById("phoneNum").classList.remove("shake"); }, 250);
	document.getElementById("phoneNum").value = '';
    document.getElementById("phoneNum").classList.add("error_box");
    document.getElementById("phoneNum").classList.remove("no_error");
}

function buttonsBounce(){
	document.getElementById("1").classList.add("btn-bounce"); 
	document.getElementById("9").classList.add("btn-bounce");
	setTimeout(function(){ 
		document.getElementById("1").classList.remove("btn-bounce"); 
	   	document.getElementById("9").classList.remove("btn-bounce");
	}, 800);
}

window.onclick = function(event) {
	if (event.target == document.getElementById("myModal")) {
		document.getElementById("myModal").style.display = "none";
	}
}

function runHelp(){
	document.getElementById("myModal").style.display = "block";
	document.getElementById("modal_content").style.height = "350px";
	document.getElementById("advice").innerHTML = "<iframe id='helpPage' frameBorder='0' width='250' height='320' src='../script_page/script.html'></iframe>";
}
function redirectHelp(){
	window.location.href = '../script_page/script.html';
}


