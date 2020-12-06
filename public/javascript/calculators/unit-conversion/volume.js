//centimeter is equal to milliliter

//changing from meter
function inMeter(field){
    document.getElementById("kilometer").value = abbreviate(field.value / 1000000000, document.getElementById("kilometer"));
    document.getElementById("liter").value = abbreviate(field.value * 1000, document.getElementById("liter"));
    document.getElementById("millimeter").value = abbreviate(field.value * 1000000000, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 1000000, document.getElementById("centimeter"));
    document.getElementById("milliliter").value = abbreviate(field.value * 1000000, document.getElementById("milliliter"));
    document.getElementById("inch").value = abbreviate(field.value * 61023.74, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 35.3147, document.getElementById("foot"));
}

//changing from kilometer
function inKilometer(field){
    document.getElementById("meter").value = abbreviate(field.value * 1000000000, document.getElementById("meter"));
    document.getElementById("liter").value = abbreviate(field.value * 1000000000000, document.getElementById("liter"));
    document.getElementById("millimeter").value = abbreviate(field.value * 1000000000000000000, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 1000000000000000, document.getElementById("centimeter"));
    document.getElementById("milliliter").value = abbreviate(field.value * 1000000000000000, document.getElementById("milliliter"));
    document.getElementById("inch").value = abbreviate(field.value * 61023744090000, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 35310000000, document.getElementById("foot"));
}

//changing from liter
function inLiter(field){
    document.getElementById("meter").value = abbreviate(field.value / 1000, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 1000000000000, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 1000000, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 1000, document.getElementById("centimeter"));
    document.getElementById("milliliter").value = abbreviate(field.value * 1000, document.getElementById("milliliter"));
    document.getElementById("inch").value = abbreviate(field.value * 61.0237, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 28.317, document.getElementById("foot"));
}

//changing from millimeter
function inMillimeter(field){
    document.getElementById("meter").value = abbreviate(field.value / 1000000000, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 1000000000000000000, document.getElementById("kilometer"));
    document.getElementById("liter").value = abbreviate(field.value * 1000000, document.getElementById("liter"));
    document.getElementById("centimeter").value = abbreviate(field.value / 1000, document.getElementById("centimeter"));
    document.getElementById("milliliter").value = abbreviate(field.value / 1000, document.getElementById("milliliter"));
    document.getElementById("inch").value = abbreviate(field.value / 16387, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 28317000, document.getElementById("foot"));
}

//changing from Centimeter
function inCentimeter(field){
    document.getElementById("meter").value = abbreviate(field.value / 1000000, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 1000000000000000, document.getElementById("kilometer"));
    document.getElementById("liter").value = abbreviate(field.value / 1000, document.getElementById("liter"));
    document.getElementById("millimeter").value = abbreviate(field.value * 1000, document.getElementById("millimeter"));
    document.getElementById("milliliter").value = field.value;
    document.getElementById("inch").value = abbreviate(field.value / 16.387, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 28317, document.getElementById("foot"));
}

//changing from milliliter 
function inMilliliter(field){
    document.getElementById("meter").value = abbreviate(field.value / 1000000, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 1000000000000000, document.getElementById("kilometer"));
    document.getElementById("liter").value = abbreviate(field.value / 1000, document.getElementById("liter"));
    document.getElementById("millimeter").value = abbreviate(field.value * 1000, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = field.value;
    document.getElementById("inch").value = abbreviate(field.value / 16.387, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 28317, document.getElementById("foot"));
}

//changing from inch
function inInch(field){
    document.getElementById("meter").value = abbreviate(field.value / 61024, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 61024000000000, document.getElementById("kilometer"));
    document.getElementById("liter").value = abbreviate(field.value / 61.024, document.getElementById("liter"));
    document.getElementById("millimeter").value = abbreviate(field.value * 16387.1, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value / 16.3871, document.getElementById("centimeter"));
    document.getElementById("milliliter").value = abbreviate(field.value / 16.3871, document.getElementById("milliliter"));
    document.getElementById("foot").value = abbreviate(field.value / 1728, document.getElementById("foot"));
}

//changing from foot
function inFoot(field){
    document.getElementById("meter").value = abbreviate(field.value / 35.315, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 35315000000, document.getElementById("kilometer"));
    document.getElementById("liter").value = abbreviate(field.value * 28.3168, document.getElementById("liter"));
    document.getElementById("millimeter").value = abbreviate(field.value * 28320000, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 28316.8, document.getElementById("centimeter"));
    document.getElementById("milliliter").value = abbreviate(field.value * 28316.8, document.getElementById("milliliter"));
    document.getElementById("inch").value = abbreviate(field.value * 1728, document.getElementById("inch"));
}