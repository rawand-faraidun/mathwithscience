//changing in second
function inSecond(field){
    document.getElementById("minute").value = time(field.value / 60, document.getElementById("minute"),  field.value, 60, "s");
    document.getElementById("hour").value = time(field.value / 3600,document.getElementById("hour"),   field.value, 3600, "s");
    document.getElementById("millisecond").value = time(field.value * 1000,document.getElementById("millisecond"));
    document.getElementById("day").value = time(field.value / 86400,document.getElementById("day"),  field.value, 86400, "s");
    document.getElementById("week").value = time(field.value / 864005,document.getElementById("week"),  field.value, 604800, "s");
    document.getElementById("month").value = time(field.value / 2631578,document.getElementById("month"),   field.value, 2592000, "s");
    document.getElementById("years").value = time(field.value / 31545741,document.getElementById("years"),   field.value, 31536000, "s");
    document.getElementById("decade").value = time(field.value / 315457413,document.getElementById("decade"),   field.value, 315360000, "s");
    document.getElementById("century").value = time(field.value / 3154574130,document.getElementById("century"),   field.value, 3153600000, "s");
}

//changing from minute
function inMinute(field){
    document.getElementById("second").value = time(field.value * 60, document.getElementById("second"),  field.value*60, 60, "min");
    document.getElementById("hour").value = time(field.value / 60,document.getElementById("hour"),   field.value, 60, "min");
    document.getElementById("millisecond").value = time(field.value * 60000,document.getElementById("millisecond"));
    document.getElementById("day").value = time(field.value / 1440,document.getElementById("day"),  field.value, 1440, "min");
    document.getElementById("week").value = time(field.value / 10080,document.getElementById("week"),  field.value, 10080, "min");
    document.getElementById("month").value = time(field.value / 43800,document.getElementById("month"),   field.value, 43800, "min");
    document.getElementById("years").value = time(field.value / 525600,document.getElementById("years"),   field.value, 525600, "min");
    document.getElementById("decade").value = time(field.value / 5256000,document.getElementById("decade"),   field.value, 5256000, "min");
    document.getElementById("century").value = time(field.value / 52560000,document.getElementById("century"),   field.value, 52560000, "min");
}

//changing from hour
function inHour(field){
    document.getElementById("second").value = time(field.value * 3600, document.getElementById("second"),  field.value*60, 60, "h");
    document.getElementById("minute").value = time(field.value * 60,document.getElementById("minute"),   field.value, 60, "h");
    document.getElementById("millisecond").value = time(field.value * 3600000,document.getElementById("millisecond"));
    document.getElementById("day").value = time(field.value / 24,document.getElementById("day"),  field.value, 24, "h");
    document.getElementById("week").value = time(field.value / 168,document.getElementById("week"),  field.value, 168, "h");
    document.getElementById("month").value = time(field.value / 730.001,document.getElementById("month"),   field.value, 730, "h");
    document.getElementById("years").value = time(field.value / 8760,document.getElementById("years"),   field.value, 8760, "h");
    document.getElementById("decade").value = time(field.value / 87600,document.getElementById("decade"),   field.value, 87600, "h");
    document.getElementById("century").value = time(field.value / 876000,document.getElementById("century"),   field.value, 876000, "h");
}

//changing from millisecond
function inMillisecond(field){
    document.getElementById("second").value = time(field.value / 1000, document.getElementById("second"),  field.value, 1000, "ms");
    document.getElementById("minute").value = time(field.value / 60000,document.getElementById("minute"),   field.value, 60000, "ms");
    document.getElementById("hour").value = time(field.value / 3600000,document.getElementById("hour"), field.value, 3600000, "ms");
    document.getElementById("day").value = time(field.value / 86400000,document.getElementById("day"),  field.value, 86400000, "ms");
    document.getElementById("week").value = time(field.value / 604800000,document.getElementById("week"),  field.value, 604800000, "ms");
    document.getElementById("month").value = time(field.value / 2631578950,document.getElementById("month"),   field.value, 2592000000, "ms");
    document.getElementById("years").value = time(field.value / 31545741300,document.getElementById("years"),   field.value, 31545741300, "ms");
    document.getElementById("decade").value = time(field.value / 315457413000,document.getElementById("decade"),   field.value, 315457413000, "ms");
    document.getElementById("century").value = time(field.value / 3154574130000,document.getElementById("century"),   field.value, 3154574130000, "ms");
}

