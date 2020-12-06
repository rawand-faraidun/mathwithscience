/*****************
**number formats**
*****************/


//to check if the number bellow ZERO
function low(number) {
    if (number.value < 0) {
        number.classList.add("error");
        return true;
    }
    else {
        number.classList.remove("error");
        return false;
    }
}



//to to abbreviate numbers
//number: for the value
//field for the text field
function abbreviate(number, field) {
    //to remove any older message
    
    removeMessage(field);

    //the field shows nothing if the number was 0
    if (number == 0) {
        field.value = "";
        return;
    }
    //for getting a clone of the number
    var clone = number;
    //to get lenght of the number
    var size = number.toString().length;

    //to identify if the number need message box or not, if any abbreviate happened, this works
    var check = false;

    //dot is the length from stary to the dot
    var dot = 0;
    //for the numbers that have DOT . in them
    if (number.toString().includes('.')) {
        dot = number.toString().charAt(number.toString().indexOf('.'));
        size = number.toString().substring(0, dot).length;
    }

    //to abbretiabe if the number was longer than 6 characters
    if (size > 6) {
        number = number.toExponential();
        check = true;
    }

    //if the number was long after dot .
    if (number.toString().includes('.') && number.toString().substring(dot, number.length).length > 5) {
        number = clone.toExponential(2);
        check = true;
    }

    if (number.toString().includes('e')) {
        check = true;
    }

    //if the number after e was 0, then it must be just fixed, not expontialed
    if (number.toString().includes('e') && number.toString().charAt(number.toString().indexOf('e') + 2) == 0) {
        return trim(clone.toFixed(3));
    }

    //if the power was 1
    if (number.toString().includes('e') && number.toString().charAt(number.toString().length - 1) == 1) {
        if (number.toString().indexOf(number.toString().indexOf('e') + 2) != (number.length - 1)) {
            return trim(clone.toFixed(3));
        }
    }

    //if the power was 2
    if (number.toString().includes('e') && number.toString().charAt(number.toString().length - 1) == 2) {
        if (number.toString().indexOf(number.toString().indexOf('e') + 2) != (number.length - 1)) {
            return trim(clone.toFixed(4));
        }
    }

    //if the power was 3
    if (number.toString().includes('e') && number.toString().charAt(number.toString().length - 1) == 3) {
        if (number.toString().indexOf(number.toString().indexOf('e') + 2) != (number.length - 1)) {
            return trim(clone.toFixed(5));
        }
    }

    //check if the number was abreviated, then show message box
    if (check == true) {

        console.log(field);

        //making the message box
        var messageBox = document.createElement('div');
        messageBox.classList.add('messageBox');
        //modifing what is inside
        messageBox.innerHTML = '<h6>' + scientificToDecimal(clone) + '</h6>';
        //setting onclick attribute
        messageBox.setAttribute('onclick', 'copy(this)');

        //putting the messagebox in the calc
        field.parentNode.appendChild(messageBox);

        //this one must be document selected, not used the paramiter
        field.value = number;
    }

    //check if the number has message box but it was not abbreviated, then remove message box
    if (check == false && field.nextElementSibling != null) {
        removeMessage(field);
    }

    return number;
}



//convertiong scientific number to normal
//if the clone number appreviated (sometimes JS does it himself), we have to normalize it
function scientificToDecimal(number) {
    //checking if the number contain e letter, e letter it a sign of appreviating
    /*
        ex:    198.3496e-80
        real:  198.3496
        power: -80
    */
    if (number.toString().includes('e')) {
        //getting the real number
        var real = number.toString().substring(0, number.toString().indexOf('e'));
        //getting the power of the number
        var power = number.toString().substring(number.toString().indexOf('e') + 2, number.length);

        var long; //for concationating last result


        //if the power was minus
        if (number.toString().charAt(number.toString().indexOf('e') + 1) == '-') {
            //zeros is count of zeroes that we have, we get it by the count of power
            var zero = "";
            for (i = 0; i < power; i++) {
                zero += "0";
            }
            //making a dot after the first zero
            var zeros = zero.substring(0, 1) + "." + zero.substring(1);

            //if the nuber it self (without zeroes) has point . , then we remove this point
            if (real.includes('.')) {
                real = removeLetter(real, 1);
            }
            long = zeros + Math.round(real);

            //if the number has pointless zeros we should remove it
            long = trim(long);
        }

        //if the power was plus
        if (number.toString().charAt(number.toString().indexOf('e') + 1) == '+') {
            long = real * Math.pow(10, power);
        }
        number = long;
    }
    return number;
}

//function for removing letters in a range
function removeLetter(word, index) {
    part1 = word.substring(0, index);
    part2 = word.substring(index + 1, word.length);
    return part1 + part2;
}

//for removieng pointless zeros after the number
function trim(number) {
    for (i = number.length; i > 0; i--) {
        if (number.charAt(i) != 0) {
            break;
        }
        number = number.substring(0, i);
    }
    return number;
}




//for removing message of the changing one, or if doesnt needed
function removeMessage(field) {
    if (field.nextElementSibling != null) {
        field.nextElementSibling.remove();
    }
}

//for coping long value below the fields
function copy(text) {
    var from = text;
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    displayCopied();
}

//coping dialogbox delay
function displayCopied() {
    var copied = document.getElementById("copied");
    setTimeout(function () {
        copied.classList.add("block");
    }, 0);
    setTimeout(function () {
        copied.classList.add("show");
    }, 100);
    setTimeout(function () {
        copied.classList.remove("show");
    }, 1000);
    setTimeout(function () {
        copied.classList.remove("block");
    }, 1210);
}