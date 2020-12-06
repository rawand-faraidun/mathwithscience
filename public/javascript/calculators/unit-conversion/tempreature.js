//changing from celsius
function inCelsius(field){
    document.getElementById("fahrenheit").value = fixing(field, (field.value * 9/5) + 32);
    document.getElementById("kelvin").value = fixing(field, Number(field.value) + 273.15);
    document.getElementById("rankine").value = fixing(field, (field.value * 9/5) + 491.67);
    document.getElementById("delisle").value = fixing(field, ( 100 - field.value ) * 3 / 2);
    document.getElementById("newton").value = fixing(field, field.value * 33/100);
    document.getElementById("reaumur").value = fixing(field, field.value / 1.25);
    document.getElementById("romer").value = fixing(field, field.value * (21/40) + 7.5);
}

//because there is no special event, so we change others to celsius and then convert them
//changing from fahrenheit
function inFahrenheit(field){
    var number = field.value;
    var celsius = document.getElementById("celsius");
    celsius.value = fixing(field, (number - 32) * 5/9);
    inCelsius(celsius);
    field.value = number;
}

//changing from kelvin
function inKelvin(field){
    var number = field.value;
    var celsius = document.getElementById("celsius");
    celsius.value = fixing(field, number - 273.15);
    inCelsius(celsius);
    field.value = number;
}

//changing from rankine
function inRankine(field){
    var number = field.value;
    var celsius = document.getElementById("celsius");
    celsius.value = fixing(field, (number - 491.67) * 5/9);
    inCelsius(celsius);
    field.value = number;
}

//changing from delisle
function inDelisle(field){
    var number = field.value;
    var celsius = document.getElementById("celsius");
    celsius.value = fixing(field, 100 - number * 2/3);
    inCelsius(celsius);
    field.value = number;
}

//changing from newton
function inNewton(field){
    var number = field.value;
    var celsius = document.getElementById("celsius");
    celsius.value = fixing(field, number / (33/100));
    inCelsius(celsius);
    field.value = number;
}

//changing from reaumur
function inReaumur(field){
    var number = field.value;
    var celsius = document.getElementById("celsius");
    celsius.value = fixing(field, number * 1.25);
    inCelsius(celsius);
    field.value = number;
}

//changing from romer
function inRomer(field){
    var number = field.value;
    var celsius = document.getElementById("celsius");
    celsius.value = fixing(field, (number - 7.5) * (40/21));
    inCelsius(celsius);
    field.value = number;
}











//cheking if the value had to many numbers after dot
//field: is the field that now has calculation
//value: is the answer of the calculation
function fixing(field, value){
    //if the value was empty
    if(field.value == ""){
        return "";
    }
    //if the value had more than 3 numbers after dot, cut it
    if(value.toString().includes('.') && value.toString().substring(value.toString().indexOf('.'), value.length).length > 3){
        value = value.toFixed(3)
    }
    //cuting zeros after nembers after dot, the usless ones
    var i;
    for (i = value.length; i > value.toString().indexOf('.'); i--){
        if (value.toString().charAt(i) == 0){
            value = value.substring(0, i);
        }
        else{
            break;
        }
    }
    //if all numbers after dot was zero, then it cut the dot too
    if (value.toString().charAt(i) == '.'){
        value = value.substring(0, i)
    }

    return value;
}