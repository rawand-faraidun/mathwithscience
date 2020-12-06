//changeing from gram
function inGram(field){
    document.getElementById("milligram").value = abbreviate(field.value * 1000, document.getElementById("milligram"));
    document.getElementById("kilogram").value = abbreviate(field.value / 1000, document.getElementById("kilogram"));
    document.getElementById("centigram").value = abbreviate(field.value * 100, document.getElementById("centigram"));
    document.getElementById("decigram").value = abbreviate(field.value * 10, document.getElementById("decigram"));
    document.getElementById("hectogram").value = abbreviate(field.value / 100, document.getElementById("hectogram"));
    document.getElementById("metricton").value = abbreviate(field.value / 1000000, document.getElementById("metricton"));
    document.getElementById("pound").value = abbreviate(field.value / 445, document.getElementById("pound"));
    document.getElementById("ounce").value = abbreviate(field.value / 28.35, document.getElementById("ounce"));
}

//changing from milligram
function inMilligram(field){
    document.getElementById("gram").value = abbreviate(field.value / 1000, document.getElementById("gram"));
    document.getElementById("kilogram").value = abbreviate(field.value / 1000000, document.getElementById("kilogram"));
    document.getElementById("centigram").value = abbreviate(field.value / 10, document.getElementById("centigram"));
    document.getElementById("decigram").value = abbreviate(field.value / 100, document.getElementById("decigram"));
    document.getElementById("hectogram").value = abbreviate(field.value / 100000, document.getElementById("hectogram"));
    document.getElementById("metricton").value = abbreviate(field.value / 1000000000, document.getElementById("metricton"));
    document.getElementById("pound").value = abbreviate(field.value / 445000, document.getElementById("pound"));
    document.getElementById("ounce").value = abbreviate(field.value / 28350, document.getElementById("ounce"));
}

//changing from kilogram
function inKilogram(field){
    document.getElementById("gram").value = abbreviate(field.value * 1000, document.getElementById("gram"));
    document.getElementById("milligram").value = abbreviate(field.value * 1000000, document.getElementById("milligram"));
    document.getElementById("centigram").value = abbreviate(field.value * 100000, document.getElementById("centigram"));
    document.getElementById("decigram").value = abbreviate(field.value * 10000, document.getElementById("decigram"));
    document.getElementById("hectogram").value = abbreviate(field.value * 10, document.getElementById("hectogram"));
    document.getElementById("metricton").value = abbreviate(field.value / 1000, document.getElementById("metricton"));
    document.getElementById("pound").value = abbreviate(field.value * 2.20462, document.getElementById("pound"));
    document.getElementById("ounce").value = abbreviate(field.value * 35.274, document.getElementById("ounce"));
}

//changing from centigram
function inCentigram(field){
    document.getElementById("gram").value = abbreviate(field.value / 100, document.getElementById("gram"));
    document.getElementById("milligram").value = abbreviate(field.value * 10, document.getElementById("milligram"));
    document.getElementById("kilogram").value = abbreviate(field.value / 100000, document.getElementById("kilogram"));
    document.getElementById("decigram").value = abbreviate(field.value / 10, document.getElementById("decigram"));
    document.getElementById("hectogram").value = abbreviate(field.value /10000, document.getElementById("hectogram"));
    document.getElementById("metricton").value = abbreviate(field.value / 100000000, document.getElementById("metricton"));
    document.getElementById("pound").value = abbreviate(field.value / 45359, document.getElementById("pound"));
    document.getElementById("ounce").value = abbreviate(field.value / 2835, document.getElementById("ounce"));
}

//changing from decigram
function inDecigram(field){
    document.getElementById("gram").value = abbreviate(field.value / 10, document.getElementById("gram"));
    document.getElementById("milligram").value = abbreviate(field.value * 100, document.getElementById("milligram"));
    document.getElementById("kilogram").value = abbreviate(field.value / 10000, document.getElementById("kilogram"));
    document.getElementById("centigram").value = abbreviate(field.value * 10, document.getElementById("centigram"));
    document.getElementById("hectogram").value = abbreviate(field.value /100, document.getElementById("hectogram"));
    document.getElementById("metricton").value = abbreviate(field.value / 10000000, document.getElementById("metricton"));
    document.getElementById("pound").value = abbreviate(field.value / 4536, document.getElementById("pound"));
    document.getElementById("ounce").value = abbreviate(field.value / 2835, document.getElementById("ounce"));
}

