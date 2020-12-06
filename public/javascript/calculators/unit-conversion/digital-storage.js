//changeing from bitbyte
function inBitByte(field){
    document.getElementById("kilo").value = abbreviate(field.value / 1000, document.getElementById("kilo"));
    document.getElementById("mega").value = abbreviate(field.value / 1e6, document.getElementById("mega"));
    document.getElementById("giga").value = abbreviate(field.value / 1e9, document.getElementById("giga"));
    document.getElementById("tera").value = abbreviate(field.value / 1e12, document.getElementById("tera"));
    document.getElementById("peta").value = abbreviate(field.value / 1e15, document.getElementById("peta"));
    document.getElementById("exa").value = abbreviate(field.value / 1e18, document.getElementById("exa"));
    document.getElementById("zetta").value = abbreviate(field.value / 1e21, document.getElementById("zetta"));
    document.getElementById("yotta").value = abbreviate(field.value / 1e24, document.getElementById("yotta"));
}

//changeing from kilo
function inKilo(field){
    document.getElementById("bitbyte").value = abbreviate(field.value * 1e3, document.getElementById("bitbyte"));
    document.getElementById("mega").value = abbreviate(field.value / 1e3, document.getElementById("mega"));
    document.getElementById("giga").value = abbreviate(field.value / 1e6, document.getElementById("giga"));
    document.getElementById("tera").value = abbreviate(field.value / 1e9, document.getElementById("tera"));
    document.getElementById("peta").value = abbreviate(field.value / 1e12, document.getElementById("peta"));
    document.getElementById("exa").value = abbreviate(field.value / 1e15, document.getElementById("exa"));
    document.getElementById("zetta").value = abbreviate(field.value / 1e18, document.getElementById("zetta"));
    document.getElementById("yotta").value = abbreviate(field.value / 1e21, document.getElementById("yotta"));
}

//changeing from mega
function inMega(field){
    document.getElementById("bitbyte").value = abbreviate(field.value * 1e6, document.getElementById("bitbyte"));
    document.getElementById("kilo").value = abbreviate(field.value * 1e3, document.getElementById("kilo"));
    document.getElementById("giga").value = abbreviate(field.value / 1e3, document.getElementById("giga"));
    document.getElementById("tera").value = abbreviate(field.value / 1e6, document.getElementById("tera"));
    document.getElementById("peta").value = abbreviate(field.value / 1e9, document.getElementById("peta"));
    document.getElementById("exa").value = abbreviate(field.value / 1e12, document.getElementById("exa"));
    document.getElementById("zetta").value = abbreviate(field.value / 1e15, document.getElementById("zetta"));
    document.getElementById("yotta").value = abbreviate(field.value / 1e18, document.getElementById("yotta"));
}

//changeing from giga
function inGiga(field){
    document.getElementById("bitbyte").value = abbreviate(field.value * 1e9, document.getElementById("bitbyte"));
    document.getElementById("kilo").value = abbreviate(field.value * 1e6, document.getElementById("kilo"));
    document.getElementById("mega").value = abbreviate(field.value * 1e3, document.getElementById("mega"));
    document.getElementById("tera").value = abbreviate(field.value / 1e3, document.getElementById("tera"));
    document.getElementById("peta").value = abbreviate(field.value / 1e6, document.getElementById("peta"));
    document.getElementById("exa").value = abbreviate(field.value / 1e9, document.getElementById("exa"));
    document.getElementById("zetta").value = abbreviate(field.value / 1e12, document.getElementById("zetta"));
    document.getElementById("yotta").value = abbreviate(field.value / 1e15, document.getElementById("yotta"));
}

