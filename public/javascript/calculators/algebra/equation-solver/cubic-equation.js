//for showing the graph when the page first loaded
window.onload = function () {
    updateGraph();
};

//calculation numbers when number inputed
function calculate() {

    //getting fields
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var number3 = document.getElementById("number3");
    var number4 = document.getElementById("number4");
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");

    //if first number box was left or 0, tell to use quadratic
    if (number1.value == "" || number1.value == 0) {
        document.getElementById("note").style.display = "block";
    }
    else {
        document.getElementById("note").style.display = "none";
    }

    //calculation numbers
    var xValues = cubicX(number1.value, number2.value, number3.value, number4.value);

    //first answer value
    answer1.value = xValues[0].real;

    //second answer value
    if (number4.value == "" || number4.value == 0) {
        answer2.value = 0;
    }
    else {
        answer2.value = (xValues[1].real + xValues[1].i);
    }

    //the third number sometimes gets a mistake in the cubicX function, so we calculate value of X2 and i of X3 to get the real value
    answer3.value = (xValues[1].real + xValues[2].i);

    updateGraph(number1.value, number2.value, number3.value, number4.value);
}


//making the Graph
function updateGraph(num1, num2, num3, num4) {

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
    if (num3 == "") { num3 = 0; }
    if (num4 == "") { num4 = 0; }

    var equation = "y = " + num1 + "x^3 + " + num2 + "x^2 +" + num3 + "x +" + num4;
    console.log(equation);

    graph.setExpression({ id: 'graph1', latex: equation });
}



//cubic equation
//quadratic equation solveing X1 function
function cubicX(a, b, c, d) {

    b /= a;
    c /= a;
    d /= a;

    var discrim, q, r, dum1, s, t, term1, r13;

    q = (3.0 * c - (b * b)) / 9.0;
    r = -(27.0 * d) + b * (9.0 * c - 2.0 * (b * b));
    r /= 54.0;

    discrim = q * q * q + r * r;

    var roots = [{ real: 0, i: 0 }, { real: 0, i: 0 }, { real: 0, i: 0 }];

    term1 = (b / 3.0);

    if (discrim > 0) { // one root real, two are complex
        s = r + Math.sqrt(discrim);
        s = ((s < 0) ? -Math.pow(-s, (1.0 / 3.0)) : Math.pow(s, (1.0 / 3.0)));
        t = r - Math.sqrt(discrim);
        t = ((t < 0) ? -Math.pow(-t, (1.0 / 3.0)) : Math.pow(t, (1.0 / 3.0)));

        roots[0].real = -term1 + s + t;
        term1 += (s + t) / 2.0;
        roots[2].real = roots[2].real = -term1;
        term1 = Math.sqrt(3.0) * (-t + s) / 2;

        roots[1].i = term1;
        roots[2].i = -term1;
        return roots;
    }

    // The remaining options are all real


    if (discrim == 0) { // All roots real, at least two are equal.
        r13 = ((r < 0) ? -Math.pow(-r, (1.0 / 3.0)) : Math.pow(r, (1.0 / 3.0)));
        roots[0].real = -term1 + 2.0 * r13;
        roots[2].real = roots[1].real = -(r13 + term1);
        return roots;
    } // End if (discrim == 0)

    // Only option left is that all roots are real and unequal (to get here, q < 0)
    q = -q;
    dum1 = q * q * q;
    dum1 = Math.acos(r / Math.sqrt(dum1));
    r13 = 2.0 * Math.sqrt(q);

    roots[0].real = -term1 + r13 * Math.cos(dum1 / 3.0);
    roots[1].real = -term1 + r13 * Math.cos((dum1 + 2.0 * Math.PI) / 3.0);
    roots[2].real = -term1 + r13 * Math.cos((dum1 + 2.0 * Math.PI) / 3.0);

    return roots;
}