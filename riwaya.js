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

const back = document.getElementById('back');
const addit = document.getElementById('addit');
let additVisible = false;

back.addEventListener('click', function() {
    if (!additVisible) {
        addit.style.display = 'block';
        additVisible = true;
    } else {
        addit.style.display = 'none';
        additVisible = false;
    }
});
