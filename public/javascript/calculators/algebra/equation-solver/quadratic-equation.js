//for showing the graph when the page first loaded
window.onload = function(){
    updateGraph();
};

//calculation numbers when number inputed
function calculate(){

    //getting fields
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var number3 = document.getElementById("number3");
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");

    //if first number box was left or 0, tell to use linear
    if(number1.value == "" || number1.value == 0){
        document.getElementById("note").style.display = "block";
    }
    else{
        document.getElementById("note").style.display = "none";
    }

    //calculation numbers
    answer1.value = ( (-1 * number2.value) + Math.sqrt(Math.pow(number2.value, 2) - (4 * number1.value * number3.value) ) ) / (2 * number1.value);
    answer2.value = ( (-1 * number2.value) - Math.sqrt(Math.pow(number2.value, 2) - (4 * number1.value * number3.value) ) ) / (2 * number1.value);

    updateGraph(number1.value, number2.value, number3.value);
}


//making the Graph
function updateGraph(num1, num2, num3){
    
    //getting the graph place
    var elt = document.getElementById('graph');

    //disabling some feature
    var disabled = {
        expressions: false,
        keypad: false,
        settingsMenu: false
    };
    
    //making the equation graph
    elt.innerHTML = "";
    var graph = Desmos.GraphingCalculator(elt, disabled);

    var equation = "y = ";
    
    //if a numberfield was not filled, we count it as 0
    if(num1 == "") { num1 = 0; }
    if(num2 == "") { num2 = 0; }
    if(num3 == "") { num3 = 0; }

    equation = "y = " + num1 + "x^2 + " + num2 + "x +" + num3;
    console.log(equation);

    graph.setExpression({ id: 'graph1', latex: equation });
}