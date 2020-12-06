//to get perimeter of circle
function circle(field){
    var answer = document.getElementById("circleAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }
    answer.value = field.value* 2 * Math.PI;
}



//to get perimeter of square 
function square(field){
    var answer = document.getElementById("squareAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }

    answer.value = field.value * 4;
}



//to get perimeter of rectangle
function rectangle(){
    var width = document.getElementById("rectangleInput");
    var height = document.getElementById("rectangleInput2");
    var answer = document.getElementById("rectangleAnswer");

    if(low(width) || low(height)){
        answer.value = "";
        return;
    }
    answer.value = 2 * ( Number(height.value) + Number(width.value) );
}



//to get perimeter of triangle
function triangle(){
    var height = document.getElementById("triangleInput");
    var base = document.getElementById("triangleInput2");
    var answer = document.getElementById("triangleAnswer");

    if(low(base) || low(height)){
        answer.value = "";
        return;
    }
    answer.value = Number(base.value) + Math.sqrt( Math.pow(Number(base.value),2) + 4 * Math.pow(Number(height.value), 2) );
}



//to get perimeter of parallelogram
function Parallelogram(){
    var side1 = document.getElementById("parallelogramInput");
    var side2 = document.getElementById("parallelogramInput2");
    var answer = document.getElementById("parallelogramAnswer");

    if(low(side1) || low(side2)){
        answer.value = "";
        return;
    }
    answer.value = 2 * ( Number(side1.value) + Number(side2.value) );
}



//to get perimeter of rhombus
function rhombus(field){
    var answer = document.getElementById("rhombusAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }
    answer.value = 4 * field.value;
}



//to get perimeter of pentagon
function pentagon(field){
    var answer = document.getElementById("pentagonAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }
    answer.value = field.value * 5;
}



//to get perimeter of hexagon
function hexagon(field){
    var answer = document.getElementById("hexagonAnswer");

    if(low(field)){
        answer.value = "";
        return;
    }
    answer.value = field.value * 6;
}



//to get perimeter of ellipse
function ellipse(){
    var side1 = document.getElementById("ellipseInput");
    var side2 = document.getElementById("ellipseInput2");
    var answer = document.getElementById("ellipseAnswer");

    if(low(side1) || low(side2)){
        answer.value = "";
        return;
    }
    answer.value = Math.PI * ( 3*(Number(side1.value) + Number(side2.value)) - Math.sqrt( (3*Number(side1.value) + Number(side2.value)) * (Number(side1.value) + 3*Number(side2.value)) ) );
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