//changing from day
function inDay(field){
    document.getElementById("second").value = time(field.value * 86400, document.getElementById("second"),  field.value*86400, 86400, "day");
    document.getElementById("minute").value = time(field.value * 1440,document.getElementById("minute"),   field.value*1440, 1440, "day");
    document.getElementById("hour").value = time(field.value * 24,document.getElementById("hour"), field.value*24, 24, "day");
    document.getElementById("millisecond").value = time(field.value * 86400000,document.getElementById("millisecond"));
    document.getElementById("week").value = time(field.value / 7,document.getElementById("week"),  field.value, 7, "day");
    document.getElementById("month").value = time(field.value / 30,document.getElementById("month"),   field.value, 30, "day");
    document.getElementById("years").value = time(field.value / 365,document.getElementById("years"),   field.value, 365, "day");
    document.getElementById("decade").value = time(field.value / 3650,document.getElementById("decade"),   field.value, 3650, "day");
    document.getElementById("century").value = time(field.value / 36500,document.getElementById("century"),   field.value, 26500, "day");
}

//changing from week
function inWeek(field){
    document.getElementById("second").value = time(field.value * 604800, document.getElementById("second"),  field.value*604800, 604800, "week");
    document.getElementById("minute").value = time(field.value * 10080,document.getElementById("minute"),   field.value*10080, 10080, "week");
    document.getElementById("hour").value = time(field.value * 168,document.getElementById("hour"), field.value*168, 168, "week");
    document.getElementById("millisecond").value = time(field.value * 86400000,document.getElementById("millisecond"));
    document.getElementById("day").value = time(field.value * 7,document.getElementById("day"),  field.value*7, 7, "week");
    document.getElementById("month").value = time(field.value / 4.34524,document.getElementById("month"),   field.value, 4.34524, "week");
    document.getElementById("years").value = time(field.value / 52.1429,document.getElementById("years"),   field.value, 52.1429, "week");
    document.getElementById("decade").value = time(field.value / 521.429,document.getElementById("decade"),   field.value, 521.429, "week");
    document.getElementById("century").value = time(field.value / 5214.29,document.getElementById("century"),   field.value, 5214.29, "week");
}

//changing from month
function inMonth(field){
    document.getElementById("second").value = time(field.value * 2629746, document.getElementById("second"),  field.value*2629746, 2629746, "mon");
    document.getElementById("minute").value = time(field.value * 43829.1,document.getElementById("minute"),   field.value*43829.1, 43829.1, "mon");
    document.getElementById("hour").value = time(field.value * 730.48,document.getElementById("hour"), field.value*730.48, 730.48, "mon");
    document.getElementById("millisecond").value = time(field.value * 2629746000,document.getElementById("millisecond"));
    document.getElementById("day").value = time(field.value * 30,document.getElementById("day"),  field.value*30, 30, "mon");
    document.getElementById("week").value = time(field.value * 4.34524,document.getElementById("week"),   field.value*4.34524, 4.34524, "mon");
    document.getElementById("years").value = time(field.value / 12,document.getElementById("years"),   field.value, 12, "mon");
    document.getElementById("decade").value = time(field.value / 120,document.getElementById("decade"),   field.value, 120, "mon");
    document.getElementById("century").value = time(field.value / 1200,document.getElementById("century"),   field.value, 1200, "mon");
}

