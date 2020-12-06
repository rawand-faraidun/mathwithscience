//this code is not for homepage, homepage Onscrol animation writen in its own JAVASCRIPT (home.js) file
//scrolling the page
window.onscroll = function () {
    if (window.pageYOffset > 100){
        //when the width of the screen is bigger 768px
        if (window.innerWidth > 768) {
            document.getElementById("header").classList.add("header-scroll");
        }
        else{
            document.getElementById("header").classList.add("header-768-scroll");
            document.getElementById("nav").classList.add("nav-768-scroll");
            document.getElementById("closer").classList.add("closer-768-scroll");
        }
    }
    //getting everything to normal
    else{
        document.getElementById("header").classList.remove("header-scroll");
        document.getElementById("header").classList.remove("header-768-scroll");
        document.getElementById("nav").classList.remove("nav-768-scroll");
        document.getElementById("closer").classList.remove("closer-768-scroll");
    }
};

function navOpen(){
    document.getElementById("nav").classList.toggle("nav-open");
    document.getElementById("closer").classList.toggle("closer-open");
}

function navClose(){
    document.getElementById("nav").classList.remove("nav-open");
    document.getElementById("closer").classList.remove("closer-open");
}