window.onscroll = function () {
    myFunc()
};


var header = document.querySelector('.header');

var sticky = header.offsetTop;


function myFunc() {
    if (window.pageYOffset >= sticky)
        header.classList.add('sticky');
    else header.classList.remove('sticky');
}