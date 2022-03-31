
$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});

function runOnScroll() {
    var ctrl = 0;
    var nav = document.getElementById("nav");
    if ((window.scrollY >= 0) && (window.scrollY < 700)) {
        nav.style.filter = "invert(0)"; 
        ctrl = 0;
    } else if ((window.scrollY >= 700) && (window.scrollY < 1070)) {
        if (ctrl == 0){
            ctrl = 1;
            nav.style.filter = "invert(1)";
        }
    } 
    else if (window.scrollY >= 1070) {
        nav.style.filter = "invert(0)"; 
        nav.style.transition = "all 300ms";
        ctrl = 0;
    }
    // else {
    //     nav.style.filter = "invert(100%)"; 
    //     nav.style.transition = "all 500ms";
    // }
}; 

// function runOnScroll() {
//     var ctrl = 0;
//     var nav = document.getElementById("nav");
//     if ((window.scrollY >= 0) && (window.scrollY < 700)) {
//         nav.classList.add("nav");
//         nav.classList.remove("nav-invert");
//         ctrl = 0;
//     } else if ((window.scrollY >= 700) && (window.scrollY < 1070)) {
//         if (ctrl == 0){
//             ctrl = 1;
//             nav.classList.add("nav-invert");
//             nav.classList.remove("nav");
//         }
//     } 
//     else if (window.scrollY >= 1070) {
//         nav.classList.add("nav");
//         nav.classList.remove("nav-invert");
//         ctrl = 0;
//     }
// };


window.addEventListener("scroll", runOnScroll);