//changeing from tera
function inTera(field){
    document.getElementById("bitbyte").value = abbreviate(field.value * 1e12, document.getElementById("bitbyte"));
    document.getElementById("kilo").value = abbreviate(field.value * 1e9, document.getElementById("kilo"));
    document.getElementById("mega").value = abbreviate(field.value * 1e6, document.getElementById("mega"));
    document.getElementById("giga").value = abbreviate(field.value * 1e3, document.getElementById("giga"));
    document.getElementById("peta").value = abbreviate(field.value / 1e3, document.getElementById("peta"));
    document.getElementById("exa").value = abbreviate(field.value / 1e6, document.getElementById("exa"));
    document.getElementById("zetta").value = abbreviate(field.value / 1e9, document.getElementById("zetta"));
    document.getElementById("yotta").value = abbreviate(field.value / 1e12, document.getElementById("yotta"));
}

//changeing from peta
function inPeta(field){
    document.getElementById("bitbyte").value = abbreviate(field.value * 1e15, document.getElementById("bitbyte"));
    document.getElementById("kilo").value = abbreviate(field.value * 1e12, document.getElementById("kilo"));
    document.getElementById("mega").value = abbreviate(field.value * 1e9, document.getElementById("mega"));
    document.getElementById("giga").value = abbreviate(field.value * 1e6, document.getElementById("giga"));
    document.getElementById("tera").value = abbreviate(field.value * 1e3, document.getElementById("tera"));
    document.getElementById("exa").value = abbreviate(field.value / 1e3, document.getElementById("exa"));
    document.getElementById("zetta").value = abbreviate(field.value / 1e6, document.getElementById("zetta"));
    document.getElementById("yotta").value = abbreviate(field.value / 1e9, document.getElementById("yotta"));
}

//changeing from exa
function inExa(field){
    document.getElementById("bitbyte").value = abbreviate(field.value * 1e18, document.getElementById("bitbyte"));
    document.getElementById("kilo").value = abbreviate(field.value * 1e15, document.getElementById("kilo"));
    document.getElementById("mega").value = abbreviate(field.value * 1e12, document.getElementById("mega"));
    document.getElementById("giga").value = abbreviate(field.value * 1e9, document.getElementById("giga"));
    document.getElementById("tera").value = abbreviate(field.value * 1e6, document.getElementById("tera"));
    document.getElementById("peta").value = abbreviate(field.value * 1e3, document.getElementById("peta"));
    document.getElementById("zetta").value = abbreviate(field.value / 1e3, document.getElementById("zetta"));
    document.getElementById("yotta").value = abbreviate(field.value / 1e6, document.getElementById("yotta"));
}

//changeing from zetta
function inZetta(field){
    document.getElementById("bitbyte").value = abbreviate(field.value * 1e21, document.getElementById("bitbyte"));
    document.getElementById("kilo").value = abbreviate(field.value * 1e18, document.getElementById("kilo"));
    document.getElementById("mega").value = abbreviate(field.value * 1e15, document.getElementById("mega"));
    document.getElementById("giga").value = abbreviate(field.value * 1e12, document.getElementById("giga"));
    document.getElementById("tera").value = abbreviate(field.value * 1e9, document.getElementById("tera"));
    document.getElementById("peta").value = abbreviate(field.value * 1e6, document.getElementById("peta"));
    document.getElementById("exa").value = abbreviate(field.value * 1e3, document.getElementById("exa"));
    document.getElementById("yotta").value = abbreviate(field.value / 1e6, document.getElementById("yotta"));
}

//changeing from zetta
function inYotta(field){
    document.getElementById("bitbyte").value = abbreviate(field.value * 1e24, document.getElementById("bitbyte"));
    document.getElementById("kilo").value = abbreviate(field.value * 1e21, document.getElementById("kilo"));
    document.getElementById("mega").value = abbreviate(field.value * 1e18, document.getElementById("mega"));
    document.getElementById("giga").value = abbreviate(field.value * 1e15, document.getElementById("giga"));
    document.getElementById("tera").value = abbreviate(field.value * 1e12, document.getElementById("tera"));
    document.getElementById("peta").value = abbreviate(field.value * 1e9, document.getElementById("peta"));
    document.getElementById("exa").value = abbreviate(field.value * 1e6, document.getElementById("exa"));
    document.getElementById("zetta").value = abbreviate(field.value * 1e3, document.getElementById("zetta"));
}