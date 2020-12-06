//field: getting the field that use this function, used *this* as argument in HTML

//changig from meter
function inMeter(field){
    if(low(field)){
        return;
    }
    document.getElementById("kilometer").value = abbreviate(field.value / 1000, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 1000, document.getElementById("millimeter"));
    document.getElementById("nanometer").value = abbreviate(field.value * 1000000000, document.getElementById("nanometer"));
    document.getElementById("micrometer").value = abbreviate(field.value * 1000000, document.getElementById("micrometer"));
    document.getElementById("centimeter").value = abbreviate(field.value * 100, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value * 10, document.getElementById("decimeter"));
    document.getElementById("decameter").value = abbreviate(field.value / 10, document.getElementById("decameter"));
    document.getElementById("mile").value = abbreviate(field.value / 1609, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 39.37, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 3.281, document.getElementById("foot"));
    document.getElementById("yard").value = abbreviate(field.value * 1.094, document.getElementById("yard"));
}

//changing from kilometer
function inKilometer(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value * 1000, document.getElementById("meter"));
    document.getElementById("millimeter").value = abbreviate(field.value * 1000000, document.getElementById("millimeter"));
    document.getElementById("nanometer").value = abbreviate(field.value * 1000000000000, document.getElementById("nanometer"));
    document.getElementById("micrometer").value = abbreviate(field.value * 1000000000, document.getElementById("micrometer"));
    document.getElementById("centimeter").value = abbreviate(field.value * 100000, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value * 10000, document.getElementById("decimeter"));
    document.getElementById("decameter").value = abbreviate(field.value * 100, document.getElementById("decameter"));
    document.getElementById("mile").value = abbreviate(field.value / 1.609, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 39370.08, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 3280.84, document.getElementById("foot"));
    document.getElementById("yard").value = abbreviate(field.value * 1094, document.getElementById("yard"));
}

//changing from milimeter
function inMillimeter(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value / 1000, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 1000000, document.getElementById("kilometer"));
    document.getElementById("nanometer").value = abbreviate(field.value * 1000000, document.getElementById("nanometer"));
    document.getElementById("micrometer").value = abbreviate(field.value * 1000, document.getElementById("micrometer"));
    document.getElementById("centimeter").value = abbreviate(field.value / 10, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value / 100, document.getElementById("decimeter"));
    document.getElementById("decameter").value = abbreviate(field.value / 10000, document.getElementById("decameter"));
    document.getElementById("mile").value = abbreviate(field.value / 1609000, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value / 25.4, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 305, document.getElementById("foot"));
    document.getElementById("yard").value = abbreviate(field.value / 914, document.getElementById("yard"));
}

//changing from nanometer
function inNanometer(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value / 1000000000, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 1000000000000, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value / 1000000, document.getElementById("millimeter"));
    document.getElementById("micrometer").value = abbreviate(field.value / 1000, document.getElementById("micrometer"));
    document.getElementById("centimeter").value = abbreviate(field.value / 10000000, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value / 100000000, document.getElementById("decimeter"));
    document.getElementById("decameter").value = abbreviate(field.value / 10000000000, document.getElementById("decameter"));
    document.getElementById("mile").value = abbreviate(field.value / 1609000000000, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value / 25400000, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 305000000, document.getElementById("foot"));
    document.getElementById("yard").value = abbreviate(field.value / 914000000, document.getElementById("yard"));
}

//changing from micrometer
function inMicrometer(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value / 1000000, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 1000000000, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value / 1000, document.getElementById("millimeter"));
    document.getElementById("nanometer").value = abbreviate(field.value * 1000, document.getElementById("nanometer"));
    document.getElementById("centimeter").value = abbreviate(field.value / 10000, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value / 100000, document.getElementById("decimeter"));
    document.getElementById("decameter").value = abbreviate(field.value / 10000000, document.getElementById("decameter"));
    document.getElementById("mile").value = abbreviate(field.value / 1609000000, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value / 25400, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 305000, document.getElementById("foot"));
    document.getElementById("yard").value = abbreviate(field.value / 914000, document.getElementById("yard"));
}

//changing from centimeter
function inCentimeter(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value / 100, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 100000, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 10, document.getElementById("millimeter"));
    document.getElementById("nanometer").value = abbreviate(field.value * 10000000, document.getElementById("nanometer"));
    document.getElementById("micrometer").value = abbreviate(field.value / 10000, document.getElementById("micrometer"));
    document.getElementById("decimeter").value = abbreviate(field.value / 10, document.getElementById("decimeter"));
    document.getElementById("decameter").value = abbreviate(field.value / 1000, document.getElementById("decameter"));
    document.getElementById("mile").value = abbreviate(field.value / 160900, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value / 2.54, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 30.5, document.getElementById("foot"));
    document.getElementById("yard").value = abbreviate(field.value / 91.4, document.getElementById("yard"));
}

