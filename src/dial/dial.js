var attempts = 0;	//child starts with no attempts
var buttons = document.getElementsByClassName("btn-primary");	//track buttons

//child presses a key. Remove any error boxes and assume input is correct until new submit. Add input to input box
function press_num_key(num){	
	document.getElementById("phoneNum").value += num;
    document.getElementById("phoneNum").classList.add("no_error");
    document.getElementById("phoneNum").classList.remove("error_box");
}

//remove from input box. remove any error boxes and assume input is correct.
function backspace(){
    text = document.getElementById("phoneNum").value
    document.getElementById("phoneNum").value = text.slice(0,-1);
    document.getElementById("phoneNum").classList.add("no_error");
    document.getElementById("phoneNum").classList.remove("error_box");
}

//child attempts to call 911
function call_911(){
	var number = document.getElementById("phoneNum").value;	//get the input number
	if(number != '911'){	//if input was not 911
		badInput();			//warn of bad input w/validation
		attempts++;			//adds to childs attempts
		if(attempts ==3){		//if wrong 3 times
			adviceModal();		//modal with advice
			recolorButtons();	//offer more help w/affordances
		}
		if(attempts == 6){		//child is wrong 6 times
			buttonsBounce();	//buttons bounce
		}
		if(attempts == 9){		//child is wrong 9 times
			disableButtons()	//all but 911 are disabled
			buttonsBounce();	//buttons bounce
			attempts = 10;      //set attempts to 10 for looping
		}
		if(attempts == 13){		//child is wrong 13, 16, 19... times
			buttonsBounce();	//bounce
			attempts = 10;		//set attempts to 10 for looping
			
		}
	}
	else{
		window.location.href = '../call_session/call_session.html'; //go to call session if input is 911
	}
	
}

//turn off all buttons that are not 911. Use disable boolean
function disableButtons(){
	var disabled = document.getElementsByClassName("btn-secondary");
	for(var i = 0; i<disabled.length; i++){
		disabled[i].disabled = true;
		attempts = 10
	}
}

//recolor buttons. All non 911 buttons turn grey except for help me and other UI. 911 buttons turn lighter blue
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

//when called, triggers a modal popup with a reminder to dial 911
function adviceModal(){
	document.getElementById("modal_content").removeAttribute('height');
	document.getElementById("myModal").style.display = "block";
	document.getElementById("advice").innerHTML = "Having trouble? Thats okay! " + "<br>" +
			"These markers will help. " + "<br>" +
			"Remember, we want to dial 9-1-1. " + "<br>" +
			"Good luck!";
}

//when called via bad input, shake the number and present a dashed error box.
function badInput(){
	document.getElementById("phoneNum").classList.add("shake");
	setTimeout(function(){ document.getElementById("phoneNum").classList.remove("shake"); }, 250);
	document.getElementById("phoneNum").value = '';
    document.getElementById("phoneNum").classList.add("error_box");
    document.getElementById("phoneNum").classList.remove("no_error");
}

//given enough times wrong, 911 buttons will "bounce" to draw attention
function buttonsBounce(){
	document.getElementById("1").classList.add("btn-bounce"); 
	document.getElementById("9").classList.add("btn-bounce");
	setTimeout(function(){ 
		document.getElementById("1").classList.remove("btn-bounce"); 
	   	document.getElementById("9").classList.remove("btn-bounce");
	}, 800);
}

//leave modal
window.onclick = function(event) {
	if (event.target == document.getElementById("myModal")) {
		document.getElementById("myModal").style.display = "none";
	}
}

//child asks for help modal. shows script.html in iframe
function runHelp(){
	document.getElementById("myModal").style.display = "block";
	document.getElementById("modal_content").style.height = "350px";
	document.getElementById("advice").innerHTML = "<iframe id='helpPage' frameBorder='0' width='250' height='320' src='../script_page/script.html'></iframe>";
}



