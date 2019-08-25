// ----------------- decrease timer by 1 minute
const $minusButtons = document.getElementsByClassName('minus');
for (i = 0; i < $minusButtons.length; i++) {
    $minusButtons[i].addEventListener('click', minusFunc);
}


// ----------------- increase timer by 1 minute
const $plusButtons = document.getElementsByClassName('plus');
for (i = 0; i < $plusButtons.length; i++) {
    $plusButtons[i].addEventListener('click', plusFunc);
}


// -------------- timer countdown
// 1 minuta = 60 000 milisekund
// 1 sekunda = 1000 milisekund
