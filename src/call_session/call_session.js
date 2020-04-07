function timing(){
    min = document.getElementById("minute").innerHTML;
    sec = document.getElementById("second").innerHTML;
    
    min = parseInt(min);
    sec = parseInt(sec);

    if(sec == 59){
        min ++;
        sec = 0;
    }
    else{
        sec ++;
    }

    document.getElementById("minute").innerHTML = pad2(min);
    document.getElementById("second").innerHTML = pad2(sec);
}

function pad2(number) {
   
    return (number < 10 ? '0' : '') + number
  
}