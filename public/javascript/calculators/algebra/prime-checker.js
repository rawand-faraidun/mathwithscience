function ifPrime(field){

    if(isPrime(field.value)){
        document.getElementById("isPrime").style.color = "#00CB7F";
        document.getElementById("isPrime").innerHTML = field.value + " is prime";
    }
    else{
        document.getElementById("isPrime").style.color = "#E10000";
        document.getElementById("isPrime").innerHTML = field.value + " is not prime";
    }

    document.getElementById("nextPrime").value = nextPrime(field.value);
}


//check if the number is prime or not
function isPrime(num) {
    // negatives
    if (num <= 1) {
        return false;
    }
    // even numbers
    if (num % 2 == 0 && num > 2) {
        return false;
    }
    // store the square to loop faster
    // start from 3, stop at the square
    for(let i = 3, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

//finding the next prime
function nextPrime(num){
    for (var i = parseInt(num)+1 ; true; i++){
        if (isPrime(i) == true){
            break;
        }
    }
    return i;
}