//changing from digree
function inDigree(field){
    document.getElementById("radiant").value = abbreviate(field.value / 57.2958, document.getElementById("radiant"));
    document.getElementById("turn").value = abbreviate(field.value / 360, document.getElementById("turn"));
    document.getElementById("sextant").value = abbreviate(field.value / 60, document.getElementById("sextant"));
    document.getElementById("quadrant").value = abbreviate(field.value / 90, document.getElementById("quadrant"));
}

//changing from radiant
function inRadiant(field){
    document.getElementById("digree").value = abbreviate(field.value * 57.2958, document.getElementById("digree"));
    document.getElementById("turn").value = abbreviate(field.value / 6.28338046, document.getElementById("turn"));
    document.getElementById("sextant").value = abbreviate(field.value / 1.04723008, document.getElementById("sextant"));
    document.getElementById("quadrant").value = abbreviate(field.value / 1.57, document.getElementById("quadrant"));
}

//changing from turn
function inTurn(field){
    document.getElementById("digree").value = abbreviate(field.value * 360, document.getElementById("digree"));
    document.getElementById("radiant").value = abbreviate(field.value * 6.28338046, document.getElementById("radiant"));
    document.getElementById("sextant").value = abbreviate(field.value * 6, document.getElementById("sextant"));
    document.getElementById("quadrant").value = abbreviate(field.value * 4, document.getElementById("quadrant"));
}

//changing from sextant
function inSextant(field){
    document.getElementById("digree").value = abbreviate(field.value * 60, document.getElementById("digree"));
    document.getElementById("radiant").value = abbreviate(field.value * 1.04719755, document.getElementById("radiant"));
    document.getElementById("turn").value = abbreviate(field.value / 6, document.getElementById("turn"));
    document.getElementById("quadrant").value = abbreviate(field.value / 1.499925, document.getElementById("quadrant"));
}

//changing from quadrant
function inQuadrant(field){
    document.getElementById("digree").value = abbreviate(field.value * 90, document.getElementById("digree"));
    document.getElementById("radiant").value = abbreviate(field.value * 1.57, document.getElementById("radiant"));
    document.getElementById("turn").value = abbreviate(field.value / 4, document.getElementById("turn"));
    document.getElementById("sextant").value = abbreviate(field.value * 1.499925, document.getElementById("sextant"));
}
