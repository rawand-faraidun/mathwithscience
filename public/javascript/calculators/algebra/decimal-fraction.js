//changing from decimal to others
function inDecimal(field){
    document.getElementById("answerDecimal").value = decimalToFraction(field.value);
}


//decimal to fraction
function decimalToFraction(num){

    //if the number was not containing fraction, then we return it on 1
    if (!num.toString().includes('.')){
        return num + " / 1";
    }

    //making the fraction out of the number
    var topBottom = toFraction(num);
    
    var fraction = topBottom[0] + " / " + topBottom[1];

    //checking if the numver was negative, if so, add a - before it
    if(num < 0){
        var fraction = "-" + topBottom[0] + " / " + topBottom[1];
    }

    return fraction;
}


//making the number to fraction
function toFraction(num) {

    //making the number posetive
    num= Math.abs(num)

    //a standard fraction to be used
    var tolerance = 0.0001;
    var top = 1, bottom = 1;

    function iterate() {
        var R = top/bottom;
        if (Math.abs((R-num)/num) < tolerance) return;

        if (R < num) top++;
        else bottom++;
        iterate();
    }

    iterate();
    return [top, bottom];
}









//changing from fraction
function inFraction(){
    var top = document.getElementById("inputFraction1")
    var bottom = document.getElementById("inputFraction2")
    var simplified = document.getElementById("answerFraction1")
    var decimal = document.getElementById("answerFraction2")

    if(bottom.value == "" || top.value == ""){
        simplified.value = "";
        decimal.value = "";
        return;
    }
    if(bottom.value == 0){
        simplified.value = "infinity";
        decimal.value = "";
        return;
    }

    //getting simplified version of the fraction
    var simple = simplifier(top.value, bottom.value)
    simplified.value = simple[0] + " / " + simple[1]

    //making the top and bottom as a fraction
    var frac = top.value+"/"+bottom.value;
    decimal.value = eval(frac);
}


//greatest common division
function gcd(num1, num2) {
	return (num2) ? gcd(num2, num1 % num2) : num1;
}


//fraction simpliier
function simplifier(top, bottom){
    var GCD = gcd(top, bottom);
    return [top/GCD, bottom/GCD]; 
}