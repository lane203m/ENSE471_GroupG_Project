var attempts = 0;
var buttons = document.getElementsByClassName("btn-primary");


window.onclick = function(event) {
	if (event.target == document.getElementById("myModal")) {
		document.getElementById("myModal").style.display = "none";
	}
	
}
function press_num_key(num){
	document.getElementById("phoneNum").value += num;
    document.getElementById("phoneNum").classList.add("no_error")
    document.getElementById("phoneNum").classList.remove("error_box")
}

function backspace(){
    text = document.getElementById("phoneNum").value
    document.getElementById("phoneNum").value = text.slice(0,-1);
    document.getElementById("phoneNum").classList.add("no_error")
    document.getElementById("phoneNum").classList.remove("error_box")
}

function call_911(){
	var number = document.getElementById("phoneNum").value;
	if(number != '911'){
		document.getElementById("phoneNum").classList.add("shake")
		setTimeout(function(){ document.getElementById("phoneNum").classList.remove("shake"); }, 250);
		document.getElementById("phoneNum").value = '';
	    document.getElementById("phoneNum").classList.add("error_box")
	    document.getElementById("phoneNum").classList.remove("no_error")
		
		attempts++;
		if(attempts ==3){
			document.getElementById("myModal").style.display = "block";
			document.getElementById("advice").innerHTML = "Having trouble? Thats okay! " + "<br>" +
					"These markers will help. " + "<br>" +
					"Remember, we want to dial 9-1-1. " + "<br>" +
					"Good luck!";
			for(var i = 0; i<buttons.length; i++){
				//buttons[i].classList.remove("btn-primary");
				buttons[i].classList.add("btn-secondary");
			}
			document.getElementById("1").classList.remove("btn-secondary");
			document.getElementById("9").classList.remove("btn-secondary");
			document.getElementById("1").classList.add("btn-info");
			document.getElementById("9").classList.add("btn-info");


		}
		if(attempts == 6){
			document.getElementById("1").classList.add("btn-bounce"); 
			document.getElementById("9").classList.add("btn-bounce");
			setTimeout(function(){ document.getElementById("1").classList.remove("btn-bounce"); 
			   					   document.getElementById("9").classList.remove("btn-bounce");
			}, 800);

		}
		if(attempts == 9){
			var disabled = document.getElementsByClassName("btn-secondary");
			for(var i = 0; i<disabled.length; i++){
				disabled[i].disabled = true;
				attempts = 10
			}
		}
		if(attempts == 13){
			document.getElementById("1").classList.add("btn-bounce"); 
			document.getElementById("9").classList.add("btn-bounce");
			setTimeout(function(){ document.getElementById("1").classList.remove("btn-bounce"); 
			   					   document.getElementById("9").classList.remove("btn-bounce");
			}, 800);
			attempts = 10;
			
		}
	}
	else{
		
	}
	
}