//changing from decimeter
function inDecimeter(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value / 10, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 10000, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 100, document.getElementById("millimeter"));
    document.getElementById("nanometer").value = abbreviate(field.value * 100000000, document.getElementById("nanometer"));
    document.getElementById("micrometer").value = abbreviate(field.value / 100000, document.getElementById("micrometer"));
    document.getElementById("centimeter").value = abbreviate(field.value * 10, document.getElementById("centimeter"));
    document.getElementById("decameter").value = abbreviate(field.value / 100, document.getElementById("decameter"));
    document.getElementById("mile").value = abbreviate(field.value / 16090, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 3.937, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value / 3.05, document.getElementById("foot"));
    document.getElementById("yard").value = abbreviate(field.value / 9.14, document.getElementById("yard"));
}

//changing from decameter
function inDecameter(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value * 10, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 100, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 10000, document.getElementById("millimeter"));
    document.getElementById("nanometer").value = abbreviate(field.value * 10000000000, document.getElementById("nanometer"));
    document.getElementById("micrometer").value = abbreviate(field.value / 10000000, document.getElementById("micrometer"));
    document.getElementById("centimeter").value = abbreviate(field.value * 1000, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value * 100, document.getElementById("decimeter"));
    document.getElementById("mile").value = abbreviate(field.value / 161, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 393.701, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 32.808, document.getElementById("foot"));
    document.getElementById("yard").value = abbreviate(field.value * 10.9361, document.getElementById("yard"));
}

//changing from mile
function inMile(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value * 1609.34, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value * 1.60934, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 1609334, document.getElementById("millimeter"));
    document.getElementById("nanometer").value = abbreviate(field.value * 1609334000000, document.getElementById("nanometer"));
    document.getElementById("micrometer").value = abbreviate(field.value * 1609334000, document.getElementById("micrometer"));
    document.getElementById("centimeter").value = abbreviate(field.value * 160933.4, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value * 16093.34, document.getElementById("decimeter"));
    document.getElementById("decameter").value = abbreviate(field.value * 160.9334, document.getElementById("decameter"));
    document.getElementById("inch").value = abbreviate(field.value * 63360, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 5280, document.getElementById("foot"));
    document.getElementById("yard").value = abbreviate(field.value * 1760, document.getElementById("yard"));
}

//changing from inch
function inInch(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value / 39.37, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 39370, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 25.4, document.getElementById("millimeter"));
    document.getElementById("nanometer").value = abbreviate(field.value * 25400000, document.getElementById("nanometer"));
    document.getElementById("micrometer").value = abbreviate(field.value * 25400, document.getElementById("micrometer"));
    document.getElementById("centimeter").value = abbreviate(field.value * 2.54, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value / 3.937, document.getElementById("decimeter"));
    document.getElementById("decameter").value = abbreviate(field.value / 394, document.getElementById("decameter"));
    document.getElementById("mile").value = abbreviate(field.value / 63360, document.getElementById("mile"));
    document.getElementById("foot").value = abbreviate(field.value / 12, document.getElementById("foot"));
    document.getElementById("yard").value = abbreviate(field.value / 36, document.getElementById("yard"));
}

//changing from foot
function inFoot(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value / 3.281, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 3281, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 304.8, document.getElementById("millimeter"));
    document.getElementById("nanometer").value = abbreviate(field.value * 304800000, document.getElementById("nanometer"));
    document.getElementById("micrometer").value = abbreviate(field.value * 304800, document.getElementById("micrometer"));
    document.getElementById("centimeter").value = abbreviate(field.value * 30.48, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value * 3.048, document.getElementById("decimeter"));
    document.getElementById("decameter").value = abbreviate(field.value / 32.81, document.getElementById("decameter"));
    document.getElementById("mile").value = abbreviate(field.value / 5280, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 12, document.getElementById("inch"));
    document.getElementById("yard").value = abbreviate(field.value / 3, document.getElementById("yard"));
}

//changing from yard
function inYard(field){
    if(low(field)){
        return;
    }
    document.getElementById("meter").value = abbreviate(field.value / 1.094, document.getElementById("meter"));
    document.getElementById("kilometer").value = abbreviate(field.value / 1094, document.getElementById("kilometer"));
    document.getElementById("millimeter").value = abbreviate(field.value * 914.4, document.getElementById("millimeter"));
    document.getElementById("nanometer").value = abbreviate(field.value * 914400000, document.getElementById("nanometer"));
    document.getElementById("micrometer").value = abbreviate(field.value * 914400, document.getElementById("micrometer"));
    document.getElementById("centimeter").value = abbreviate(field.value * 91.44, document.getElementById("centimeter"));
    document.getElementById("decimeter").value = abbreviate(field.value * 9.144, document.getElementById("decimeter"));
    document.getElementById("decameter").value = abbreviate(field.value * 0.09144, document.getElementById("decameter"));
    document.getElementById("mile").value = abbreviate(field.value / 1760, document.getElementById("mile"));
    document.getElementById("inch").value = abbreviate(field.value * 36, document.getElementById("inch"));
    document.getElementById("foot").value = abbreviate(field.value * 3, document.getElementById("foot"));
}