//changing from years
function inYears(field){
    document.getElementById("second").value = time(field.value * 31545741, document.getElementById("second"),  field.value*31545741, 31545741, "yrs");
    document.getElementById("minute").value = time(field.value * 525949.2,document.getElementById("minute"),   field.value*525949.2, 525949.2, "yrs");
    document.getElementById("hour").value = time(field.value * 8765.82,document.getElementById("hour"), field.value*8765.82, 8765.82, "yrs");
    document.getElementById("millisecond").value = time(field.value * 2629746000,document.getElementById("millisecond"));
    document.getElementById("day").value = time(field.value * 365.24,document.getElementById("day"),  field.value*365, 365, "yrs");
    document.getElementById("week").value = time(field.value * 52.18,document.getElementById("week"),   field.value*52, 52, "yrs");
    document.getElementById("month").value = time(field.value * 12,document.getElementById("month"),   field.value, 12, "yrs");
    document.getElementById("decade").value = time(field.value / 10,document.getElementById("decade"),   field.value, 120, "yrs");
    document.getElementById("century").value = time(field.value / 100,document.getElementById("century"),   field.value, 1200, "yrs");
}

//changing from decade
function inDecade(field){
    document.getElementById("second").value = time(field.value * 315569520, document.getElementById("second"));
    document.getElementById("minute").value = time(field.value * 5259492,document.getElementById("minute"));
    document.getElementById("hour").value = time(field.value * 87658.2,document.getElementById("hour"));
    document.getElementById("millisecond").value = time(field.value * 315569520000,document.getElementById("millisecond"));
    document.getElementById("day").value = time(field.value * 3652.42,document.getElementById("day"));
    document.getElementById("week").value = time(field.value * 521.77,document.getElementById("week"));
    document.getElementById("month").value = time(field.value * 120,document.getElementById("month"));
    document.getElementById("years").value = time(field.value * 10,document.getElementById("years"));
    document.getElementById("century").value = time(field.value / 100,document.getElementById("century"));
}

//changing from century
function inCentury(field){
    document.getElementById("second").value = time(field.value * 3155695200, document.getElementById("second"));
    document.getElementById("minute").value = time(field.value * 52594920,document.getElementById("minute"));
    document.getElementById("hour").value = time(field.value * 876582,document.getElementById("hour"));
    document.getElementById("millisecond").value = time(field.value * 3155695200000,document.getElementById("millisecond"));
    document.getElementById("day").value = time(field.value * 36524.2,document.getElementById("day"));
    document.getElementById("week").value = time(field.value * 5217.7,document.getElementById("week"));
    document.getElementById("month").value = time(field.value * 1200,document.getElementById("month"));
    document.getElementById("years").value = time(field.value * 100,document.getElementById("years"));
    document.getElementById("decade").value = time(field.value * 10,document.getElementById("decade"));
}





//number: for the after being calculated
//field: for the text field
//upper is the upper part f the fraction
//lowwer is the ower part of the fraction
//symbol: is the symbol of field (like: s, ms, h)
function time(number, field, upper, lower, symbol) {
    //to remove any older message
    removeMessage(field);

    //field shows nthing if the number was 0
    if (number == 0){
        field.value = "";
        return;
    }

    //long is when the number got to scientific, hover show both scientific and fraction
    var long = "";

    var clone = number;
    //checking if the number was big
    if (number.toString().length > 6){
        number = scientificToDecimal(number.toExponential(2));
    }
    if (number.toString().length <= 7){
        number = clone.toString().substring(0, number.length);
    }
    else if (number.toString().length > 7){
        long = clone + " & ";
        number = clone.toExponential(2);
    }

    //if the upper and lower and symbol wont excist, just making the scientific version of the number
    if(!upper && !lower && !symbol){
        if(number.toString().includes("e")){
            field.parentNode.innerHTML += "<div class="+"messageBox"+"> <h6>"+scientificToDecimal(clone)+"</h6> </div>";
            document.getElementById(field.id).value = number;
        }
        return number;
    }

    var fraction = upper + "/" + lower + symbol;

    //making the messagebox for the number
    if(field.nextElementSibling == null){
        field.parentNode.innerHTML += "<div class="+"messageBox"+"> <h6>"+long + fraction+"</h6> </div>";
        //this one must be document selected, not used the paramiter
        document.getElementById(field.id).value = number;
    }

    //check if the number has message box but it was not abbreviated, then remove message box
    if (field.nextElementSibling != null){
        removeMessage(field);
    }

    return number;
}
