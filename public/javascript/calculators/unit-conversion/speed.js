//changing from kilometer/hour
function inKilometerHour(field){
    document.getElementById("metersecond").value = abbreviate(field.value / 3.6, document.getElementById("metersecond"));
    document.getElementById("milehour").value = abbreviate(field.value / 1.60934, document.getElementById("milehour"));
    document.getElementById("footsecond").value = abbreviate(field.value / 1.09728, document.getElementById("footsecond"));
    document.getElementById("lightspeed").value = abbreviate(field.value / 1079252848.8, document.getElementById("lightspeed"));
    document.getElementById("knot").value = abbreviate(field.value / 1.852, document.getElementById("knot"));
}

//changing from meter/second
function inMeterSecond(field){
    document.getElementById("kilometerhour").value = abbreviate(field.value * 3.6, document.getElementById("kilometerhour"));
    document.getElementById("milehour").value = abbreviate(field.value * 2.23694, document.getElementById("milehour"));
    document.getElementById("footsecond").value = abbreviate(field.value * 3.28084, document.getElementById("footsecond"));
    document.getElementById("lightspeed").value = abbreviate(field.value / 299792458, document.getElementById("lightspeed"));
    document.getElementById("knot").value = abbreviate(field.value * 1.94384, document.getElementById("knot"));
}

//changing from mile/hour
function inMileHour(field){
    document.getElementById("kilometerhour").value = abbreviate(field.value * 1.60934, document.getElementById("kilometerhour"));
    document.getElementById("metersecond").value = abbreviate(field.value / 2.23694, document.getElementById("metersecond"));
    document.getElementById("footsecond").value = abbreviate(field.value * 1.46667, document.getElementById("footsecond"));
    document.getElementById("lightspeed").value = abbreviate(field.value / 670616629.38, document.getElementById("lightspeed"));
    document.getElementById("knot").value = abbreviate(field.value / 1.15078, document.getElementById("knot"));
}

//changing from foot/second
function inFootSecond(field){
    document.getElementById("kilometerhour").value = abbreviate(field.value * 1.09728, document.getElementById("kilometerhour"));
    document.getElementById("metersecond").value = abbreviate(field.value / 3.28084, document.getElementById("metersecond"));
    document.getElementById("milehour").value = abbreviate(field.value / 1.46667, document.getElementById("milehour"));
    document.getElementById("lightspeed").value = abbreviate(field.value / 983571056.43, document.getElementById("lightspeed"));
    document.getElementById("knot").value = abbreviate(field.value / 1.688, document.getElementById("knot"));
}

//changing from foot/second
function inLightspeed(field){
    document.getElementById("kilometerhour").value = abbreviate(field.value * 1079252848.8, document.getElementById("kilometerhour"));
    document.getElementById("metersecond").value = abbreviate(field.value * 299792458, document.getElementById("metersecond"));
    document.getElementById("milehour").value = abbreviate(field.value * 670616629.38, document.getElementById("milehour"));
    document.getElementById("footsecond").value = abbreviate(field.value * 983571056.43, document.getElementById("footsecond"));
    document.getElementById("knot").value = abbreviate(field.value * 582749918.3585, document.getElementById("knot"));
}

//changing from foot/second
function inKnot(field){
    document.getElementById("kilometerhour").value = abbreviate(field.value * 1.852, document.getElementById("kilometerhour"));
    document.getElementById("metersecond").value = abbreviate(field.value / 1.94384, document.getElementById("metersecond"));
    document.getElementById("milehour").value = abbreviate(field.value * 1.15078, document.getElementById("milehour"));
    document.getElementById("footsecond").value = abbreviate(field.value * 1.688, document.getElementById("footsecond"));
    document.getElementById("lightspeed").value = abbreviate(field.value / 582749918.3585, document.getElementById("lightspeed"));
}
