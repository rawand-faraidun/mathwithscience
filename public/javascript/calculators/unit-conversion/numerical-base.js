//changing from decimal
function inDecimal(field) {
    if (!allow(field, 10)) {
        return;
    }
    document.getElementById("binary").value = (+field.value).toString(2);
    document.getElementById("hexadecimal").value = (+field.value).toString(16);
    document.getElementById("ternary").value = (+field.value).toString(3);
    document.getElementById("quaternary").value = (+field.value).toString(4);
    document.getElementById("quinary").value = (+field.value).toString(5);
    document.getElementById("senary").value = (+field.value).toString(6);
    document.getElementById("septenary").value = (+field.value).toString(7);
    document.getElementById("octal").value = (+field.value).toString(8);
    document.getElementById("nonary").value = (+field.value).toString(9);
    document.getElementById("undecimal").value = (+field.value).toString(11);
    document.getElementById("duodecimal").value = (+field.value).toString(12);
    document.getElementById("tridecimal").value = (+field.value).toString(13);
    document.getElementById("tetradecimal").value = (+field.value).toString(14);
    document.getElementById("pentadecimal").value = (+field.value).toString(15);
}

//changing from binary
function inBinary(field) {
    if (!allow(field, 2)) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 2);
    inDecimal(decimal);
    field.value = num;
}

//changing from hexadecimal
function inHexadecimal(field) {
    if (!allow(field, 10, "f")) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 16);
    inDecimal(decimal);
    field.value = num;
}

//changing from ternary
function inTernary(field) {
    if (!allow(field, 3)) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 3);
    inDecimal(decimal);
    field.value = num;
}

//changing from quaternary
function inQuaternary(field) {
    if (!allow(field, 4)) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 4);
    inDecimal(decimal);
    field.value = num;
}

//changing from quinary
function inQuinary(field) {
    if (!allow(field, 5)) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 5);
    inDecimal(decimal);
    field.value = num;
}

//changing from senary
function inSenary(field) {
    if (!allow(field, 6)) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 6);
    inDecimal(decimal);
    field.value = num;
}

//changing from septenary
function inSeptenary(field) {
    if (!allow(field, 7)) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 7);
    inDecimal(decimal);
    field.value = num;
}

//changing from octal
function inOctal(field) {
    if (!allow(field, 8)) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 8);
    inDecimal(decimal);
    field.value = num;
}

//changing from nonary
function inNonary(field) {
    if (!allow(field, 9)) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 9);
    inDecimal(decimal);
    field.value = num;
}

//changing from nonary
function inUndecimal(field) {
    if (!allow(field, 10, "a")) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 11);
    inDecimal(decimal);
    field.value = num;
}

//changing from undecimal
function inDuodecimal(field) {
    if (!allow(field, 10, "b")) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 12);
    inDecimal(decimal);
    field.value = num;
}

//changing from duodecimal
function inDuodecimal(field) {
    if (!allow(field, 10, "b")) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 12);
    inDecimal(decimal);
    field.value = num;
}

//changing from tridecimal
function inTridecimal(field) {
    if (!allow(field, 10, "c")) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 13);
    inDecimal(decimal);
    field.value = num;
}

//changing from tetradecimal
function inTetradecimal(field) {
    if (!allow(field, 10, "d")) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 14);
    inDecimal(decimal);
    field.value = num;
}

//changing from pentadecimal
function inPentadecimal(field) {
    if (!allow(field, 10, "e")) {
        return;
    }
    var num = field.value;
    var decimal = document.getElementById("decimal");
    decimal.value = parseInt(field.value, 15);
    inDecimal(decimal);
    field.value = num;
}













//to check if the typed value available in the field
//value: the typed value
//number: the numberical range for the field, base of the field
//alphabet: the alphabetic range (in the page you just see Capitals, but user can input smalls too, you just cant see it)
//needed ASCII codes: A=65 , B=66, C=67 , D=68 , E=69 , F=70
//a=97 , b=98 , c=99 , d=100 , e=101, f=102
function allow(field, number, alphabet) {
    //if there was no value or user removed all number, all textfields must show nothing
    if (field.value == "") {
        var inputs = document.getElementsByTagName("input");
        for (i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
        return false;
    }

    //if the first letter was minus symbol
    if (field.value.length == 1 && field.value.charAt(0) == "-") {
        return true;
    }

    //for the numbers if it was in range
    for (i = 0; i < number; i++) {
        if (field.value.toString().charAt(field.value.length - 1) == i) {
            return true;
        }
    }

    //if the field needed to contain alphabet
    if (alphabet) {
        //for small leters
        for (i = 97; i <= alphabet.charCodeAt(0); i++) {
            if (field.value.charCodeAt(field.value.length - 1) == i) {
                return true;
            }
        }
        //for capital leters
        for (i = 65; i <= alphabet.toUpperCase().charCodeAt(0); i++) {
            if (field.value.charCodeAt(field.value.length - 1) == i) {
                return true;
            }
        }
    }
    alert("Cant input (" + field.value.charAt(field.value.length - 1) + ") to " + field.id.substring(0, 1).toUpperCase() + field.id.substring(1));
    field.value = (field.value).substring(0, field.value.length - 1);
    return false;
}




//changing all inputs to TEXT instead of number
//getting all inputs in the page
var inputs = document.getElementById("calculator").getElementsByTagName("input");

Array.prototype.slice.call(inputs).forEach(input => {
    input.setAttribute('type', 'text');
});

//removing note part
document.getElementById("note").remove();