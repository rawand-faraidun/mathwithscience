//changing from watt
function inWatt(field){
    document.getElementById("kilowatt").value = abbreviate(field.value / 1000, document.getElementById("kilowatt"));
    document.getElementById("horsepower").value = abbreviate(field.value / 764, document.getElementById("horsepower"));
    document.getElementById("milliwatt").value = abbreviate(field.value * 1000, document.getElementById("milliwatt"));
    document.getElementById("megawatt").value = abbreviate(field.value / 1000000, document.getElementById("megawatt"));
}

//changing from kilowatt
function inKilowatt(field){
    document.getElementById("watt").value = abbreviate(field.value * 1000, document.getElementById("watt"));
    document.getElementById("horsepower").value = abbreviate(field.value * 1.341, document.getElementById("horsepower"));
    document.getElementById("milliwatt").value = abbreviate(field.value * 1000000, document.getElementById("milliwatt"));
    document.getElementById("megawatt").value = abbreviate(field.value / 1000, document.getElementById("megawatt"));
}

//changing from horsepower
function inHorsePower(field){
    document.getElementById("watt").value = abbreviate(field.value * 745.7, document.getElementById("watt"));
    document.getElementById("kilowatt").value = abbreviate(field.value / 1.341, document.getElementById("kilowatt"));
    document.getElementById("milliwatt").value = abbreviate(field.value * 745700, document.getElementById("milliwatt"));
    document.getElementById("megawatt").value = abbreviate(field.value / 1341, document.getElementById("megawatt"));
}

//changing from milliwatt
function inMilliwatt(field){
    document.getElementById("watt").value = abbreviate(field.value / 1000, document.getElementById("watt"));
    document.getElementById("kilowatt").value = abbreviate(field.value / 1000000, document.getElementById("kilowatt"));
    document.getElementById("horsepower").value = abbreviate(field.value / 745700, document.getElementById("horsepower"));
    document.getElementById("megawatt").value = abbreviate(field.value / 1000000000, document.getElementById("megawatt"));
}

//changing from megawatt
function inMegawatt(field){
    document.getElementById("watt").value = abbreviate(field.value * 1000000, document.getElementById("watt"));
    document.getElementById("kilowatt").value = abbreviate(field.value * 1000, document.getElementById("kilowatt"));
    document.getElementById("horsepower").value = abbreviate(field.value * 1341.02, document.getElementById("horsepower"));
    document.getElementById("milliwatt").value = abbreviate(field.value * 1000000000, document.getElementById("milliwatt"));
}