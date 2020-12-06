//changing from newton
function inNewton(field){
    document.getElementById("kilogramforce").value = abbreviate(field.value / 9.807, document.getElementById("kilogramforce"));
    document.getElementById("gramforce").value = abbreviate(field.value * 101.97162, document.getElementById("gramforce"));
    document.getElementById("dyne").value = abbreviate(field.value * 100000, document.getElementById("dyne"));
    document.getElementById("poundforce").value = abbreviate(field.value / 4.448, document.getElementById("poundforce"));
}

//changing from kilogram - force
function inKilogramForce(field){
    document.getElementById("newton").value = abbreviate(field.value * 9.807, document.getElementById("newton"));
    document.getElementById("gramforce").value = abbreviate(field.value * 1000, document.getElementById("gramforce"));
    document.getElementById("dyne").value = abbreviate(field.value * 980665, document.getElementById("dyne"));
    document.getElementById("poundforce").value = abbreviate(field.value * 2.2046, document.getElementById("poundforce"));
}

//changing from gram - force
function inGramForce(field){
    document.getElementById("newton").value = abbreviate(field.value / 101.97162, document.getElementById("newton"));
    document.getElementById("kilogramforce").value = abbreviate(field.value / 1000, document.getElementById("kilogramforce"));
    document.getElementById("dyne").value = abbreviate(field.value * 980.665, document.getElementById("dyne"));
    document.getElementById("poundforce").value = abbreviate(field.value / 453.56977, document.getElementById("poundforce"));
}

//changing from gram - force
function inDyne(field){
    document.getElementById("newton").value = abbreviate(field.value / 100000, document.getElementById("newton"));
    document.getElementById("kilogramforce").value = abbreviate(field.value / 980665, document.getElementById("kilogramforce"));
    document.getElementById("gramforce").value = abbreviate(field.value / 980.665, document.getElementById("gramforce"));
    document.getElementById("poundforce").value = abbreviate(field.value / 444822.16, document.getElementById("poundforce"));
}

//changing from gram - force
function inPoundForce(field){
    document.getElementById("newton").value = abbreviate(field.value * 4.448, document.getElementById("newton"));
    document.getElementById("kilogramforce").value = abbreviate(field.value / 2.2046, document.getElementById("kilogramforce"));
    document.getElementById("gramforce").value = abbreviate(field.value * 453.56977, document.getElementById("gramforce"));
    document.getElementById("dyne").value = abbreviate(field.value * 444822.16, document.getElementById("dyne"));
}
