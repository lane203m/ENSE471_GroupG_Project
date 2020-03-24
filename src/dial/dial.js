function press_num_key(num){
    document.getElementById("phoneNum").value += num;
}

function backspace(){
    text = document.getElementById("phoneNum").value
    document.getElementById("phoneNum").value = text.slice(0,-1);
}