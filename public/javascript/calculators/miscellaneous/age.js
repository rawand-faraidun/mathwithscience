//birthdate inputs
var day0 = document.getElementById("day0");
var month0 = document.getElementById("month0");
var year0 = document.getElementById("year0");

//current date inputs
var day1 = document.getElementById("day1");
var month1 = document.getElementById("month1");
var year1 = document.getElementById("year1");

// result answers
var resultYear = document.getElementById("resultYear");
var resultMonth = document.getElementById("resultMonth");
var resultDay = document.getElementById("resultDay");
var resultHour = document.getElementById("resultHour");
var resultMinute = document.getElementById("resultMinute");
var resultSecond = document.getElementById("resultSecond");

//for today button, fills current date inputs with devices curent date
function getToday1(){
    var today = new Date();

    day1.value = today.getDate();
    month1.selectedIndex = today.getMonth();
    year1.value = today.getFullYear();
}


//age calculation
function getAge(field){
    if(field){
        if(low(field)){
            return;
        }
    }

    //getting selected birth month
    var birthMonth = month0.options[month0.selectedIndex].value;
    //getting selected current month
    var currentMonth = month1.options[month1.selectedIndex].value;
    
    //checking for days in the month limit for both
    chekingDaysInMonth(day0, birthMonth, year0); //birthdate
    chekingDaysInMonth(day1, currentMonth, year1); //current date

    //making birthdate values as date formats
    var birth = new Date(year0.value, birthMonth-1, day0.value);
    //making currentdate values as date format
    var current = new Date(year1.value, currentMonth-1, day1.value);


    //if the birth part was later than current part, it shows nothing
    if(birth >= current){
        var inputs = document.getElementById("resultSection").getElementsByTagName("input");
        for(i = 0; i < inputs.length; i++){
            inputs[i].value = "";
        }
        return;
    }
    
    //getting all the age in days
    var days = Math.floor((current-birth)/86400000);

    //converting all age to years
    var ageYears = Math.floor(days/365);
    //converting all age to months
    var ageMonths = Math.floor((days%365)/31);
    //converting all age to days
    var ageDays = days - Math.floor(ageYears*365) - Math.floor(ageMonths*31);

    //calculatingbirthyear below 100 gets
    if(year0.value < 100){
        ageYears += 1900;
    }

    //for calculating month days, the code works as all monthes have same 31 days, i fix it there
    //if the days were same, age days is zero
    if (day1 == day0){
        ageDays = 0;
    }
    //if the monthes were the same, age monthes is zero
    if (currentMonth == birthMonth){
        ageMonths = 0;
    }
    //if the monthes were not the same
    else{
        //february has 2 or 3 days less
        if(currentMonth >= 2){
            //if the year was a leap year, so we cut 2 days
            if(year1%4 == 0){
                ageDays -= 3;
            }
            //if not, we cut 3 days
            else{
                ageDays -= 2;
            }
        }
        //apr, jun,sept, nov  has 1 day less
        if(currentMonth >= 4){
            ageDays--;
        }
        if(currentMonth >= 6){
            ageDays--;
        }
        if(currentMonth >= 9){
            ageDays--;
        }
        if(currentMonth >= 11){
            ageDays--;
        }
    }

    console.log(ageMonths);

    //results for dates
    resultYear.value = ageYears;
    resultMonth.value = ageMonths;
    resultDay.value = ageDays;

    //results for times
    resultHour.value = (ageDays * 24) + (ageMonths * 730) + (ageYears * 8760);
    resultMinute.value = (ageDays * 1440) + (ageMonths * 43800) + (ageYears * 525600);
    resultSecond.value = (ageDays * 86400) + (ageMonths * 2629746) + (ageYears * 31545741);
}



//to check if the number bellow ZERO
function low(field) {
    //user can remove all leter
    if(field.value == ""){
        field.classList.remove("error");
        return true;
    }
    else if (field.value <= 0){
        field.classList.add("error");
        field.value = 1;
        alert("date cant be smaller than 1");
        return true;
    }
    else{
        field.classList.remove("error");
        return false;
    }
}



//checking if the date broke the month limit
function chekingDaysInMonth(date, month, year){

    //these monthes has 31 days
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        high(date, 31);
    }
    //for febriuary
    else if(month == 2){
        if(year.value % 4 == 0){
            high(date, 29);
        }
        else{
            high(date, 28);
        }
    }
    //those monthes has 30 days
    else if(month == 4 || month == 6 || month == 9 || month == 11){
        high(date, 30);
    }
}

//for checking if the date is over days in the month
function high(field, maximum){
    if(field.value > maximum){
        field.classList.add("error");
        field.value = maximum;
        alert("date cant be bigger than " + maximum);
        return true;
    }
}