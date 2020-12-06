function changeMethod(option){
    if(option.selectedIndex == 0){
        document.getElementById("answer").placeholder = "4";
        calculate();
    }
    if(option.selectedIndex == 1){
        document.getElementById("answer").placeholder = "16";
        calculate();
    }
}

function calculate(){
    
    var controls = document.getElementById("controls");
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var number3 = document.getElementById("number3");
    var answer = document.getElementById("answer");

    if(controls.selectedIndex == 0){
        answer.value = (number3.value * number2.value) / number1.value;
    }
    if(controls.selectedIndex == 1){ 
        answer.value = (number1.value * number2.value) / number3.value;
    }
}