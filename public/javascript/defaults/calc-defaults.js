//jshint esversion:6


//if there was a calculator, we fix its text
if (document.getElementById("calculator") != null) {
    inputFix();
    labelFix();
}

//if there was a calculators section, we fix its text
if (document.getElementById("calculators") != null) {
    paragraphFix();
}

//giving all inputs select function in calculators
//fixing power in their placeholder
function inputFix() {

    //getting all inputs in the page
    var inputs = document.getElementById("calculator").getElementsByTagName("input");

    Array.prototype.slice.call(inputs).forEach(input => {
        //giving inputs onclick function
        input.addEventListener("click", function () {
            this.select();
        });

        //if the placeholder didnot contain special power character, we don look at it
        if (input.placeholder.includes("''")) {
            //cheking the placeholder number in-between superscript symbol
            var powerNumber = input.placeholder.split(/''(.*)''/g)[1];

            //unicode number for numbers, except 2 or 3
            var unicodePower = eval("'\\u" + "207" + powerNumber + "'");

            //if the number was 2, use unicode superscript for 2
            if (powerNumber == 2) {
                unicodePower = "\u00B2";
            }
            //if the number was 3, use unicode superscript for 3
            else if (powerNumber == 3) {
                unicodePower = "\u00B3";
            }
            // changing placeholder
            input.setAttribute('placeholder', input.placeholder.replace(/''(.*)''/g, unicodePower));
        }


        //if the placeholder didnot contain special power character, we don look at it
        if (input.placeholder.includes("__")) {
            //cheking the placeholder number in-between superscript symbol
            var subNumber = input.placeholder.split(/__(.*)__/g)[1];

            //unicode number for numbers, except 2 or 3
            var unicodeSub = eval("'\\u" + "208" + subNumber + "'");

            // changing placeholder
            input.setAttribute('placeholder', input.placeholder.replace(/__(.*)__/g, unicodeSub));
        }
        
    });
}

//fixing SUPERSCRIPT and SUBSCTRIP in Labels in CALCULATORS
function labelFix() {

    //getting all labels in the page
    var labels = document.getElementById("calculator").getElementsByTagName("label");

    //checking them for special symbols
    Array.prototype.slice.call(labels).forEach(label => {
        //changing power symbol (''  '')  to  superscript
        label.innerHTML = label.innerHTML.replace(/''(\w+)''/g, '<span class="sup">$1</span>');
        //changing subscripts symbol (__  __)  to  subscript
        label.innerHTML = label.innerHTML.replace(/__(\w+)__/g, '<span class="sub">$1</span>');
    });
}

//fixing SUPERSCRIPT and SUBSCTRIP in paragraphs in CALCULATORS
function paragraphFix() {
    //getting all paragraphs in the page
    var paragraphs = document.getElementById("calculators").getElementsByTagName("p");

    //checking them for special symbols
    Array.prototype.slice.call(paragraphs).forEach(p => {
        //changing power symbol (''  '')  to  superscript
        p.innerHTML = p.innerHTML.replace(/''(\w+)''/g, '<span class="sup">$1</span>');
        //changing subscripts symbol (__  __)  to  subscript
        p.innerHTML = p.innerHTML.replace(/__(\w+)__/g, '<span class="sub">$1</span>');
    });
}