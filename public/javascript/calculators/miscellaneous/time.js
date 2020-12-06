//birthdate inputs
var time0 = document.getElementById("time0");
var hour0 = document.getElementById("hour0");
var minute0 = document.getElementById("minute0");

//current date inputs
var time1 = document.getElementById("time1");
var hour1 = document.getElementById("hour1");
var minute1 = document.getElementById("minute1");

// result answers
var resultHour = document.getElementById("resultHour");
var resultMinute = document.getElementById("resultMinute");


//get now function for start
function getNow0(){
    var now = new Date();

    //getting time
    hour0.value = now.getHours();
    minute0.value = now.getMinutes();

    //checking if the user wanter in 12 hour format, so the number 
    if (time0.selectedIndex == 0 || time0.selectedIndex == 1){
        if(hour0.value > 12){
            hour0.value -= 12;
            time0.selectedIndex = 1;
        }
        else{
            time0.selectedIndex = 0;
        }
    }

    getTime();
}

//get now function for End
function getNow1(){
    var now = new Date();

    //getting time
    hour1.value = now.getHours();
    minute1.value = now.getMinutes();

    //checking if the user wanter in 12 hour format, so the number 
    if (time1.selectedIndex == 0 || time1.selectedIndex == 1){
        if(hour1.value > 12){
            hour1.value -= 12;
            time1.selectedIndex = 1;
        }
        else{
            time1.selectedIndex = 0;
        }
    }

    getTime();
}


//clculation works
function getTime(){

    //if the minute or hour in any section was wrong typed, result is not shown
    if(minuteCheck(minute0) || minuteCheck(minute1) || hourCheck(hour0, time0) || hourCheck(hour1, time1)){
        resultHour.value = ""
        resultMinute.value = ""
        return;
    }

    //the program always work with 24 hours format
    var newStartHour = to24format(hour0.value, time0);
    var newEndHour = to24format(hour1.value, time1);


    //making the inputs as time format
    var start = new Date(0,0,0 , newStartHour, minute0.value);
    var end = new Date(0,0,0 , newEndHour, minute1.value);

    //making the difference of the times as a new time
    var difference = new Date(end - start)

    resultHour.value = difference.getUTCHours();
    resultMinute.value = difference.getUTCMinutes();
}





//to check minute rules
//if the value was good with minute formats, it return FALSE
function minuteCheck(field){
    if(field.value == ""){
        field.classList.remove("error");
        return false;
    }
    else if(field.value < 0){
        field.classList.add("error");
        field.value = 0;
        alert("Minute must more than 0");
        return true;
    }
    else if(field.value > 59){
        field.classList.add("error");
        field.value = 59;
        alert("Minute must be less that 59");
        return true;
    }
    else{
        field.classList.remove("error");
        field.value = Math.floor(field.value);
        return false;
    }
}

//to check hour rules
//if the value was good with minute formats, it return FALSE
function hourCheck(field, dayTime){
    if(field.value == ""){
        field.classList.remove("error");
        return false;
    }
    else if(field.value < 0){
        field.classList.add("error");
        field.value = 0;
        alert("hour must more than 0");
        return true;
    }
    else if(dayTime.selectedIndex == 0 || dayTime.selectedIndex == 1){
        if(field.value > 12){
            field.classList.add("error");
            field.value = 12;
            alert("Hour must be less than or equal to 12");
            return true;
        }
        else{
            field.classList.remove("error");
            field.value = Math.floor(field.value);
            return false;
        }
    }
    else if(dayTime.selectedIndex == 2){
        if(field.value > 24){
            field.classList.add("error");
            field.value = 24;
            alert("Hour must be less than 24");
            return true;
        }
        else{
            field.classList.remove("error");
            field.value = Math.floor(field.value);
            return false;
        }
    }
}

//to make hours as 24 hours format
function to24format(hour, dayTime){
    if(dayTime.selectedIndex == 1){
        hour = Number(hour) + 12
    }
    return hour;
}