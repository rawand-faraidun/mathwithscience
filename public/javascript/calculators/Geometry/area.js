//to get area of circle
function circle(field){
    var answer = document.getElementById("circleAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }
    answer.value = field.value**2 * Math.PI;
}



//to get area of square and rectangle
function square(field){
    var answer = document.getElementById("squareAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }
    answer.value = field.value ** 2;
}

//to get area of square and rectangle
function rectangle(){
    var width = document.getElementById("rectangleInput");
    var height = document.getElementById("rectangleInput2");
    var answer = document.getElementById("rectangleAnswer");

    if(low(width) || low(height)){
        answer.value = "";
        return;
    }
    answer.value = width.value * height.value;
}



//to get area of triangle
function triangle(){
    var height = document.getElementById("triangleInput");
    var base = document.getElementById("triangleInput2");
    var answer = document.getElementById("triangleAnswer");

    if(low(base) || low(height)){
        answer.value = "";
        return;
    }
    answer.value = (1/2 * base.value) * height.value;
}



//to get area of parallelogram
function Parallelogram(){
    var height = document.getElementById("parallelogramInput");
    var base = document.getElementById("parallelogramInput2");
    var answer = document.getElementById("parallelogramAnswer");

    if(low(base) || low(height)){
        answer.value = "";
        return;
    }
    answer.value = base.value * height.value;
}



//to get area of rhombus
function rhombus(){
    var diagonal1 = document.getElementById("rhombusInput");
    var diagonal2 = document.getElementById("rhombusInput2");
    var answer = document.getElementById("rhombusAnswer");

    if(low(diagonal1) || low(diagonal2)){
        answer.value = "";
        return;
    }
    answer.value = (diagonal1.value * diagonal2.value) / 2;
}



//to get area of pentagon
function pentagon(field){
    var answer = document.getElementById("pentagonAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }
    answer.value = ( Math.sqrt(5 * (5 + 2 * (Math.sqrt(5) ) ) ) * Math.pow(field.value, 2) ) / 4;
}



//to get area of hexagon
function hexagon(field){
    var answer = document.getElementById("hexagonAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }
    answer.value = 3 * Math.sqrt(3) / 2 * Math.pow(field.value,2);
}



//to get area of ellipse
function ellipse(){
    var radius1 = document.getElementById("ellipseInput");
    var radius2 = document.getElementById("ellipseInput2");
    var answer = document.getElementById("ellipseAnswer");

    if(low(radius1) || low(radius2)){
        answer.value = "";
        return;
    }
    answer.value = Math.PI * radius1.value * radius2.value;
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