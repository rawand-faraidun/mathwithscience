const height = document.getElementById("input1"); // CENTIMETERS for Metric, FOOT for imperial
const height2 = document.getElementById("input3"); // INCH for imperial
const weight = document.getElementById("input2"); // WEIGHT
const bmi = document.getElementById("bmi"); // BMI

const dropdown = document.getElementById("dropdown");

//for changing calculation method
function changeMethod() {

    //metric
    if (dropdown.selectedIndex == 0) {
        height2.classList.add("hidden"); //hiding inch input
        //changing placeholders
        height.placeholder = "cm";
        weight.placeholder = "Kg";
        //changing input function
        weight.setAttribute('oninput', "calculateMetric()");
        height.setAttribute('oninput', "calculateMetric()");
        //resetiong their values
        reset();
    }

    //imperial
    if (dropdown.selectedIndex == 1) {
        height2.classList.remove("hidden");//hiding inch input
        //changing placeholders
        height.placeholder = "ft";
        weight.placeholder = "lbs";
        //changing input function
        height.setAttribute('oninput', "calculateImperial()");
        weight.setAttribute('oninput', "calculateImperial()");
        //resetiong their values
        reset();
    }
}


/******************
**Calculator work**
******************/

//for metric calculation
function calculateMetric() {

    if (low(height) || low(weight)) {
        analyze();
        return;
    }

    bmi.value = ((weight.value / height.value / height.value) * 10000).toFixed(2);
    analyze(bmi.value);
}



//for imperial calculation
function calculateImperial() {

    if (low(height) || low(height2) || low(weight)) {
        analyze();
        return;
    }

    var longHeight = Number(height.value * 12) + Number(height2.value);

    bmi.value = ((weight.value / longHeight**2) * 703).toFixed(2);
    analyze(bmi.value);
}





//for bolding the right analyzation
function analyze(number) {
    //removing bold for any analyzation
    var h3 = document.getElementById("analyze").getElementsByTagName("h3");
    for (i = 0; i < h3.length; i++) {
        h3[i].style.fontWeight = "400";
    }

    //if underweight
    if (number < 18.5) {
        document.getElementById("underWeight").style.fontWeight = "700";
    }
    //if normal
    if (number >= 18.5 && number < 24.9) {
        document.getElementById("normalWeight").style.fontWeight = "700";
    }
    //if overweight
    if (number > 24.9 && number < 29.9) {
        document.getElementById("overWeight").style.fontWeight = "700";
    }
    //if obese
    if (number > 29.9) {
        document.getElementById("obese").style.fontWeight = "700";
    }
}


//to check if the number bellow ZERO
function low(field) {
    if (field.value < 0) {
        field.classList.add("error");
        return true;
    }
    else {
        field.classList.remove("error");
        return false;
    }
}


//resetting values
function reset(){
    height.value = "";
    height2.value = "";
    weight.value = "";
    bmi.value = "";
}