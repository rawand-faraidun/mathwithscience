//changig from meter
function inMeter(field){
    document.getElementById("kilometer").value = abbreviate(field.value / 1000000, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 1000000, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 10000, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value * 100, document.getElementById("decimeter"));
    document.getElementById("hectare").value = abbreviate(field.value / 10000, document.getElementById("hectare"));
    document.getElementById("mile").value = abbreviate(field.value * 0.000000386, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 1550, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 10.76, document.getElementById("foot"));
}

//changig from kilometer
function inKilometer(field){
    document.getElementById("meter").value = abbreviate(field.value * 1000000, document.getElementById("meter"));
    document.getElementById("millimeter").value = abbreviate(field.value * 1000000000000, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 10000000000, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value * 100000000, document.getElementById("decimeter"));
    document.getElementById("hectare").value = abbreviate(field.value * 100, document.getElementById("hectare"));
    document.getElementById("mile").value = abbreviate(field.value / 2.59, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 1550003100.01, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 10736910.42, document.getElementById("foot"));
}

//changig from millimeter
function inMillimeter(field){
    document.getElementById("meter").value = abbreviate(field.value / 1000000, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 1000000000000, document.getElementById("kilometer"));
    document.getElementById("centimeter").value = abbreviate(field.value / 100, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value / 10000, document.getElementById("decimeter"));
    document.getElementById("hectare").value = abbreviate(field.value / 10000000000, document.getElementById("hectare"));
    document.getElementById("mile").value = abbreviate(field.value / 2590000000000, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value / 645, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 92903, document.getElementById("foot"));
}

//changig from centimeter
function inCentimeter(field){
    document.getElementById("meter").value = abbreviate(field.value / 10000, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 10000000000, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 100, document.getElementById("millimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value / 100, document.getElementById("decimeter"));
    document.getElementById("hectare").value = abbreviate(field.value / 10000, document.getElementById("hectare"));
    document.getElementById("mile").value = abbreviate(field.value / 25900000000, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value / 6.45, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 929.03, document.getElementById("foot"));
}

//changig from centimeter
function inDecimeter(field){
    document.getElementById("meter").value = abbreviate(field.value / 100, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 100000000, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 10000, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 100, document.getElementById("centimeter"));
    document.getElementById("hectare").value = abbreviate(field.value / 1000000, document.getElementById("hectare"));
    document.getElementById("mile").value = abbreviate(field.value / 259000000, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 15.5, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 9.29, document.getElementById("foot"));
}

//changig from hectare
function inHectare(field){
    document.getElementById("meter").value = abbreviate(field.value * 10000, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 100, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 10000000000, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 100000000, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value / 1000000, document.getElementById("decimeter"));
    document.getElementById("mile").value = abbreviate(field.value / 259, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 15500031, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 107639.1, document.getElementById("foot"));
}

//changig from mile
function inMile(field){
    document.getElementById("meter").value = abbreviate(field.value * 2589988, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value * 2.589988, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 2589988110336, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 25899881103, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value * 258998811, document.getElementById("decimeter"));
    document.getElementById("hectare").value = abbreviate(field.value * 258.999, document.getElementById("hectare"));
    document.getElementById("inch").value = abbreviate(field.value * 4014489600, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 27878400, document.getElementById("foot"));
}

//changig from inch
function inInch(field){
    document.getElementById("meter").value = abbreviate(field.value / 1550, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 1550000000, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 645.16, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 6.4516, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value / 15.5, document.getElementById("decimeter"));
    document.getElementById("hectare").value = abbreviate(field.value / 15500031, document.getElementById("hectare"));
    document.getElementById("mile").value = abbreviate(field.value / 4014489600, document.getElementById("mile"));
    document.getElementById("foot").value = abbreviate(field.value / 144, document.getElementById("foot"));
}

//changig from inch
function inFoot(field){
    document.getElementById("meter").value = abbreviate(field.value / 10.76, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 10736910.42, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 92903, document.getElementById("millimeter"));
    document.getElementById("centimeter").value = abbreviate(field.value * 929.03, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value * 9.29, document.getElementById("decimeter"));
    document.getElementById("hectare").value = abbreviate(field.value / 107639.1, document.getElementById("hectare"));
    document.getElementById("mile").value = abbreviate(field.value / 27878400, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 144, document.getElementById("inch"));
}