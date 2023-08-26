// script.js
const backToTopBtn = document.getElementById('backToTopBtn');
const additionalContent = document.getElementById('additionalContent');
let additionalContentVisible = false;

backToTopBtn.addEventListener('click', function() {
    if (!additionalContentVisible) {
        additionalContent.style.display = 'block';
        additionalContentVisible = true;
    } else {
        additionalContent.style.display = 'none';
        additionalContentVisible = false;
    }
});
// script.js
const bazkToTopBtn = document.getElementById('bazkToTopBtn');
const aksell = document.getElementById('aksell');
let aksellVisible = false;

bazkToTopBtn.addEventListener('click', function() {
    if (!aksellVisible) {
        aksell.style.display = 'block';
        aksellVisible = true;
    } else {
        aksell.style.display = 'none';
        aksellVisible = false;
    }
});
// script.js
const bazkToTopBtw = document.getElementById('bazkToTopBtw');
const aksel = document.getElementById('aksel');
let akselVisible = false;

bazkToTopBtw.addEventListener('click', function() {
    if (!akselVisible) {
        aksel.style.display = 'block';
        akselVisible = true;
    } else {
        aksel.style.display = 'none';
        akselVisible = false;
    }
});
// script.js
const eren = document.getElementById('eren');
const dihya = document.getElementById('dihya');
let dihyaVisible = false;

eren.addEventListener('click', function() {
    if (!dihyaVisible) {
        dihya.style.display = 'block';
        dihyaVisible = true;
    } else {
        dihya.style.display = 'none';
        dihyaVisible = false;
    }
});