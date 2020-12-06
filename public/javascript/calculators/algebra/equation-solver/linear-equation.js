//for showing the graph when the page first loaded
window.onload = function () {
    updateGraph();
};

//calculation numbers when number inputed
function calculate() {

    //getting fields
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var answer = document.getElementById("answer");

    //calculation numbers
    answer.value = (number2.value / number1.value) * -1;

    updateGraph(number1.value, number2.value);
}



//making the Graph
function updateGraph(num1, num2) {

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

    //if a numberfield was not filled, we count it as 0
    if (num1 == "") { num1 = 0; }
    if (num2 == "") { num2 = 0; }

    var equation = "y = " + num1 + "x +" + num2;
    console.log(equation);

    graph.setExpression({ id: 'graph1', latex: equation });
}