//to get volume of cube
function cube(field){
    var answer = document.getElementById("cubeAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }
    answer.value = field.value**3;
}


//to get volume of sphere
function sphere(field){
    var answer = document.getElementById("sphereAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }
    answer.value = 4 / 3 * Math.PI * Math.pow(field.value, 3);
}



//to get volume of cylinder
function cylinder(){
    var radius = document.getElementById("cylinderInput");
    var height = document.getElementById("cylinderInput2");
    var answer = document.getElementById("cylinderAnswer");

    if(low(radius) || low(height)){
        answer.value = "";
        return;
    }

    answer.value = Math.PI * height.value * Math.pow(radius.value, 2);
}



//to get volume of cone
function cone(){
    var radius = document.getElementById("coneInput");
    var height = document.getElementById("coneInput2");
    var answer = document.getElementById("coneAnswer");

    if(low(radius) || low(height)){
        answer.value = "";
        return;
    }
    answer.value = Math.PI * ( height.value / 3 ) * Math.pow(radius.value, 2);
}



//to get volume of square Pyriamid
function squarepyramid(){
    var edge = document.getElementById("squarepyramidInput");
    var height = document.getElementById("squarepyramidInput2");
    var answer = document.getElementById("squarepyramidAnswer");

    if(low(edge) || low(height)){
        answer.value = "";
        return;
    }
    answer.value = Math.pow(edge.value, 2) * height.value / 3;
}



//to get volume of spherical Cup
function sphericalcup(){
    var radius = document.getElementById("sphericalcupInput");
    var height = document.getElementById("sphericalcupInput2");
    var answer = document.getElementById("sphericalcupAnswer");

    if(low(radius) || low(height)){
        answer.value = "";
        return;
    }
    answer.value = ( Math.PI / 3) * Math.pow(height.value, 2) * (3 * radius.value - height.value);
}
















//to check if the number bellow ZERO
function low(number) {
    if (number.value < 0){
        number.classList.add("error");
        return true;
    }
    else{
        number.classList.remove("error");
        return false;
    }
}