//changing from hectogram
function inHectogram(field){
    document.getElementById("gram").value = abbreviate(field.value * 100, document.getElementById("gram"));
    document.getElementById("milligram").value = abbreviate(field.value * 100000, document.getElementById("milligram"));
    document.getElementById("kilogram").value = abbreviate(field.value / 10, document.getElementById("kilogram"));
    document.getElementById("centigram").value = abbreviate(field.value * 10000, document.getElementById("centigram"));
    document.getElementById("decigram").value = abbreviate(field.value /100, document.getElementById("decigram"));
    document.getElementById("metricton").value = abbreviate(field.value / 10000, document.getElementById("metricton"));
    document.getElementById("pound").value = abbreviate(field.value / 4.536, document.getElementById("pound"));
    document.getElementById("ounce").value = abbreviate(field.value * 3.5274, document.getElementById("ounce"));
}

//changing from hectogram
function inHectogram(field){
    document.getElementById("gram").value = abbreviate(field.value * 100, document.getElementById("gram"));
    document.getElementById("milligram").value = abbreviate(field.value * 100000, document.getElementById("milligram"));
    document.getElementById("kilogram").value = abbreviate(field.value / 10, document.getElementById("kilogram"));
    document.getElementById("centigram").value = abbreviate(field.value * 10000, document.getElementById("centigram"));
    document.getElementById("decigram").value = abbreviate(field.value /100, document.getElementById("decigram"));
    document.getElementById("metricton").value = abbreviate(field.value / 10000, document.getElementById("metricton"));
    document.getElementById("pound").value = abbreviate(field.value / 4.536, document.getElementById("pound"));
    document.getElementById("ounce").value = abbreviate(field.value * 3.5274, document.getElementById("ounce"));
}

//changing from metricton
function inMetricTon(field){
    document.getElementById("gram").value = abbreviate(field.value * 1000000, document.getElementById("gram"));
    document.getElementById("milligram").value = abbreviate(field.value * 1000000000, document.getElementById("milligram"));
    document.getElementById("kilogram").value = abbreviate(field.value * 1000, document.getElementById("kilogram"));
    document.getElementById("centigram").value = abbreviate(field.value * 100000000, document.getElementById("centigram"));
    document.getElementById("decigram").value = abbreviate(field.value * 10000000, document.getElementById("decigram"));
    document.getElementById("hectogram").value = abbreviate(field.value * 10000, document.getElementById("hectogram"));
    document.getElementById("pound").value = abbreviate(field.value * 2204.62, document.getElementById("pound"));
    document.getElementById("ounce").value = abbreviate(field.value * 35273.96, document.getElementById("ounce"));
}

//changing from pound
function inPound(field){
    document.getElementById("gram").value = abbreviate(field.value * 453.592, document.getElementById("gram"));
    document.getElementById("milligram").value = abbreviate(field.value * 453592, document.getElementById("milligram"));
    document.getElementById("kilogram").value = abbreviate(field.value / 2.205, document.getElementById("kilogram"));
    document.getElementById("centigram").value = abbreviate(field.value * 45359.2, document.getElementById("centigram"));
    document.getElementById("decigram").value = abbreviate(field.value * 4535.92, document.getElementById("decigram"));
    document.getElementById("hectogram").value = abbreviate(field.value / 3.527, document.getElementById("hectogram"));
    document.getElementById("metricton").value = abbreviate(field.value / 35274, document.getElementById("metricton"));
    document.getElementById("ounce").value = abbreviate(field.value * 16, document.getElementById("ounce"));
}

//changing from Ounce
function inOunce(field){
    document.getElementById("gram").value = abbreviate(field.value * 28.3495, document.getElementById("gram"));
    document.getElementById("milligram").value = abbreviate(field.value * 28349.5, document.getElementById("milligram"));
    document.getElementById("kilogram").value = abbreviate(field.value / 35.274, document.getElementById("kilogram"));
    document.getElementById("centigram").value = abbreviate(field.value * 2834.95, document.getElementById("centigram"));
    document.getElementById("decigram").value = abbreviate(field.value * 283.495, document.getElementById("decigram"));
    document.getElementById("hectogram").value = abbreviate(field.value / 3.527, document.getElementById("hectogram"));
    document.getElementById("metricton").value = abbreviate(field.value / 35274, document.getElementById("metricton"));
    document.getElementById("pound").value = abbreviate(field.value / 16, document.getElementById("pound"));
}