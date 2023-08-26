let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.sticky-header');

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        
        header.style.top = "0";
    } else {
        
        header.style.top = "-100px"; 
    }

    prevScrollPos = currentScrollPos;
};
